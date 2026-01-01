-- Seed data for projects
-- Delete existing data and insert new projects
DELETE FROM projects;

INSERT INTO projects (title, slug, description, short_description, tags, repo_url, live_url, cover_image, featured) VALUES
(
  'Student Management System',
  'student-management-system',
  'A comprehensive student management system built with React and Node.js. Features include student registration, grade management, attendance tracking, and report generation. The system provides a clean interface for managing student records with CSV import/export functionality.',
  'Complete student management solution with grade tracking and analytics',
  ARRAY['React', 'Node.js', 'Express', 'MySQL', 'CSV Processing'],
  'https://github.com/tanmoy0205/student-management-system',
  NULL,
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
  true
),
(
  'Portfolio Website',
  'portfolio-website',
  'A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features animated sections, project showcases, and a contact form. The site uses Framer Motion for smooth animations and Supabase for backend functionality.',
  'Modern portfolio website with animations and project showcase',
  ARRAY['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Supabase', 'Web', 'Mobile'],
  'https://github.com/tanmoy0205/portfolio',
  'https://tanmoy-portfolio.vercel.app',
  '/portfolio-image.png',
  true
),
(
  'E-Commerce Platform',
  'ecommerce-platform',
  'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and order management. Built with React, Node.js, and MongoDB. Features include payment integration, admin dashboard, and inventory management.',
  'Full-featured e-commerce platform with payment integration',
  ARRAY['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
  'https://github.com/tanmoy0205/ecommerce-platform',
  NULL,
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
  false
),
(
  'Task Management App',
  'task-management-app',
  'A collaborative task management application with real-time updates. Features include drag-and-drop functionality, team collaboration, project organization, and deadline tracking. Built with Next.js and Supabase for real-time synchronization.',
  'Collaborative task management with real-time updates',
  ARRAY['Next.js', 'Supabase', 'TypeScript', 'Framer Motion'],
  'https://github.com/tanmoy0205/task-manager',
  NULL,
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
  false
),
(
  'Weather Dashboard',
  'weather-dashboard',
  'A beautiful weather dashboard application displaying current weather, forecasts, and interactive weather maps. Features location-based weather, favorites, and weather alerts. Built with React and integrated with weather APIs.',
  'Weather dashboard with forecasts and interactive maps',
  ARRAY['React', 'API Integration', 'Chart.js', 'CSS3'],
  'https://github.com/tanmoy0205/weather-dashboard',
  NULL,
  'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
  false
);
