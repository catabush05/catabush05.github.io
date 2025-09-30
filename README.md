# Catalina Bush - Personal Portfolio Website

A minimalistic, professional personal portfolio website built with HTML, CSS, and JavaScript for GitHub Pages.

## Features

### Main Page (index.html)
- **Scroll-based Navigation**: Smooth scrolling between full-height sections
- **Hero Section**: Large, centered introduction with your name
- **About Section**: Personal information and background
- **Projects Gallery**: Horizontal scrolling gallery with 4 project slides
  - Header slide introduces the projects section
  - Prevents normal scrolling until all gallery items are viewed
- **Other Projects**: Grid layout for additional work
- **Resume Section**: Two-slide vertical progression for experience and skills
- **Contact Section**: Professional contact information and links

### Navigation
- **Top Navigation Bar**: Clean, borderless links to all pages
- **Left Side Navigator**: 
  - Vertical dots representing each section
  - Active section expands horizontally and turns black
  - Hover shows section names as tooltips
  - Clickable for quick navigation

### Additional Pages
- **Hobbies Page**: Grid layout showcasing personal interests
- **Contact Page**: Detailed contact form and social links  
- **About Page**: Extended biography with skills, timeline, and values

## Design Features

- **Inter Font**: Modern, professional typography
- **Minimalistic Theme**: Clean black and white color scheme
- **Responsive Design**: Mobile-friendly across all screen sizes
- **Smooth Animations**: Transitions between sections and states
- **Professional Layout**: Accessible and user-friendly design

## Technical Implementation

- **Pure HTML/CSS/JavaScript**: No frameworks or dependencies
- **CSS Grid & Flexbox**: Modern layout techniques
- **Intersection Observer**: Efficient scroll detection
- **Touch Support**: Mobile gesture handling
- **Keyboard Navigation**: Accessible keyboard controls

## Getting Started

1. **Local Development**:
   ```bash
   # Navigate to the project directory
   cd catabush05.github.io-main
   
   # Start a local server
   python3 -m http.server 8080
   # or
   npx serve
   ```

2. **GitHub Pages Deployment**:
   - Push to a GitHub repository
   - Enable GitHub Pages in repository settings
   - Select source branch (usually `main`)
   - Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

### Content Updates
- **Personal Information**: Update name, bio, and contact details throughout the files
- **Projects**: Replace placeholder project content in the Projects section
- **Skills & Experience**: Update the Resume section and About page with your actual experience
- **Hobbies**: Customize the hobbies grid with your interests
- **Colors**: Modify CSS variables for different color schemes

### Adding Projects
1. Update the project slides in `index.html`
2. Add project details, images, and links
3. Update the project count in `script.js` if adding/removing slides

### Styling Changes
- **Fonts**: Replace Inter font links in HTML head sections
- **Colors**: Update color values in `style.css`
- **Layout**: Modify CSS Grid and Flexbox properties as needed

## File Structure

```
catabush05.github.io-main/
├── index.html          # Main portfolio page
├── about.html          # Extended about page
├── contact.html        # Contact form and information
├── hobbies.html        # Personal interests page
├── style.css           # Main stylesheet
├── script.js           # Interactive functionality
├── fonts/              # Custom font files (if any)
│   ├── proximanova_regular.ttf
│   └── STHeitiMedium.ttc
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the [MIT License](LICENSE).
- **Mobile Navigation**: Collapsible mobile menu
- **Contact Form**: Ready-to-use contact form (with Netlify forms support)
- **Fast Loading**: Optimized CSS and JavaScript
- **Accessibility**: Semantic HTML and proper ARIA labels

## Pages

- **Home** (`index.html`): Hero section with introduction and featured work
- **About** (`about.html`): Personal background, skills, and experience
- **Projects** (`projects.html`): Portfolio of work and projects
- **Contact** (`contact.html`): Contact information and contact form

## Customization

1. Replace placeholder content in all HTML files
2. Update contact information and social links
3. Add your projects and experience
4. Customize colors and fonts in `styles.css`
5. Add your own images and assets

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- JavaScript (ES6+)
- Google Fonts (Inter)

## Setup

1. Clone this repository
2. Replace placeholder content with your information
3. Customize styling as needed
4. Enable GitHub Pages in repository settings
5. Your site will be available at `https://yourusername.github.io`

## License

This template is free to use for personal and commercial projects.
