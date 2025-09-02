# Riddles Client

A React-based client application for solving and managing riddles. Built with modern web technologies including React 19, TypeScript, and Vite.

## Features

- Interactive riddle interface
- TypeScript for type safety
- Modern React with hooks
- Fast development with Vite
- ESLint for code quality
- Responsive design

## Tech Stack

- **React 19** - Latest React version with improved features
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and quality checks

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 20 or higher)
- npm or yarn package manager
- Git

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd riddles-client
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Building for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Netlify Deployment

This project is configured for easy deployment to Netlify:

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Netlify will automatically detect the `netlify.toml` configuration
4. Your site will be deployed automatically

For detailed deployment instructions, see:

- [Quick Start Guide](./docs/netlify-quick-start.md)
- [Complete Deployment Guide](./docs/netlify-deployment.md)

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server

## Configuration

### Environment Variables

Create a `.env` file in the root directory for local development:

```env
VITE_API_URL=http://localhost:3000
```

For production, set environment variables in your hosting platform:

- `VITE_API_URL` - Backend API URL

## Project Structure

```text
riddles-client/
├── public/          # Static assets
├── src/             # Source code
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── ...          # Other components and utilities
├── dist/            # Production build (generated)
├── netlify.toml     # Netlify deployment configuration
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── vite.config.ts   # Vite configuration
└── eslint.config.js # ESLint configuration
```

## Code Quality

This project uses ESLint for code quality. The configuration includes:

- TypeScript-aware rules
- React-specific rules
- Best practices enforcement

Run linting:

```bash
npm run lint
```

## Browser Support

This application supports all modern browsers that support ES2015+ features.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run tests and linting: `npm run lint`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## Troubleshooting

### Common Issues

**Development server won't start:**

- Make sure Node.js version is 20 or higher
- Delete `node_modules` and run `npm install` again
- Check if port 5173 is already in use

**Build fails:**

- Run `npm run lint` to check for code issues
- Make sure all TypeScript errors are resolved
- Verify all dependencies are installed

**Deployment issues:**

- Check that `dist` folder contains all necessary files
- Verify environment variables are set correctly
- Check browser console for runtime errors
