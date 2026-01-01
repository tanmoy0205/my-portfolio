<<<<<<< HEAD
# My Portfolio CMS

A modern, animated portfolio website built with Next.js, Supabase, and Framer Motion. Showcase your projects, skills, and connect with visitors through a beautiful, full-stack web application.

## ✨ Features

- 🎨 **Beautiful Animated UI** - Powered by Framer Motion and Tailwind CSS
- 🚀 **Full-Stack with Supabase** - No backend server needed
- 📱 **Responsive Design** - Works perfectly on all devices
- 🔐 **Admin Dashboard** - Manage projects and messages
- 📝 **Contact Form** - Integrated message system
- 🎯 **Project Showcase** - Display your work with beautiful cards
- 🌙 **Dark Mode Ready** - Beautiful dark theme support

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Deployment**: Vercel (Frontend) + Supabase (Backend)

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- A Supabase account (free tier works great!)
- A GitHub account (for deployment)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd myportfolio-cms

# Install dependencies
npm install
# or
yarn install
```

### 2. Set Up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for your project to be ready (takes a few minutes)
3. In your Supabase dashboard, go to **SQL Editor**
4. Copy and paste the contents of `supabase/schema.sql` and run it
5. (Optional) Copy and paste `supabase/seed.sql` to add sample projects
6. Go to **Settings** → **API** and copy:
   - Project URL
   - Anon public key

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Set Up Authentication

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **Add User** → **Create New User**
3. Set email and password (remember these for admin login)
4. The user will automatically have authenticated role

### 5. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
myportfolio-cms/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── page.tsx      # Home page
│   │   ├── projects/     # Projects pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   └── admin/        # Admin dashboard
│   ├── components/       # Reusable components
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utilities (Supabase client)
├── supabase/            # Database schemas
│   ├── schema.sql       # Main schema
│   └── seed.sql         # Sample data
└── public/              # Static assets
```

## 🎨 Customization

### Update Personal Information

1. **Home Page**: Edit `src/app/page.tsx`
   - Change "Your Name" to your name
   - Update the description
   - Modify skills section

2. **About Page**: Edit `src/app/about/page.tsx`
   - Update your story
   - Change stats
   - Modify values

3. **Contact Page**: Edit `src/app/contact/page.tsx`
   - Update contact information (email, phone, location)

4. **Footer**: Edit `src/components/Footer.tsx`
   - Update social media links

5. **Navbar**: Edit `src/components/Navbar.tsx`
   - Change portfolio title/logo

### Styling

- Colors: Edit `tailwind.config.js` to customize the color scheme
- Global styles: Modify `src/app/globals.css`

## 🚀 Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click **Deploy**

That's it! Your site will be live in minutes.

### Supabase (Backend)

Your Supabase backend is already hosted! Just make sure:
- Your database tables are created (via schema.sql)
- Row Level Security policies are enabled
- Admin user is created in Authentication

## 📝 Admin Dashboard

Access the admin dashboard at `/admin` to:
- Manage projects (Create, Edit, Delete)
- View and manage contact messages
- Requires authentication (use the user you created in Supabase)

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

## 🗄️ Database Schema

### Projects Table
- `id` - UUID (Primary Key)
- `title` - Text
- `slug` - Text (Unique)
- `description` - Text
- `short_description` - Text
- `tags` - Text Array
- `repo_url` - Text (Optional)
- `live_url` - Text (Optional)
- `cover_image` - Text (Optional)
- `featured` - Boolean
- `inserted_at` - Timestamp

### Messages Table
- `id` - UUID (Primary Key)
- `name` - Text
- `email` - Text
- `subject` - Text (Optional)
- `message` - Text
- `created_at` - Timestamp

## 🔒 Security

- Row Level Security (RLS) is enabled on all tables
- Public can read projects and insert messages
- Only authenticated users can manage projects and read messages
- Admin access requires Supabase authentication

## 📸 Adding Project Images

You can use:
1. **External URLs** - Paste image URLs directly in the cover_image field
2. **Supabase Storage** - Upload images to Supabase Storage bucket and use the public URL

To set up Supabase Storage:
1. Go to **Storage** in Supabase dashboard
2. Create a bucket (e.g., `portfolio-images`)
3. Make it public
4. Upload images and copy the public URL

## 🐛 Troubleshooting

### "Missing Supabase environment variables"
- Make sure `.env.local` exists and has correct values
- Restart the development server after adding env variables

### "Cannot read properties of undefined"
- Check if your Supabase tables are created
- Verify RLS policies are set correctly
- Ensure you're using the correct project URL and key

### Admin login not working
- Verify user exists in Supabase Authentication
- Check if the user has the authenticated role
- Try resetting the password in Supabase dashboard

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 🤝 Contributing

Feel free to fork, customize, and make it your own! This is your portfolio, so make it unique.

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Next Steps

1. ✅ Set up Supabase project
2. ✅ Run database migrations
3. ✅ Configure environment variables
4. ✅ Customize content
5. ✅ Deploy to Vercel
6. ✅ Share your portfolio!

---

**Built with ❤️ using Next.js and Supabase**

=======
# my-portfolio
>>>>>>> 3eb51b35197c6adf3fd3afbec32e0288ee34f3bd
