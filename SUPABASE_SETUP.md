# Supabase Setup Guide

## Steps to Fix Projects Not Loading

### 1. Verify Your Supabase Project is Active

1. Go to https://supabase.com/dashboard
2. Check if your project `buxayeqlnsemjdaocgii` is active (not paused)
3. If paused, resume it from the dashboard

### 2. Check Database Schema

1. In Supabase Dashboard, go to **SQL Editor**
2. Run this to check if the `projects` table exists:

```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'projects';
```

### 3. Create/Verify the Projects Table

If the table doesn't exist, run the schema file:

1. Open `supabase/schema.sql`
2. Copy all contents
3. Paste into Supabase SQL Editor
4. Click **Run** (or press Ctrl+Enter)

### 4. Insert Project Data

1. Open `supabase/seed.sql`
2. Copy all contents
3. Paste into Supabase SQL Editor
4. Click **Run** (or press Ctrl+Enter)

### 5. Verify Data

Run this query to check if projects exist:

```sql
SELECT COUNT(*) FROM projects;
SELECT * FROM projects LIMIT 5;
```

### 6. Check Row Level Security (RLS)

The schema should have RLS policies enabled. If projects aren't showing, verify:

```sql
-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'projects';

-- Should return rowsecurity = true
```

If RLS is enabled but you can't see data, check the policies:

```sql
SELECT * FROM pg_policies WHERE tablename = 'projects';
```

### 7. Test Connection Locally

1. Start your dev server: `npm run dev`
2. Visit: http://localhost:3000/test-supabase
3. Check the connection status and error messages

### 8. Common Issues

#### Issue: "relation 'projects' does not exist"
**Solution**: Run the schema.sql file in SQL Editor

#### Issue: "permission denied for table projects"
**Solution**: Check RLS policies. The schema should include:
```sql
CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT
  USING (true);
```

#### Issue: "Failed to fetch" or network error
**Solution**: 
- Check if Supabase project is paused
- Verify environment variables in `.env.local`
- Check browser console for CORS errors

#### Issue: Empty array returned
**Solution**: 
- Run seed.sql to insert sample data
- Or add projects via Supabase Table Editor

### 9. Add Projects Manually (Alternative)

If SQL doesn't work, add projects via Supabase Dashboard:

1. Go to **Table Editor** → **projects**
2. Click **Insert row**
3. Fill in:
   - `title`: Your project name
   - `slug`: URL-friendly name (lowercase, hyphens)
   - `description`: Full description
   - `short_description`: Brief description
   - `tags`: Array of tags (e.g., `["React", "Node.js"]`)
   - `repo_url`: GitHub URL (optional)
   - `live_url`: Live demo URL (optional)
   - `cover_image`: Image URL (optional)
   - `featured`: true/false
4. Click **Save**

### Environment Variables

Make sure your `.env.local` file has:

```env
NEXT_PUBLIC_SUPABASE_URL=https://buxayeqlnsemjdaocgii.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: After changing `.env.local`, restart the dev server.

