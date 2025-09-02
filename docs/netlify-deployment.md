# Netlify Deployment Guide

This guide provides step-by-step instructions for deploying the Riddles Client application to Netlify.

## Prerequisites

- A Netlify account (free tier available)
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Your code pushed to the repository

## Deployment Methods

### Method 1: Git-based Deployment (Recommended)

This method automatically deploys your site whenever you push changes to your repository.

#### Step 1: Connect Repository

1. Log in to your Netlify account
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the `riddles-client` repository

#### Step 2: Configure Build Settings

Netlify should automatically detect the settings from `netlify.toml`, but verify:

- **Base directory**: Leave empty (root)
- **Build command**: `npm ci && npm run build`
- **Publish directory**: `dist`

#### Step 3: Deploy

1. Click "Deploy site"
2. Wait for the build to complete (usually 1-3 minutes)
3. Your site will be available at a random Netlify URL

### Method 2: Manual Deployment

For quick testing or one-time deployments:

1. Build your project locally:
   ```bash
   npm run build
   ```

2. Go to Netlify dashboard
3. Drag and drop the `dist` folder to the deployment area
4. Your site will be deployed instantly

## Configuration

### Environment Variables

Set environment variables in Netlify dashboard:

1. Go to Site settings > Environment variables
2. Add the following variables:
   - `VITE_API_URL`: Your backend API URL
   - Add any other environment variables your app needs

### Custom Domain

To use your own domain:

1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (can take up to 48 hours)

### HTTPS

Netlify provides free HTTPS certificates:
- Automatically enabled for `.netlify.app` domains
- For custom domains, certificate is issued after domain verification

## Build Configuration

The project includes a `netlify.toml` file with optimized settings:

### Features Included

- **Automatic builds** from Git pushes
- **Security headers** for enhanced protection
- **Asset caching** for better performance
- **SPA routing support** for React Router
- **Node.js 20** for build environment

### Build Commands

The configuration uses these commands:
- Install: `npm ci` (faster and more reliable than `npm install`)
- Build: `npm run build`
- Output: `dist` directory

## Branch Deploys

Netlify can deploy different branches:

### Production Branch
- Usually `main` or `master`
- Deploys to your main site URL

### Branch Previews
1. Go to Site settings > Build & deploy
2. Enable "Deploy previews"
3. Choose "Any pull/merge request"
4. Each branch gets its own preview URL

## Build Monitoring

### Build Logs
- View build progress in real-time
- Access logs for debugging failed builds
- Download logs for local analysis

### Build Hooks
Create webhook URLs to trigger builds:
1. Go to Site settings > Build & deploy
2. Add build hook
3. Use the webhook URL to trigger builds from external services

## Performance Optimization

### Build Time Optimization
- Use `npm ci` instead of `npm install`
- Enable dependency caching in builds
- Use build plugins for additional optimizations

### Runtime Optimization
- Assets are automatically cached
- CDN distribution worldwide
- Gzip compression enabled
- HTTP/2 support

## Troubleshooting

### Common Build Issues

**Build fails with dependency errors:**
```bash
# Clear npm cache and try again
npm cache clean --force
npm ci
npm run build
```

**TypeScript compilation errors:**
- Fix all TypeScript errors locally first
- Ensure `tsconfig.json` is properly configured
- Check that all types are properly installed

**Environment variable issues:**
- Variables must start with `VITE_` to be accessible in React
- Set variables in Netlify dashboard, not in code
- Restart builds after changing environment variables

### Build Timeout
If builds take too long:
- Optimize dependencies
- Use build plugins
- Contact Netlify support for higher limits

### Deploy Previews Not Working
- Check repository permissions
- Verify webhook configuration
- Ensure branch protection rules allow Netlify

## Security Best Practices

### Environment Variables
- Never commit secrets to code
- Use Netlify environment variables for sensitive data
- Rotate API keys regularly

### Headers Configuration
The `netlify.toml` includes security headers:
- `X-Frame-Options`: Prevents clickjacking
- `X-XSS-Protection`: Cross-site scripting protection
- `X-Content-Type-Options`: MIME type sniffing protection
- `Referrer-Policy`: Controls referrer information

## Monitoring and Analytics

### Built-in Analytics
- Enable Netlify Analytics for visitor insights
- View bandwidth usage and build minutes
- Monitor form submissions and function calls

### Performance Monitoring
- Use Lighthouse reports
- Monitor Core Web Vitals
- Set up uptime monitoring

## Cost Management

### Free Tier Limits
- 100GB bandwidth per month
- 300 build minutes per month
- 1 concurrent build

### Upgrade Options
- Pro plan for higher limits
- Business plan for team features
- Enterprise for large organizations

## Support Resources

### Documentation
- [Netlify Docs](https://docs.netlify.com/)
- [Build configuration](https://docs.netlify.com/configure-builds/)
- [Deploy previews](https://docs.netlify.com/site-deploys/deploy-previews/)

### Community
- Netlify Community Forum
- Stack Overflow (netlify tag)
- Discord community

### Contact Support
- Free tier: Community support
- Paid plans: Direct email support
- Enterprise: Dedicated support team
