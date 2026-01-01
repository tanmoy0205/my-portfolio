# Troubleshooting Supabase Connection Issues

## Quick Fix Checklist

### 1. Check Project Status
- Go to https://supabase.com/dashboard
- Find your project: `buxayeqlnsemjdaocgii`
- **IMPORTANT**: Make sure the project is **ACTIVE** (not paused)
- If paused, click "Resume" to activate it

### 2. Verify Environment Variables
Check your `.env.local` file has:
```env
NEXT_PUBLIC_SUPABASE_URL=https://buxayeqlnsemjdaocgii.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

After updating `.env.local`, **restart your dev server**:
```bash
# Stop the server (Ctrl+C)
npm run dev
```

### 3. Run Database Setup
In Supabase Dashboard → SQL Editor:

1. **Create Tables**: Copy and run `supabase/schema.sql`
2. **Add Sample Data**: Copy and run `supabase/seed.sql`

### 4. Test Connection
Visit: http://localhost:3000/test-supabase

This page will show:
- Connection status
- Error details (if any)
- Troubleshooting tips

### 5. Common Error Codes & Solutions

#### Error: `42P01` - Table does not exist
**Solution**: Run `supabase/schema.sql` in SQL Editor

#### Error: `42501` - Permission denied
**Solution**: 
1. Check Row Level Security (RLS) is enabled
2. Verify the policy exists:
```sql
SELECT * FROM pg_policies WHERE tablename = 'projects';
```
3. If missing, run this in SQL Editor:
```sql
CREATE POLICY "Allow public read on projects"
  ON projects FOR SELECT
  USING (true);
```

#### Error: `Failed to fetch` or Network Error
**Solution**:
1. Check if project is paused → Resume it
2. Verify URL is correct in `.env.local`
3. Check browser console for CORS errors
4. Try accessing: https://buxayeqlnsemjdaocgii.supabase.co/rest/v1/ in browser

#### Error: `PGRST116` - Invalid API request
**Solution**: 
1. Verify API key is correct in `.env.local`
2. Get fresh API key from: Settings → API → anon public key

### 6. Manual Setup (Alternative)

If SQL doesn't work, create the table manually:

1. Go to **Table Editor** → **New Table**
2. Name: `projects`
3. Add columns:
   - `id` (uuid, primary key, default: `uuid_generate_v4()`)
   - `title` (text)
   - `slug` (text, unique)
   - `description` (text)
   - `short_description` (text)
   - `tags` (text[], array)
   - `repo_url` (text, nullable)
   - `live_url` (text, nullable)
   - `cover_image` (text, nullable)
   - `featured` (boolean, default: false)
   - `inserted_at` (timestamptz, default: now())

4. Go to **Authentication** → **Policies**
5. Enable RLS
6. Create policy: "Allow public read on projects"

### 7. Verify Data Exists

Run in SQL Editor:
```sql
SELECT COUNT(*) FROM projects;
SELECT * FROM projects LIMIT 5;
```

If count is 0, run `seed.sql` to add sample data.

### 8. Still Not Working?

1. Check browser console for detailed error messages
2. Visit `/test-supabase` page for diagnostics
3. Verify Supabase project is on free tier (not paused due to inactivity)
4. Check Supabase status page: https://status.supabase.com/

