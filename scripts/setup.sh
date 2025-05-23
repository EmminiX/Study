#!/bin/bash

echo "Setting up Linux Admin Learning Platform..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm not found. Please install Node.js and npm first."
    echo "Visit https://nodejs.org/ for installation instructions."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if content directory exists
if [ ! -d "content" ]; then
    echo "Creating content directory..."
    mkdir -p content
    echo "Content directory created. Please make sure to add your HTML content files."
else
    echo "Content directory already exists."
fi

# Check for content files
missing_files=false
for file in "shell-scripting.html" "user-administration.html" "scheduling-jobs.html" "linux-security.html" "admin-tasks.html"; do
    if [ ! -f "content/$file" ]; then
        echo "Warning: $file is missing from the content directory."
        missing_files=true
    fi
done

if [ "$missing_files" = true ]; then
    echo "Some content files are missing. Please make sure all required HTML files are in the content directory."
else
    echo "All content files found."
fi

echo "Setup complete. Run 'npm start' to start the server."
echo "Then open http://localhost:8080 in your browser." 