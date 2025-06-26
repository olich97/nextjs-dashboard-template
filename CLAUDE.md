# CLAUDE.md - Next.js Dashboard Template

This file contains essential information for Claude Code about this Next.js dashboard template project.

## Project Overview

This is a modern, customizable dashboard template built with Next.js 15, TypeScript, and beautiful UI components. It was refactored from an EigenLayer-specific project into a generic, reusable template suitable for various business applications.

## Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript (100% type safety)
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts with custom styling and animations
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Theme**: next-themes (dark/light mode support)
- **State Management**: Jotai + Zustand (when needed)

## Package Manager

**IMPORTANT**: This project uses **yarn** as the package manager. Always use yarn commands:

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Run linting
yarn lint

# Run type checking
yarn type-check
```

## Project Structure

```
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard pages
│   │   ├── analytics/          # Analytics page with advanced charts
│   │   ├── data/              # Data explorer with tables and filters
│   │   ├── reports/           # Reports page with scheduling
│   │   └── page.tsx           # Main dashboard overview
│   ├── page.tsx               # Public-facing landing page
│   ├── globals.css            # Global styles and CSS variables
│   └── layout.tsx             # Root layout with providers
├── components/                  # Reusable components
│   ├── charts/                # Chart components (Recharts)
│   │   ├── performance-overview-chart.tsx
│   │   ├── revenue-distribution-chart.tsx
│   │   └── user-engagement-chart.tsx
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── stats-cards.tsx
│   │   ├── performance-overview.tsx
│   │   ├── revenue-distribution.tsx
│   │   ├── user-engagement.tsx
│   │   └── recent-users-table.tsx
│   ├── layout/                # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── mobile-sidebar.tsx
│   ├── ui/                    # shadcn/ui components
│   └── icons.tsx              # Icon components
├── lib/                        # Utilities and server actions
│   ├── actions.ts             # Server actions for data fetching
│   └── utils.ts              # Utility functions
├── template.config.ts         # Template configuration system
├── types/                     # TypeScript type definitions
└── constants/                 # Constants and static data
    └── data.ts               # Navigation and static data
