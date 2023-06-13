# Base Image
FROM node:18 as builder

# Set Working Directory
WORKDIR /

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Stage 2

# Base Image
FROM nginx:1.21.1-alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
