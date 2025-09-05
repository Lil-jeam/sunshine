---
description: Repository Information Overview
alwaysApply: true
---

# Hair Stylist Website Information

## Summary
A responsive hair stylist website for "SunshineTheStylist" showcasing services, booking information, and a gallery of hair styling work. The site includes sections for about, specialties, booking policies, service prices, and contact information.

## Structure
- **Assets/**: Contains all images including the Hair Gallery subfolder with numbered images
- **CSS**: Main styling in styles.css with responsive design for mobile and desktop
- **JavaScript**: Interactive elements handled in script.js
- **HTML**: Main content in index.html with a test.html for experimental features
- **Python**: Utility script for image renaming
- **Configuration**: VSCode and hint settings

## Language & Runtime
**Languages**: HTML5, CSS3, JavaScript (ES6+), Python
**Runtime**: Browser-based application with Python utility script
**Development Environment**: Visual Studio Code with Live Server (port 5501)

## Main Components

### Frontend
**HTML Structure**:
- Responsive navigation with mobile hamburger menu
- Hero section with booking call-to-action
- About section with stylist information
- Specialties section listing services
- Image gallery with navigation controls
- Booking policies with accordion interface
- Service pricing lists
- Contact information with embedded map

**CSS Features**:
- Custom color scheme with light/dark mode variables
- Responsive design with media queries for different screen sizes
- Custom fonts from Google Fonts
- Interactive elements with transitions and animations
- Accordion components for policy information

**JavaScript Functionality**:
- Mobile menu toggle
- Scroll-based header styling
- Accordion functionality for booking policies
- Image gallery navigation
- External form integration

### Utility Scripts
**Python Image Processor**:
- Renames image files sequentially in a specified directory
- Supports multiple image formats (.jpg, .jpeg, .png, .gif, .webp)

## External Integrations
**Form Integration**: JotForm for appointment booking (https://form.jotform.com/251945831761059)
**Map Integration**: Google Maps embed for location display
**Font Integration**: Google Fonts for typography

## Development Tools
**Code Editor**: Visual Studio Code
**Extensions**: 
- Live Server (configured on port 5501)
- Web Hints (configured in .hintrc)

## Usage & Operations
**Local Development**:
```bash
# Start local development server with VS Code Live Server
# Access at http://localhost:5501
```

**Image Processing**:
```bash
# Run Python script to rename images in gallery
python python.py
```

## Testing
**Browser Testing**: 
- Responsive design testing across multiple screen sizes
- Test page (test.html) for experimental features like 3D text overlay

## Deployment
The website appears to be a static site that can be deployed to any web hosting service that supports static HTML/CSS/JavaScript files.