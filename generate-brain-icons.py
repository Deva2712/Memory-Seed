#!/usr/bin/env python3
"""
Generate MemorySeed icons with the brain-tree design
Based on the provided blue brain-tree logo image
"""

from PIL import Image, ImageDraw
import os

def create_brain_tree_icon(size, filename):
    """Create an icon with the brain-tree design"""
    
    # Create image with white background
    img = Image.new('RGB', (size, size), 'white')
    draw = ImageDraw.Draw(img)
    
    # Blue color from the logo (#3b82f6 or similar)
    blue = '#3b82f6'
    line_width = max(2, size // 32)
    
    # Scale everything based on size
    center_x = size // 2
    center_y = size // 2
    
    # Brain outline (top part - curved lobes)
    brain_top = int(size * 0.20)
    brain_bottom = int(size * 0.50)
    brain_width = int(size * 0.65)
    
    # Draw brain lobes (three connected ellipses)
    # Left lobe
    draw.ellipse([
        int(size * 0.15), brain_top,
        int(size * 0.45), brain_bottom
    ], outline=blue, width=line_width)
    
    # Center/top lobe
    draw.ellipse([
        int(size * 0.30), int(size * 0.15),
        int(size * 0.70), int(size * 0.45)
    ], outline=blue, width=line_width)
    
    # Right lobe
    draw.ellipse([
        int(size * 0.55), brain_top,
        int(size * 0.85), brain_bottom
    ], outline=blue, width=line_width)
    
    # Neural nodes (circles within brain)
    node_size = max(3, size // 30)
    
    # Top node
    draw.ellipse([
        center_x - node_size, int(size * 0.25) - node_size,
        center_x + node_size, int(size * 0.25) + node_size
    ], fill=blue)
    
    # Left node
    draw.ellipse([
        int(size * 0.30) - node_size, int(size * 0.35) - node_size,
        int(size * 0.30) + node_size, int(size * 0.35) + node_size
    ], fill=blue)
    
    # Right node  
    draw.ellipse([
        int(size * 0.70) - node_size, int(size * 0.35) - node_size,
        int(size * 0.70) + node_size, int(size * 0.35) + node_size
    ], fill=blue)
    
    # Tree trunk (vertical line from brain to bottom)
    draw.line([
        center_x, int(size * 0.45),
        center_x, int(size * 0.75)
    ], fill=blue, width=line_width)
    
    # Leaves (two simple ellipses)
    # Left leaf
    draw.ellipse([
        int(size * 0.30), int(size * 0.60),
        int(size * 0.45), int(size * 0.70)
    ], outline=blue, width=line_width)
    
    # Right leaf
    draw.ellipse([
        int(size * 0.55), int(size * 0.63),
        int(size * 0.70), int(size * 0.73)
    ], outline=blue, width=line_width)
    
    # Base/ground line
    draw.line([
        int(size * 0.35), int(size * 0.78),
        int(size * 0.65), int(size * 0.78)
    ], fill=blue, width=line_width)
    
    # Save the image
    img.save(filename, 'PNG')
    print(f"✅ Created {filename} ({size}x{size})")

# Generate all three sizes
script_dir = os.path.dirname(os.path.abspath(__file__))
src_dir = os.path.join(script_dir, 'src')

create_brain_tree_icon(16, os.path.join(src_dir, 'icon16.png'))
create_brain_tree_icon(48, os.path.join(src_dir, 'icon48.png'))
create_brain_tree_icon(128, os.path.join(src_dir, 'icon128.png'))

print("\n🎉 All brain-tree icons generated successfully!")
print(f"📁 Location: {src_dir}")
