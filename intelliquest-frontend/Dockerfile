# Use a base image with Node.js installed
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Vite port
EXPOSE 5173

# Command to run the frontend with Vite
CMD ["npm", "run", "dev"]

