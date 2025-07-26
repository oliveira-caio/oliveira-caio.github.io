# Personal Website

A minimal, responsive personal website with unified design system and dark/light theme support.

## Navigation Structure

- **Site Title**: Clicking "Caio da Silva" returns to homepage with about section
- **Projects**: Portfolio/project showcase page
- **Publications**: Academic publications and papers  
- **CV**: Complete curriculum vitae with downloadable PDF

## Design System

### Typography
- **Font Family**: Garamond (EB Garamond, Garamond, Times New Roman, serif)
- **Layout Width**: 700px consistent across all pages
- **Color Scheme**: High contrast with pure black (#000000) and white (#ffffff)

### Unified Structure
All content pages follow a consistent 4-field structure:
1. **Title** (1.3em bold) - Required
2. **Organization/Platform** (1.15em blue) - Optional
3. **Role/Technologies** (1.15em italic) - Optional
4. **Description** (1.15em plain text) - Optional

### Font Scaling
- **Section Headers**: 1.75em bold
- **Item Titles**: 1.3em bold  
- **All Other Text**: 1.15em (organizations, roles, descriptions)
- **Homepage Content**: 1.3em

## Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Automatic system detection with manual toggle
- **No Flash Loading**: Instant theme application prevents white flash between pages
- **Clean URLs**: Homepage link uses relative path to avoid showing "index.html"
- **Unified Styling**: Consistent typography and spacing across all pages
- **Compact Layout**: Tight spacing for efficient content presentation
- **Semantic HTML**: Accessible and SEO-friendly structure
- **Professional Typography**: Academic-style layout with Garamond font

## Page Structure

### Homepage (index.html)
- Personal introduction and about section
- Links to academic profiles (GitHub, Google Scholar, LinkedIn)

### Projects (projects.html)
- Project title with year
- Platform/repository information
- Technologies used
- Project descriptions

### Publications (publications.html)
- Paper titles with publication year
- Author lists with name highlighting
- Conference/journal information

### CV (cv.html)
- Education history
- Research experience
- Teaching experience  
- Achievements and awards
- Extracurricular activities
- Consistent formatting across all sections

## Technical Details

- **CSS Variables**: Theme-aware color system
- **Flexbox Layout**: Responsive header with proper spacing
- **Gap Control**: 20px minimum spacing between titles and dates
- **Print Friendly**: Optimized for CV printing
- **Cross-browser**: Compatible with modern browsers