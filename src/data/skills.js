/**
 * skills.js
 * ---------
 * Edit your skills here.
 * Skills.jsx and Learning.jsx consume this data.
 * Do NOT hardcode skills inside components.
 *
 * coreSkillCategories: Your production-ready, verified skills grouped by domain.
 * currentlyLearningSkills: Active study topics (shown with a recruiter disclaimer).
 */

export const coreSkillCategories = [
  {
    id: 'core',
    title: 'CORE SKILLS',
    description: 'Server runtime, application logic, database schemas, and REST architectures.',
    accent: 'emerald',
    skills: [
      { name: 'JavaScript', highlight: 'Modern ES6+, async/await, closures, promises' },
      { name: 'Node.js', highlight: 'Event loop, asynchronous I/O, server streams' },
      { name: 'Express.js', highlight: 'Middleware, routing controllers, REST patterns' },
      { name: 'REST APIs', highlight: 'CRUD endpoints, HTTP status standards, JSON contracts' },
      { name: 'MongoDB', highlight: 'NoSQL collections, document modeling, aggregation' },
      { name: 'Mongoose', highlight: 'ODM schemas, validation rules, hooks' },
    ],
  },
  {
    id: 'frontend',
    title: 'FRONTEND',
    description: 'Building responsive client interfaces and integrating backend APIs.',
    accent: 'cyan',
    skills: [
      { name: 'HTML', highlight: 'Semantic elements, accessibility, SEO structure' },
      { name: 'CSS', highlight: 'Flexbox, CSS Grid, responsive design, animations' },
      { name: 'JavaScript', highlight: 'Client state, event handling, fetch integration' },
      { name: 'React.js', highlight: 'Component architecture, hooks, state, props' },
    ],
  },
  {
    id: 'authentication',
    title: 'AUTHENTICATION',
    description: 'Securing web applications and managing authenticated client sessions.',
    accent: 'indigo',
    skills: [
      { name: 'JWT', highlight: 'Token generation, verification, and payload claims' },
      { name: 'Cookies', highlight: 'HttpOnly, Secure flags, SameSite session management' },
    ],
  },
  {
    id: 'tools',
    title: 'TOOLS',
    description: 'Version control, collaborative workflows, and endpoint validation.',
    accent: 'amber',
    skills: [
      { name: 'Git', highlight: 'Branching, commit history, and code versioning' },
      { name: 'GitHub', highlight: 'Remote repositories and collaboration workflows' },
      { name: 'Postman', highlight: 'API endpoint testing, headers, request debugging' },
    ],
  },
];

export const currentlyLearningSkills = [
  {
    topic: 'Python',
    category: 'Programming Languages',
    focus: 'Scripting, backend web frameworks, data handling, and automation.',
    status: 'In Progress',
  },
  {
    topic: 'PostgreSQL / SQL',
    category: 'Relational Databases',
    focus: 'Relational schemas, foreign keys, complex joins, indexing, and ACID transactions.',
    status: 'In Progress',
  },
  {
    topic: 'FastAPI',
    category: 'Python Web Frameworks',
    focus: 'High-performance asynchronous REST endpoints, Pydantic data validation, and OpenAPI specs.',
    status: 'Exploring',
  },
  {
    topic: 'Docker',
    category: 'Containerization & DevOps',
    focus: 'Dockerfiles, containerizing Node.js services, multi-container compose, and networking.',
    status: 'In Progress',
  },
  {
    topic: 'System Design',
    category: 'Architecture & Scalability',
    focus: 'Horizontal scaling, caching patterns (Redis), load balancing, and rate limiting.',
    status: 'In Progress',
  },
  {
    topic: 'DSA (Data Structures & Algorithms)',
    category: 'Computer Science Fundamentals',
    focus: 'Arrays, hash tables, linked lists, trees, graphs, and time/space complexity analysis.',
    status: 'Ongoing Practice',
  },
  {
    topic: 'Performance Optimization',
    category: 'Systems & Backend Optimization',
    focus: 'Query optimization, connection pooling, response compression, and memory profiling.',
    status: 'Exploring',
  },
  {
    topic: 'AWS / Cloud',
    category: 'Cloud Infrastructure',
    focus: 'Cloud architecture fundamentals, AWS EC2, S3 bucket storage, and managed cloud databases.',
    status: 'Foundational',
  },
];

// Unified skills object — alternative access pattern
export const skills = {
  core: coreSkillCategories,
  learning: currentlyLearningSkills,
};
