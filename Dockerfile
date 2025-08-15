# Use official Node.js LTS image as base
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# Build the React app (optional — for production)
# RUN npm run build

# Start the development server (adjust if using Vite or Next.js)
CMD ["sh", "-c", "npm install && npm run dev"]

# Expose the port React runs on
EXPOSE 8080
