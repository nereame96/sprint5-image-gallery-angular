# Sprint5 - Image Gallery with Angular 20

A responsive image gallery application built with Angular 20, featuring a masonry-style grid layout with a featured image and full accessibility support.

## Features

- **Responsive Grid Layout**: 2 columns on mobile, 4 on tablet, 5 on desktop
- **Featured Image**: One image occupies 2x2 grid cells across all breakpoints
- **Accessibility First**: 
  - Full keyboard navigation support
  - ARIA labels and semantic HTML
  - Screen reader compatible
  - High contrast ratios
- **Modern Stack**: 
  - Angular 20 with standalone components
  - Tailwind CSS v4 for styling
  - TypeScript with strict typing
  - Signals for reactive state management

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI 20.3.10

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sprint5-image-gallery-angular
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`


## Technologies Used

### Core
- **Angular 20.3.x** - Modern web framework
- **TypeScript 5.x** - Type-safe JavaScript

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **SCSS** - CSS preprocessor

### Testing
- **Jasmine** - Testing framework
- **Karma** - Test runner

## Project Structure

```

├──src
│   ├──app
│   │   ├──gallery
│   │   │   ├──gallery.html
│   │   │   ├──gallery.scss
│   │   │   ├──gallery.spec.ts
│   │   │   └──gallery.ts
│   │   ├──image-item
│   │   │   ├──image-item.html
│   │   │   ├──image-item.scss
│   │   │   ├──image-item.spec.ts
│   │   │   └──image-item.ts
│   │   ├──interfaces
│   │   │   └──image.interface.ts
│   │   ├──app.config.server.ts
│   │   ├──app.config.ts
│   │   ├──app.html
│   │   ├──app.routes.server.ts
│   │   ├──app.routes.ts
│   │   ├──app.scss
│   │   ├──app.spec.ts
│   │   └──app.ts
│   ├──index.html
│   ├──main.server.ts
│   ├──main.ts
│   ├──server.ts
│   └──styles.scss


```

##  Responsive Breakpoints

| Device | Screen Width | Columns | Featured Image |
|--------|--------------|---------|----------------|
| Mobile | < 768px | 2 | 2x2 cells |
| Tablet | 768px - 1024px | 4 | 2x2 cells |
| Desktop | > 1024px | 5 | 2x2 cells |

## Component Architecture

### GalleryComponent
- Main container component
- Manages image data with signals
- Renders grid layout

### ImageItemComponent
**Inputs:**
- `image` (required): Image data object
- `isFeatured` (optional): Boolean to mark as featured

**Features:**
- Dynamic grid spanning for featured images
- Hover effects and transitions
- Click/keyboard event handling
- Accessible markup

##  Testing

### Run unit tests:
```bash
ng test
```

### Run tests with coverage:
```bash
ng test --code-coverage
```

### Run specific test file:
```bash
ng test --include='**/image-item.spec.ts'
```

##  Building for Production

Build the project:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory, optimized for production.

## Author

Nerea Medina Carrasco
https://github.com/nereame96