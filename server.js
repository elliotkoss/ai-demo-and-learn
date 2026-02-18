import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 8080;

let activeConnections = 0;
let totalRequests = 0;

// Log memory and connection stats every 5 minutes
setInterval(() => {
  const mem = process.memoryUsage();
  console.log(
    `[METRICS] rss=${Math.round(mem.rss / 1024 / 1024)}MB` +
    ` heap=${Math.round(mem.heapUsed / 1024 / 1024)}/${Math.round(mem.heapTotal / 1024 / 1024)}MB` +
    ` connections=${activeConnections} totalRequests=${totalRequests}`
  );
}, 5 * 60 * 1000).unref();

// Track active connections
app.use((req, res, next) => {
  activeConnections++;
  totalRequests++;
  let decremented = false;
  res.on('close', () => {
    if (!decremented) {
      decremented = true;
      activeConnections--;
    }
  });
  next();
});

// Security headers to match what serve sets by default
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

// Hashed assets get long cache, index.html gets no-cache
app.use('/assets', express.static(join(__dirname, 'dist', 'assets'), {
  maxAge: '1y',
  immutable: true,
}));

// Serve remaining static files from dist/
app.use(express.static(join(__dirname, 'dist')));

// SPA fallback - serve index.html for any route that doesn't match a file
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Log crashes instead of dying silently
process.on('uncaughtException', (err) => {
  const mem = process.memoryUsage();
  console.error(`[CRASH] Uncaught exception: ${err.message}`);
  console.error(`[CRASH] Stack: ${err.stack}`);
  console.error(
    `[CRASH] Memory: rss=${Math.round(mem.rss / 1024 / 1024)}MB` +
    ` heap=${Math.round(mem.heapUsed / 1024 / 1024)}/${Math.round(mem.heapTotal / 1024 / 1024)}MB`
  );
  process.exit(1);
});

process.on('unhandledRejection', (reason) => {
  console.error(`[CRASH] Unhandled rejection: ${reason}`);
  process.exit(1);
});

const server = app.listen(PORT, () => {
  const mem = process.memoryUsage();
  console.log(`[START] Server running on port ${PORT}`);
  console.log(
    `[START] Memory: rss=${Math.round(mem.rss / 1024 / 1024)}MB` +
    ` heap=${Math.round(mem.heapUsed / 1024 / 1024)}/${Math.round(mem.heapTotal / 1024 / 1024)}MB`
  );
});

// Graceful shutdown - drain connections before exiting
process.on('SIGTERM', () => {
  const mem = process.memoryUsage();
  console.log(
    `[SHUTDOWN] SIGTERM received.` +
    ` Memory: rss=${Math.round(mem.rss / 1024 / 1024)}MB` +
    ` heap=${Math.round(mem.heapUsed / 1024 / 1024)}/${Math.round(mem.heapTotal / 1024 / 1024)}MB` +
    ` connections=${activeConnections} totalRequests=${totalRequests}`
  );
  server.close(() => {
    console.log('[SHUTDOWN] All connections drained. Exiting.');
    process.exit(0);
  });
});
