# 🚀 GitHub Setup Guide

Follow these steps to upload your portfolio to GitHub:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `my-portfolio` (or your preferred name)
   - **Description**: "My professional portfolio website built with Next.js and Supabase"
   - **Visibility**: Choose **Public** or **Private**
   - **⚠️ DO NOT** check "Initialize this repository with a README" (we already have files)
5. Click **"Create repository"**

## Step 2: Initialize Git and Push to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
# Navigate to your project directory (if not already there)
cd "C:\Users\Tanmoy Saha\OneDrive\Desktop\my-portfolio"

# Initialize git repository
git init

# Add all files (the .gitignore will automatically exclude sensitive files)
git add .

# Create your first commit
git commit -m "Initial commit: Portfolio website with Next.js and Supabase"

# Rename the default branch to main (if needed)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files uploaded
3. Make sure `.env.local` is **NOT** visible (it should be excluded by .gitignore)

## ⚠️ Important Security Notes

- ✅ Your `.env.local` file is already in `.gitignore` - it will NOT be uploaded
- ✅ `node_modules` folder is excluded - don't upload it
- ✅ Never commit sensitive information like:
  - Supabase API keys
  - Database passwords
  - API secrets

## 🔄 Future Updates

To push future changes:

```bash
git add .
git commit -m "Your commit message describing the changes"
git push
```

## 📝 Optional: Add GitHub Repository URL to README

After uploading, you can update your README.md to include:
- Repository URL
- Live demo URL (after deployment)
- Contributing guidelines

---

**Need help?** Check the GitHub documentation: https://docs.github.com/en/get-started

