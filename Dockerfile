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

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
