# 🚀 Complete Setup Guide

This guide will walk you through setting up your portfolio from scratch.

## Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- Supabase client
- Framer Motion
- Tailwind CSS
- And more...

## Step 2: Create Supabase Project

1. **Sign Up/Login**
   - Go to [https://supabase.com](https://supabase.com)
   - Create a free account or login

2. **Create New Project**
   - Click "New Project"
   - Fill in:
     - Project name: `myportfolio` (or any name)
     - Database password: (choose a strong password - save this!)
     - Region: (choose closest to you)
   - Click "Create new project"
   - Wait 2-3 minutes for setup

3. **Get Your Credentials**
   - Once ready, go to **Settings** → **API**
   - Copy:
     - **Project URL** (looks like: `https://xxxxx.supabase.co`)
     - **anon public** key (long string)

## Step 3: Set Up Database

1. **Open SQL Editor**
   - In Supabase dashboard, click **SQL Editor** in left sidebar
   - Click **New Query**

2. **Run Schema**
   - Open `supabase/schema.sql` from this project
   - Copy ALL the SQL code
   - Paste into Supabase SQL Editor
   - Click **Run** (or press Ctrl+Enter)
   - You should see "Success. No rows returned"

3. **Add Sample Data (Optional)**
   - Open `supabase/seed.sql`
   - Copy the SQL code
   - Paste into SQL Editor and run
   - This adds example projects

4. **Verify Tables**
   - Go to **Table Editor** in sidebar
   - You should see:
     - `projects` table
     - `messages` table

## Step 4: Configure Authentication

1. **Create Admin User**
   - Go to **Authentication** → **Users**
   - Click **Add User** → **Create New User**
   - Enter:
     - Email: `admin@yourdomain.com` (use your email)
     - Password: (choose a secure password)
   - Click **Create User**
   - **Save these credentials!** You'll need them for admin login

2. **Verify User**
   - The user should appear in the list
   - They automatically get "authenticated" role

## Step 5: Environment Variables

1. **Create `.env.local` file**
   - In the project root, create a file named `.env.local`
   - Add these lines:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

2. **Replace Values**
   - Replace `xxxxx.supabase.co` with your actual Project URL
   - Replace `your-anon-key-here` with your actual anon key
   - **Don't add quotes** around the values

Example:
```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.xxxxx
```

## Step 6: Test Locally

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Open Browser**
   - Go to [http://localhost:3000](http://localhost:3000)
   - You should see your portfolio homepage

3. **Test Pages**
   - Navigate to `/projects` - should show your projects
   - Navigate to `/about` - about page
   - Navigate to `/contact` - contact form
   - Navigate to `/admin` - admin login

4. **Test Admin**
   - Go to `/admin`
   - Login with the credentials you created
   - You should see the dashboard
   - Try creating a project!

## Step 7: Customize Content

### Update Personal Info

1. **Name and Bio**
   - Edit `src/app/page.tsx`
   - Find "Your Name" and replace with your name
   - Update the description

2. **About Page**
   - Edit `src/app/about/page.tsx`
   - Update your story and stats

3. **Contact Info**
   - Edit `src/app/contact/page.tsx`
   - Update email, phone, location

4. **Social Links**
   - Edit `src/components/Footer.tsx`
   - Update GitHub, LinkedIn, Twitter links

5. **Portfolio Title**
   - Edit `src/components/Navbar.tsx`
   - Change "Portfolio" to your preferred title

### Update Projects

Use the admin dashboard (`/admin`) to:
- Add new projects
- Edit existing projects
- Delete projects
- View messages

## Step 8: Deploy to Vercel

### Option A: Using Vercel Dashboard

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/portfolio.git
     git push -u origin main
     ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click **"Add New Project"**
   - Import your repository
   - Add environment variables:
     - `NEXT_PUBLIC_SUPABASE_URL`
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Click **Deploy**
   - Wait 2-3 minutes
   - Your site is live! 🎉

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
# Add environment variables when asked
```

## Step 9: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your domain
4. Follow DNS configuration instructions

## ✅ Verification Checklist

Before considering setup complete:

- [ ] Supabase project created
- [ ] Database tables created (projects, messages)
- [ ] Admin user created
- [ ] Environment variables configured
- [ ] Site runs locally (`npm run dev`)
- [ ] Can view projects on homepage
- [ ] Can login to admin dashboard
- [ ] Can create/edit projects in admin
- [ ] Contact form works
- [ ] Site deployed to Vercel
- [ ] Custom content updated

## 🆘 Common Issues & Solutions

### Issue: "Missing Supabase environment variables"
**Solution**: 
- Make sure `.env.local` exists in project root
- Check values are correct (no quotes)
- Restart dev server after changes

### Issue: "Cannot connect to Supabase"
**Solution**:
- Verify Project URL is correct
- Check anon key is correct
- Make sure Supabase project is active

### Issue: "Table doesn't exist"
**Solution**:
- Go back to SQL Editor in Supabase
- Re-run the schema.sql
- Check Table Editor to verify tables exist

### Issue: "Admin login not working"
**Solution**:
- Verify user exists in Supabase Authentication
- Check email/password are correct
- Try resetting password in Supabase dashboard

### Issue: "Projects not showing"
**Solution**:
- Check if projects table has data
- Verify RLS policies are enabled
- Check browser console for errors

## 📞 Need Help?

1. Check the main README.md for detailed documentation
2. Review Supabase documentation: [supabase.com/docs](https://supabase.com/docs)
3. Check Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

## 🎉 You're Done!

Your portfolio is now live! Share it with the world and keep building amazing things!

