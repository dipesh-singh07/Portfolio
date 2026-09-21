export const projects = [
  {
    id: 'blinkit-clone',
    title: 'Blinkit Clone',
    tagline: 'Full-Stack Quick Commerce Application',
    badge: 'Full-Stack E-Commerce',
    description:
      'Full-stack e-commerce application inspired by a quick-commerce platform, featuring authentication, product management, cart functionality and backend CRUD operations.',
    overview:
      'A comprehensive full-stack grocery and essentials ordering application built from the ground up to replicate high-speed commerce workflows. Features end-to-end user authentication, dynamic catalog management, and seamless cart operations backed by an Express and MongoDB data layer.',
    problem:
      'Quick-commerce platforms demand near-instant catalog navigation, robust session preservation, dynamic inventory calculation, and secure access boundaries for customer and administrative actions.',
    solution:
      'Engineered an Express.js backend coupled with MongoDB/Mongoose. Implemented dual-layer authentication utilizing JSON Web Tokens stored securely in HttpOnly cookies, ensuring persistent authenticated sessions without exposing tokens to client-side scripts. Structured clean MVC controllers for cart additions, quantity toggling, and catalog updates.',
    technologies: [
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'EJS',
    ],
    features: [
      'User authentication',
      'JWT authentication',
      'Cookie-based authentication',
      'Product management',
      'Cart functionality',
      'CRUD operations',
      'MongoDB integration',
      'Structured backend architecture',
    ],
    architecture: {
      pattern: 'Model-View-Controller (MVC)',
      database: 'MongoDB with Mongoose ODM',
      authStrategy: 'Stateless JWT in HttpOnly Cookie',
      apiDesign: 'RESTful Endpoints for Products & Cart State',
    },
    liveUrl: 'https://blinkit-clone-y2g5.onrender.com',
    githubUrl: null, // Placeholder: Update when repo is made public
    githubPlaceholder: 'https://github.com',
    status: 'Live on Render',
    accentColor: '#10B981', // Emerald
    themeGlow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: 'crop-management-system',
    title: 'Crop Management System',
    tagline: 'Data-Driven Agriculture Lifecycle Platform',
    badge: 'Agricultural Data Platform',
    description:
      'A data-driven agriculture management application for managing crops and their lifecycle information.',
    overview:
      'A specialized data platform designed for agricultural monitoring and farm yield management. Organizes structured records for crop varieties, seed sowing schedules, harvesting windows, and irrigation records into an intuitive management dashboard.',
    problem:
      'Farming operations require accurate tracking across disparate crop lifecycle phases, where irregular watering schedules or unlogged harvest timelines can directly compromise seasonal yields.',
    solution:
      'Created a centralized Node.js and Express service with a normalized MongoDB schema. Designed explicit REST routes to document and query crop profiles, irrigation logs, and seasonal lifecycle events, giving farmers and agronomists real-time visibility over field operations.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Crop management',
      'Crop information',
      'Sowing information',
      'Harvest information',
      'Irrigation information',
      'CRUD operations',
      'Database integration',
    ],
    architecture: {
      pattern: 'REST API & Service Architecture',
      database: 'MongoDB Document Collections',
      authStrategy: 'Session / Role-Based Access Support',
      apiDesign: 'Resource-Oriented CRUD for Agricultural Records',
    },
    liveUrl: null, // Placeholder: Deployment in progress
    githubUrl: null, // Placeholder: Update when repo is made public
    githubPlaceholder: 'https://github.com',
    status: 'Backend Ready',
    accentColor: '#06B6D4', // Cyan
    themeGlow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: 'library-management-system',
    title: 'Library Management System',
    tagline: 'Backend-Driven Circulation & Member Management',
    badge: 'REST API & Management System',
    description:
      'A backend-driven library management application for managing books, members and issue/return operations.',
    overview:
      'A high-integrity management service designed to handle book circulation, member records, and inventory status. Features structured CRUD operations for book catalogs and student accounts with strict checks against overdue returns and inventory shortages.',
    problem:
      'Traditional or manual library registries suffer from unsynchronized checkout logs, lost inventory, and difficult tracking of borrowed books across different member tiers.',
    solution:
      'Developed a robust backend in Node.js and Express utilizing MongoDB for persistent record keeping. Built automated issue and return state transitions that update book availability counters in real time upon successful circulation transactions.',
    technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Book management',
      'Member/student management',
      'Book issue',
      'Book return',
      'CRUD operations',
      'Database integration',
      'REST API development',
    ],
    architecture: {
      pattern: 'Modular REST API',
      database: 'MongoDB with Relational Document References',
      authStrategy: 'Admin Session Validation',
      apiDesign: 'Transactional Issue & Return Endpoints',
    },
    liveUrl: 'https://library-management-urlv.onrender.com',
    githubUrl: null, // Placeholder: Update when repo is made public
    githubPlaceholder: 'https://github.com',
    status: 'Live on Render',
    accentColor: '#6366F1', // Indigo
    themeGlow: 'rgba(99, 102, 241, 0.15)',
  },
];
