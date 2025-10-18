#!/bin/bash

# AI Demo and Learn - Development Script
# Usage: ./start.sh [start|clean|stop]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker Desktop and try again."
        exit 1
    fi
}

# Function to start the development environment
start_dev() {
    print_status "Starting AI Demo and Learn development environment..."
    
    # Check if Docker is running
    check_docker
    
    # Check if docker-compose.yml exists
    if [ ! -f "docker-compose.yml" ]; then
        print_error "docker-compose.yml not found. Please ensure you're in the project root directory."
        exit 1
    fi
    
    # Start the development environment
    print_status "Starting containers with hot reload..."
    docker compose up --build
    
    print_success "Development environment started! Visit http://localhost:8080"
}

# Function to clean up containers and images
clean_dev() {
    print_status "Cleaning up development environment..."
    
    # Check if Docker is running
    check_docker
    
    # Stop and remove containers
    print_status "Stopping and removing containers..."
    docker compose down --remove-orphans
    
    # Remove the project image
    print_status "Removing project image..."
    docker rmi ai-demo-and-learn 2>/dev/null || print_warning "Image ai-demo-and-learn not found or already removed"
    
    # Clean up dangling images
    print_status "Cleaning up dangling images..."
    docker image prune -f
    
    print_success "Development environment cleaned up!"
}

# Function to stop the development environment
stop_dev() {
    print_status "Stopping development environment..."
    
    # Check if Docker is running
    check_docker
    
    # Stop containers
    print_status "Stopping containers..."
    docker compose down
    
    print_success "Development environment stopped!"
}

# Function to view logs
view_logs() {
    print_status "Viewing development environment logs..."
    
    # Check if Docker is running
    check_docker
    
    # Check if containers are running
    if ! docker compose ps | grep -q "Up"; then
        print_warning "No containers are currently running. Start the environment first with: ./start.sh start"
        exit 1
    fi
    
    # Show logs with follow option
    print_status "Showing logs (press Ctrl+C to exit)..."
    docker compose logs -f
}

# Function to show help
show_help() {
    echo "AI Demo and Learn - Development Script"
    echo ""
    echo "Usage: ./start.sh [command]"
    echo ""
    echo "Commands:"
    echo "  start   Start the development environment with hot reload"
    echo "  stop    Stop the development environment"
    echo "  logs    View real-time logs from running containers"
    echo "  clean   Stop containers and clean up images"
    echo "  help    Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./start.sh start    # Start development server"
    echo "  ./start.sh logs     # View live logs"
    echo "  ./start.sh stop     # Stop development server"
    echo "  ./start.sh clean    # Clean up everything"
}

# Main script logic
case "${1:-help}" in
    start)
        start_dev
        ;;
    stop)
        stop_dev
        ;;
    logs)
        view_logs
        ;;
    clean)
        clean_dev
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
