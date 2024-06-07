# Use official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY client/package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files
COPY client ./

# Build the React app
RUN npm run build

# Use an official Nginx image to serve the static files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80



# # Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
# # Use official Node.js image as the base image
# FROM node:16-alpine

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json files to the working directory
# COPY package*.json ./

# # Install backend dependencies
# RUN npm install

# # Copy the rest of the backend files
# COPY . .

# # Build the React frontend
# WORKDIR /app/client
# RUN npm install
# RUN npm run build

# # Move the build files to the backend's public directory
# RUN mv /app/client/build /app/public

# # Expose the port the app runs on
# EXPOSE 3000

# # Start the server
# CMD ["npm", "start"]

# docker-compose.yaml
# version: '3.8'

# services:
#   navjeevan-app:
#     build: .
#     ports:
#       - "3000:3000"
#     environment:
#       - MONGO_URL=mongodb://mongo:27017/navjeevan
#     depends_on:
#       - mongo

#   mongo:
#     image: mongo:latest
#     ports:
#       - "27017:27017"
#     volumes:
#       - mongo-data:/data/db

# volumes:
#   mongo-data:
