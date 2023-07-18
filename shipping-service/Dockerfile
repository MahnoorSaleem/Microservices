# Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR .

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Specify the command to run the application
CMD [ "npm", "start" ]