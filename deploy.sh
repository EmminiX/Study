#!/bin/bash

# Linux System Learning Platform - Docker Deployment Script

# Function to display usage
function show_usage {
    echo "Usage: $0 [option]"
    echo "Options:"
    echo "  start       - Start the containers"
    echo "  stop        - Stop the containers"
    echo "  restart     - Restart the containers"
    echo "  build       - Build the Docker images"
    echo "  logs        - Show container logs"
    echo "  status      - Show container status"
    echo "  rebuild     - Rebuild and restart containers"
    echo "  prune       - Remove unused Docker resources"
    echo "  help        - Show this help message"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null || ! command -v docker-compose &> /dev/null; then
    echo "Error: Docker and/or Docker Compose not found. Please install Docker and Docker Compose first."
    exit 1
fi

# Check for command-line argument
if [ $# -eq 0 ]; then
    show_usage
    exit 1
fi

# Process command-line arguments
case "$1" in
    start)
        echo "Starting containers..."
        docker-compose up -d
        echo "Containers started. Website is available at http://localhost"
        ;;
    stop)
        echo "Stopping containers..."
        docker-compose down
        echo "Containers stopped."
        ;;
    restart)
        echo "Restarting containers..."
        docker-compose restart
        echo "Containers restarted."
        ;;
    build)
        echo "Building Docker images..."
        docker-compose build
        echo "Build completed."
        ;;
    logs)
        echo "Showing container logs (press Ctrl+C to exit)..."
        docker-compose logs -f
        ;;
    status)
        echo "Container status:"
        docker-compose ps
        ;;
    rebuild)
        echo "Rebuilding and restarting containers..."
        docker-compose down
        docker-compose build
        docker-compose up -d
        echo "Rebuild and restart completed. Website is available at http://localhost"
        ;;
    prune)
        echo "Removing unused Docker resources..."
        docker system prune -f
        echo "Pruning completed."
        ;;
    help)
        show_usage
        ;;
    *)
        echo "Error: Unknown option: $1"
        show_usage
        exit 1
        ;;
esac

exit 0 