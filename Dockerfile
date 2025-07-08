
# docker build -t portfolio-app .
# docker stop my-portfolio (stop if running)
# docker rm my-portfolio (for remove)
# docker run -d -p 8080:80 --name my-portfolio portfolio-app
# http://localhost:8080

# Stage 1: Build the React application
# Use an official Node.js runtime as a parent image.
# Using a specific version like '20-alpine' is recommended for consistency and smaller size.
FROM node:20-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
# This step is separated to leverage Docker's layer caching.
# If these files haven't changed, Docker will use the cached node_modules layer.
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Build the application for production
# This runs the "build" script from your package.json
RUN npm run build

# Stage 2: Serve the application with Nginx
# Use a lightweight Nginx image for the production environment.
FROM nginx:stable-alpine AS production

# Copy the custom Nginx configuration file
# This is crucial for handling client-side routing in a Single Page Application (SPA).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the 'build' stage to the Nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow traffic to the Nginx server
EXPOSE 80

# The default command to start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
