# Dipesh Singh Portfolio

A modern personal portfolio website built with React, Vite, and Tailwind CSS to showcase projects, experience, certifications, education, and direct contact channels.

## Live Demo

- Portfolio: https://your-portfolio-link.com
- GitHub: https://github.com/dipesh-singh07
- LinkedIn: https://www.linkedin.com/in/dipesh-singh-26b77936a/

## Overview

This portfolio is designed for developers and tech professionals who want a clean, professional online presence with:

- a strong hero section
- work experience timeline
- project showcase with modals
- skills and certifications highlights
- education and achievements sections
- direct email, GitHub, and LinkedIn profiles
- responsive layout for desktop and mobile

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Lucide React Icons
- Framer Motion-inspired motion effects

## Features

- Responsive single-page portfolio layout
- Smooth scroll and animated reveal effects
- Project cards and modal-based project details
- Dynamic data-driven content from src/data
- Contact section with direct social links and email copy
- Fast Vite-based development and production builds

## Project Structure

```bash
portfolio2/
├── public/
│   ├── resume.pdf
│   └── favicon or static assets
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── effects/
│   │   ├── layout/
│   │   ├── projects/
│   │   ├── sections/
│   │   └── ui/
│   ├── data/
│   │   ├── achievements.js
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── socialLinks.js
│   │   └── socialLinks.js
│   ├── lib/
│   ├── pages/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The application will start in development mode, usually at:

```bash
http://localhost:5173
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Customization

Update your personal information in the data files under src/data:

- src/data/profile.js
- src/data/experience.js
- src/data/projects.js
- src/data/skills.js
- src/data/socialLinks.js

### Update profile details

```js
export const profile = {
  name: 'Dipesh Singh',
  role: 'Full-Stack / Backend Developer',
  headline: 'I build web applications, REST APIs and data-driven systems.',
  email: 'dipeshnrsinghraj@gmail.com',
};
```

### Add a resume

Place your PDF in the public folder and reference it in src/data/profile.js:

```js
resume: '/resume.pdf'
```

## Contact

For business inquiries, project collaboration, or networking opportunities:

- Email: dipeshnrsinghraj@gmail.com
- GitHub: https://github.com/dipesh-singh07
- LinkedIn: https://www.linkedin.com/in/dipesh-singh-26b77936a/

## Deployment

This project is ready to deploy on platforms such as:

- GitHub Pages
- Vercel
- Netlify
- Firebase Hosting

For Vite projects, static hosting is usually the easiest deployment path.

## License

This project is open-source and available under the MIT License.

## Acknowledgements

- React
- Vite
- Tailwind CSS
- Lucide React
- Open-source community contributors

## Author

Dipesh Singh

Full-Stack / Backend Developer
