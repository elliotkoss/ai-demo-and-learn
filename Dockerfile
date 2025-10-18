# Development stage
FROM node:18 as development

WORKDIR /app
COPY package*.json ./
RUN npm install

EXPOSE 8080
CMD ["npm", "run", "dev"]

# Production stage
FROM node:18 as production

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 8080
CMD ["npm", "run", "preview"]
