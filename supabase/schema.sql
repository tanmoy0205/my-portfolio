-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  short_description TEXT,
  tags TEXT[] DEFAULT '{}',
  repo_url TEXT,
  live_url TEXT,
  cover_image TEXT,
  featured BOOLEAN DEFAULT false,
  inserted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Messages table for contact form
CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Public read access for projects
CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT
  USING (true);

-- Authenticated users can manage projects
CREATE POLICY "Allow authenticated manage projects"
  ON projects FOR ALL
  USING (auth.role() = 'authenticated');

-- Only authenticated users can insert messages (public can insert via API with proper setup)
CREATE POLICY "Allow public insert on messages"
  ON messages FOR INSERT
  WITH CHECK (true);

-- Authenticated users can read messages (admin only)
CREATE POLICY "Allow authenticated read messages"
  ON messages FOR SELECT
  USING (auth.role() = 'authenticated');

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS projects_slug_idx ON projects(slug);
CREATE INDEX IF NOT EXISTS projects_featured_idx ON projects(featured);
CREATE INDEX IF NOT EXISTS messages_created_at_idx ON messages(created_at DESC);

