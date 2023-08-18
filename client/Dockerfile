# Use an official Node.js runtime as the base image
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port
EXPOSE 3000

# Build the React app
RUN npm run build

# Run this command when container starts
CMD ["npm", "start"]
