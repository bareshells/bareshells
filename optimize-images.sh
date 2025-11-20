#!/bin/bash

# Image Optimization Script for Homepage Images
# This script compresses images in the public/homepage folder

echo "🖼️  Starting image optimization..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Installing via Homebrew..."
    brew install imagemagick
fi

# Create backup directory
BACKUP_DIR="public/homepage_backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"

echo "📦 Backing up original images to $BACKUP_DIR..."
cp -r public/homepage/* "$BACKUP_DIR/"

echo "🔧 Optimizing images..."

# Optimize JPG files
for img in public/homepage/*.jpg; do
    if [ -f "$img" ]; then
        echo "  Optimizing $(basename "$img")..."
        convert "$img" -quality 85 -strip -resize '1200x1200>' "$img"
    fi
done

# Optimize PNG files
for img in public/homepage/*.png; do
    if [ -f "$img" ]; then
        echo "  Optimizing $(basename "$img")..."
        convert "$img" -quality 85 -strip -resize '1200x1200>' "$img"
    fi
done

echo "✅ Image optimization complete!"
echo "📊 Backup saved to: $BACKUP_DIR"
echo ""
echo "Before/After sizes:"
du -sh "$BACKUP_DIR" | awk '{print "Before: " $1}'
du -sh public/homepage | awk '{print "After:  " $1}'
