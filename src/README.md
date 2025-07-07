# Personal Website - Source Code Structure

This document explains the organization of the source code for better maintainability and understanding.

## 📁 Directory Structure

```
src/
├── pages/                    # Main page components (routes)
│   ├── Home/                # Homepage
│   │   └── index.js
│   ├── Skills/              # Skills page
│   │   └── index.js
│   ├── Experience/          # Experience page
│   │   └── index.js
│   └── Projects/            # Projects page
│       └── index.js
├── components/              # Reusable UI components
│   ├── common/              # Shared components used across pages
│   │   ├── NavBar.js        # Navigation bar
│   │   └── Footer.js        # Footer component
│   ├── sections/            # Page sections and content components
│   │   ├── About.js         # About section
│   │   ├── Banner.js        # Hero banner
│   │   ├── Education.js     # Education experience
│   │   ├── Work.js          # Work experience
│   │   ├── Volunteer.js     # Volunteer experience
│   │   ├── List.js          # Skills list
│   │   ├── Awards.js        # Awards section
│   │   ├── Blogs.js         # Blog components
│   │   ├── Portfolio.js     # Portfolio grid
│   │   └── [Project Files]  # Individual project components
│   └── ui/                  # Small, reusable UI components
├── styles/                  # CSS files organized by feature
│   ├── homepage/            # Homepage styles
│   │   ├── banner.css
│   │   └── about.css
│   ├── experiences/         # Experience page styles
│   │   ├── work.css
│   │   ├── volunteer.css
│   │   └── education.css
│   ├── skills/              # Skills page styles
│   │   ├── skill.css
│   │   └── award.css
│   ├── blog/                # Blog styles
│   │   └── blog.css
│   ├── nav.css              # Navigation styles
│   ├── footer.css           # Footer styles
│   └── project.css          # Project styles
├── assets/                  # Static assets (images, videos, etc.)
├── utils/                   # Utility functions and helpers
├── constants/               # Constants and configuration
├── App.js                   # Main application component
├── App.css                  # Global application styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## 🎯 Organization Principles

### 1. **Pages vs Components**
- **Pages**: Main route components that represent entire pages
- **Components**: Reusable UI pieces that can be used across multiple pages

### 2. **Component Categories**
- **Common**: Shared components like navigation and footer
- **Sections**: Content-specific components for different page sections
- **UI**: Small, atomic UI components (buttons, cards, etc.)

### 3. **File Naming Conventions**
- **Components**: PascalCase (e.g., `NavBar.js`, `About.js`)
- **Pages**: PascalCase folder with `index.js` inside
- **Styles**: kebab-case (e.g., `nav.css`, `homepage-banner.css`)
- **Utilities**: camelCase (e.g., `formatDate.js`)

### 4. **CSS Organization**
- Styles are co-located with their related features
- Global styles in root level CSS files
- Component-specific styles in feature folders

## 🔄 Migration Notes

The structure has been reorganized from the previous flat structure to improve:
- **Maintainability**: Related files are grouped together
- **Scalability**: Easy to add new pages and components
- **Clarity**: Clear separation of concerns
- **Reusability**: Components are properly categorized

## 📝 Adding New Features

### Adding a New Page:
1. Create a new folder in `pages/`
2. Add `index.js` with the page component
3. Update routing in `App.js`
4. Add corresponding styles in `styles/`

### Adding a New Component:
1. Determine the category (common/sections/ui)
2. Create the component file with appropriate naming
3. Add corresponding styles if needed
4. Import and use in relevant pages

### Adding New Styles:
1. Create feature-specific folders in `styles/` if needed
2. Use consistent naming conventions
3. Import in the relevant components 