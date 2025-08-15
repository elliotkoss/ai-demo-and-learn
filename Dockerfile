# Use official Node.js LTS image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Build the React app (optional — for production)
# RUN npm run build

# Expose the port React runs on
EXPOSE 8080

# Run Vite with proper signal forwarding
CMD ["sh", "-c", "npm install && npm run dev"]
