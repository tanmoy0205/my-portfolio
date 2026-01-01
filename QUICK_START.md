# ⚡ Quick Start Commands

## Initial Setup (One Time)

```bash
# 1. Install dependencies
npm install

# 2. Create .env.local file
# Copy the example and add your Supabase credentials:
# NEXT_PUBLIC_SUPABASE_URL=your-url
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
```

## Daily Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server (locally)
npm start

# Deploy to Vercel (if using CLI)
vercel
```

## Database Setup (One Time)

1. **Run SQL Schema**
   - Open Supabase Dashboard → SQL Editor
   - Copy contents of `supabase/schema.sql`
   - Paste and Run

2. **Add Sample Data (Optional)**
   - Copy contents of `supabase/seed.sql`
   - Paste and Run in SQL Editor

3. **Create Admin User**
   - Go to Authentication → Users
   - Add User with email and password
   - Save credentials for admin login

## Common Tasks

### Add New Project
- Go to `/admin`
- Login with your admin credentials
- Click "Add Project"
- Fill in details and save

### View Messages
- Go to `/admin`
- Click "Messages" tab
- View and manage contact form submissions

### Update Content
- Edit files in `src/app/` for pages
- Edit `src/components/` for reusable components

## Troubleshooting

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Check for errors
npm run lint
```

---

**Need more help?** See `SETUP_GUIDE.md` for detailed instructions.

