# Docker Deployment Guide for Linux System Learning Platform

This guide explains how to deploy the Linux System Learning Platform using Docker and Docker Compose.

## Prerequisites

- Docker Engine (version 20.10.0 or higher)
- Docker Compose (version 2.0.0 or higher)

## Deployment Steps

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/linux-learning-platform.git
cd linux-learning-platform
```

### 2. Make the deployment script executable

```bash
chmod +x deploy.sh
```

### 3. Build and start the containers

```bash
./deploy.sh build
./deploy.sh start
```

This will:
- Build the Docker image for the website
- Start the container in detached mode (background)
- Make the website available at `http://localhost`

## Deployment Script Usage

The `deploy.sh` script provides several commands to help manage your Docker deployment:

```bash
./deploy.sh [option]
```

Available options:

- `start` - Start the containers
- `stop` - Stop the containers
- `restart` - Restart the containers
- `build` - Build the Docker images
- `logs` - Show container logs (press Ctrl+C to exit)
- `status` - Show container status
- `rebuild` - Rebuild and restart containers
- `prune` - Remove unused Docker resources
- `help` - Show this help message

## Docker Compose Manual Usage

If you prefer to use Docker Compose commands directly:

```bash
# Build the image
docker-compose build

# Start the containers
docker-compose up -d

# Stop the containers
docker-compose down

# View logs
docker-compose logs -f
```

## Configuration

### Port Configuration

By default, the website runs on port 80. If you need to change this, edit the `docker-compose.yml` file and modify the port mapping:

```yaml
ports:
  - "8080:80"  # Change 8080 to your preferred port
```

### Development Mode

For development, you can uncomment the volume mounts in `docker-compose.yml` to enable live updating of files without rebuilding the container:

```yaml
volumes:
  - ./index.html:/usr/share/nginx/html/index.html
  - ./styles.css:/usr/share/nginx/html/styles.css
  - ./app.js:/usr/share/nginx/html/app.js
  - ./content:/usr/share/nginx/html/content
```

## Troubleshooting

### Website Not Accessible

1. Check if the container is running:
   ```bash
   ./deploy.sh status
   ```

2. Check container logs for errors:
   ```bash
   ./deploy.sh logs
   ```

3. Verify port mapping:
   ```bash
   docker ps
   ```

### Permission Issues

If you encounter permission issues with the mounted volumes, run:

```bash
sudo chown -R $(id -u):$(id -g) .
```

## Production Deployment Notes

When deploying to production:

1. Configure a custom domain in the nginx configuration
2. Set up SSL with Let's Encrypt or similar service
3. Consider using Docker Swarm or Kubernetes for high availability
4. Enable resource limits in the docker-compose.yml file

For SSL configuration, you'll need to modify the `nginx.conf` file and add appropriate certificates. 