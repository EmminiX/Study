#!/bin/bash

# Script to create a compressed archive of the Linux System Learning Platform
# Excludes unnecessary directories and files

# Set the output archive name
ARCHIVE_NAME="linux-learning-platform.tar.gz"

echo "Creating compressed archive of the Linux System Learning Platform..."
echo "Output file: $ARCHIVE_NAME"

# Create tar.gz archive excluding unnecessary files/directories
tar --exclude='node_modules' \
    --exclude='venv' \
    --exclude='.git' \
    --exclude='.DS_Store' \
    --exclude='*.log' \
    --exclude='Upgrade_plan.*' \
    --exclude='package-lock.json' \
    --exclude="$ARCHIVE_NAME" \
    -czf "$ARCHIVE_NAME" .

# Check if archive was created successfully
if [ $? -eq 0 ]; then
    # Get archive size
    SIZE=$(du -h "$ARCHIVE_NAME" | cut -f1)
    echo "Archive created successfully!"
    echo "Archive size: $SIZE"
    echo "Location: $(pwd)/$ARCHIVE_NAME"
else
    echo "Error: Failed to create archive."
    exit 1
fi 