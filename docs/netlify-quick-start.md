# Netlify Quick Setup

## Deploy in 3 Steps

### Step 1: Push Code
Make sure your code is in a Git repository (GitHub, GitLab, or Bitbucket).

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Choose your repository
4. Click "Deploy site"

### Step 3: Configure (if needed)
Netlify will use the `netlify.toml` file automatically.

## Environment Variables
If your app needs API URLs or other secrets:
1. Go to Site settings
2. Click Environment variables
3. Add `VITE_API_URL` with your backend URL

## Custom Domain
1. Go to Site settings
2. Click Domain management
3. Add your domain
4. Update your DNS records as shown

## That's it!
Your site will rebuild automatically when you push code changes.

## Need Help?
- Check the detailed guide in `netlify-deployment.md`
- Visit [docs.netlify.com](https://docs.netlify.com)
- Contact support through the Netlify dashboard