```

## Configuration System

The template uses a centralized configuration system in `template.config.ts`:

### Core Configuration
- **Branding**: App name, tagline, description, logos
- **Navigation**: Sidebar navigation structure
- **Dashboard**: Title, subtitle, external links
- **Features**: Toggle features like date picker, search, etc.
- **Theme**: Optional color customizations

### Example Configurations
The config includes pre-built examples for:
- E-commerce dashboard
- SaaS analytics
- Crypto/DeFi dashboard

## Key Features

### Landing Page (`app/page.tsx`)
- Beautiful hero section with gradient backgrounds
- Feature showcase with 6 key capabilities
- Stats section (50+ components, 100% TypeScript, React 19, MIT license)
- How it works (3-step process)
- CTA sections and footer
- Fully responsive design
- Uses template configuration for branding

### Dashboard Pages
1. **Overview** (`/dashboard`) - Main dashboard with KPIs, charts, and tables
2. **Analytics** (`/dashboard/analytics`) - Advanced analytics and metrics
3. **Data** (`/dashboard/data`) - Data explorer with search and filters
4. **Reports** (`/dashboard/reports`) - Report generation and scheduling

### Components Architecture
- **Server Components**: Used for data fetching with Suspense
- **Loading States**: Beautiful skeleton components for all charts
- **Error Boundaries**: Proper error handling throughout
- **Responsive Design**: Mobile-first approach with sidebar drawer

## Data Patterns

### Server Actions (`lib/actions.ts`)
All data fetching uses Next.js Server Actions:
- `getDashboardStats()` - KPI metrics
- `getPerformanceData()` - Chart data for area charts
- `getDistributionData()` - Pie chart data
- `getUsers()` - User table data with filtering

### Mock Data
Currently uses realistic mock data that can be easily replaced:
- Business metrics (revenue, users, growth)
- User data with avatars and status
- Performance metrics over time
- Distribution data for charts

## Chart Components

### Performance Overview Chart
- Area chart with gradients
- Multiple data series (revenue, users)
- Custom tooltips and formatting
- Responsive design

### Revenue Distribution Chart  
- Pie chart with custom colors
- Interactive tooltips
- Legend with percentages
- Responsive sizing

### User Engagement Chart
- Bar chart for engagement metrics
- Custom styling and animations
- Tooltip with detailed data
- Mobile-optimized

## UI Components

### Built with shadcn/ui
- Consistent design system
- Dark/light theme support
- Accessible by default
- Customizable via CSS variables

### Key Components Used
- Card, Button, Table, Avatar, Badge
- Skeleton loaders
- Dialog, Sheet (for mobile)
- Theme provider and toggle

## Build and Development

### Development Commands
```bash
yarn dev              # Start development server (http://localhost:3000)
yarn build            # Build for production
yarn start            # Start production server
yarn lint             # Run ESLint
yarn type-check       # Run TypeScript checking
yarn security-audit   # Check for security vulnerabilities
yarn check-updates    # Check for outdated packages
yarn update-deps      # Interactive dependency updates
yarn format           # Format code with Prettier
yarn format:check     # Check if code is properly formatted
yarn pre-commit       # Run all pre-commit checks
```

### Build Configuration
- Uses Next.js 15 with Turbopack for fast development
- Optimized for production with automatic code splitting
- Image optimization and font optimization enabled
- Static export support available

## Customization Guide

### 1. Update Branding
Edit `template.config.ts` to change:
- App name and tagline
- Logo paths (light/dark variants)
- Description and favicon

### 2. Customize Navigation
Modify the navigation array in `template.config.ts`:
- Add/remove menu items
- Change icons (using Lucide icon names)
- Update routes and labels

### 3. Replace Data
Update `lib/actions.ts`:
- Replace mock data with real API calls
- Maintain the same return types
- Add authentication if needed

### 4. Modify Charts
Chart components in `components/charts/`:
- Customize colors and styling
- Add new chart types
- Modify data formatting

### 5. Update Styling
- Global styles in `app/globals.css`
- Component-specific styles using Tailwind
- Theme colors via CSS variables

## Deployment

### Recommended: Vercel
```bash
yarn build
npx vercel --prod
```

### Other Platforms
- Works with any platform supporting Next.js
- Requires Node.js 18+
- Static export available if needed

## Common Tasks

### Adding a New Page
1. Create page file in `app/dashboard/[name]/page.tsx`
2. Add route to navigation in `template.config.ts`
3. Create any needed components
4. Add server actions for data fetching

### Adding a New Chart
1. Create chart component in `components/charts/`
2. Add data fetching function in `lib/actions.ts`
3. Create wrapper component with Suspense
4. Add to dashboard page

### Customizing for Different Industries
Use the example configurations in `template.config.ts`:
- Copy an example (e.commerce, saas, crypto)
- Modify branding and navigation
- Update mock data to match industry
- Customize chart types if needed

## Known Issues

### TypeScript
- All components are fully typed
- Chart formatter functions expect `any` type for flexibility
- Icon types are constrained to Lucide icon names

### Performance
- Uses Suspense boundaries for optimal loading
- Charts render client-side for interactivity
- Images are optimized automatically

### Browser Support
- Modern browsers (ES2020+)
- Responsive design works on all devices
- Dark mode respects system preferences

## Security & Dependency Management

### Automated Security Features
- **ESLint Security Rules**: Basic security rules (no-eval, no-script-url, etc.)
- **Weekly Security Audits**: GitHub Actions workflow runs yarn audit weekly
- **Dependabot**: Automatically creates PRs for dependency security updates
- **Pre-commit Hooks**: Runs lint and type-check before every commit
- **GitHub Security Advisories**: Monitors for known vulnerabilities

### Security Configuration Files
- `.eslintrc.json` - ESLint with security rules
- `.github/workflows/security-audit.yml` - Weekly security audits  
- `.github/dependabot.yml` - Automated dependency updates
- `.github/SECURITY.md` - Security policy and reporting
- `.husky/pre-commit` - Pre-commit security hooks

### Dependency Management
- **Dependabot**: Automated patch and minor version updates
- **Weekly Audits**: Scheduled vulnerability scanning
- **Interactive Updates**: `yarn update-deps` for manual updates
- **Security Monitoring**: Continuous monitoring for vulnerabilities

### Maintenance Commands
```bash
# Security and maintenance
yarn security-audit     # Run dependency security audit
yarn check-updates      # Check for outdated packages  
yarn update-deps        # Interactive dependency updates
yarn pre-commit         # Run all quality checks

# Code quality
yarn lint               # ESLint with security rules
yarn format             # Format with Prettier
yarn type-check         # TypeScript validation
```

## Contributing

When making changes:
1. Maintain TypeScript types
2. Use the existing component patterns
3. Follow the configuration system
4. Add skeleton loading states for new components
5. Test both light and dark themes
6. Ensure mobile responsiveness
7. Run `yarn pre-commit` before committing
8. Security checks will run automatically on commit

## Questions or Issues

For template-specific questions:
- Check the configuration system first
- Review existing component patterns
- Look at the example configurations
- Consider the mock data structure

For Next.js or framework questions:
- Refer to Next.js 15 documentation
- Check shadcn/ui documentation
- Review Recharts documentation for charts