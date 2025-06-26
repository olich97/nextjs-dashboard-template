# 🚀 Next.js Dashboard Template

A modern, beautiful, and highly customizable dashboard template built with Next.js 15, TypeScript, and the latest web technologies. Perfect for building analytics dashboards, admin panels, SaaS applications, and business intelligence tools.

## ✨ Features

### 🎨 **Beautiful UI Components**
- **Modern Design**: Clean, professional interface with shadcn/ui components
- **Dark/Light Theme**: Full theme support with smooth transitions
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Custom Charts**: Beautiful, interactive charts with Recharts
- **Loading States**: Smooth skeleton loaders for better UX

### 📊 **Dashboard Components**
- **KPI Cards**: Revenue, users, growth metrics with trend indicators
- **Performance Charts**: Area charts with gradients and animations
- **Distribution Charts**: Interactive pie charts with custom tooltips
- **Data Tables**: User tables with avatars, badges, and sorting
- **Real-time Data**: Server actions with realistic loading states

### ⚡ **Performance & Developer Experience**
- **Next.js 15**: Latest features with Turbopack for fast development
- **TypeScript**: Full type safety throughout the application
- **Server Components**: Optimal performance with React 19
- **Suspense Boundaries**: Proper loading states and error handling
- **Modern Patterns**: Server actions, streaming, and progressive enhancement

### 🔧 **Easy Customization**
- **Template Configuration**: Centralized config for branding and features
- **Multiple Examples**: Pre-built configs for e-commerce, SaaS, crypto
- **Flexible Navigation**: Easy to modify sidebar and navigation
- **Generic Data Models**: Works with any type of business data

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Charts**: [Recharts](https://recharts.org/) with custom styling
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **State**: [Jotai](https://jotai.org/) + [Zustand](https://zustand-demo.pmnd.rs/)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/nextjs-dashboard-template.git
   cd nextjs-dashboard-template
   ```

2. **Install dependencies**
   ```bash
   yarn install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000) to see the landing page and [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the dashboard!

## 🎨 Customization

### Template Configuration

Edit `template.config.ts` to customize your dashboard:

```typescript
export const templateConfig: TemplateConfig = {
  branding: {
    appName: "Your Dashboard",
    tagline: "Your Custom Tagline",
    description: "Your dashboard description",
    logoLight: "/your-logo-light.png",
    logoDark: "/your-logo-dark.png",
  },
  navigation: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: "home",
      label: "overview",
    },
    // Add your custom navigation items
  ],
  features: {
    dateRangePicker: true,
    refreshButton: true,
    search: true,
    mobileSupport: true,
    darkMode: true,
  },
};
```

### Pre-built Examples

Choose from ready-made configurations:

```typescript
// E-commerce Dashboard
import { examples } from "@/template.config";
export const templateConfig = examples.ecommerce;

// SaaS Analytics
export const templateConfig = examples.saas;

// Crypto/DeFi Dashboard  
export const templateConfig = examples.crypto;
```

### Adding Custom Data

Replace the mock data in `lib/actions.ts` with your real API calls:

```typescript
// Replace mock data with real API calls
export async function getDashboardStats() {
  // const res = await fetch('/api/stats');
  // return res.json();
  
  // For now, returns mock data
  return dashboardStats;
}

export async function getUsers(options?: FilterOptions) {
  // const res = await fetch('/api/users', { ... });
  // return res.json();
  
  // For now, returns mock data  
  return users;
}
```

## 📁 Project Structure

```
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard pages
│   │   ├── analytics/          # Analytics page
│   │   ├── data/              # Data explorer page
│   │   ├── reports/           # Reports page
│   │   └── page.tsx           # Main dashboard
│   ├── page.tsx               # Landing page
│   ├── globals.css            # Global styles
│   └── layout.tsx             # Root layout
├── components/                  # Reusable components
│   ├── charts/                # Chart components
│   │   ├── performance-overview-chart.tsx
│   │   ├── revenue-distribution-chart.tsx
│   │   └── user-engagement-chart.tsx
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── stats-cards.tsx
│   │   ├── performance-overview.tsx
│   │   └── recent-users-table.tsx
│   ├── layout/                # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── mobile-sidebar.tsx
│   └── ui/                    # shadcn/ui components
├── lib/                        # Utilities and actions
│   ├── actions.ts             # Server actions
│   └── utils.ts              # Utility functions
├── template.config.ts         # Template configuration
└── types/                     # TypeScript types
```

## 🎯 Use Cases

This template is perfect for:

- **Analytics Dashboards** - Business intelligence and data visualization
- **Admin Panels** - Content management and user administration  
- **SaaS Applications** - Customer dashboards and metrics
- **E-commerce** - Sales analytics and inventory management
- **Financial Tools** - Trading platforms and portfolio management
- **Marketing Tools** - Campaign analytics and performance tracking

## 🌟 Key Components

### Landing Page
- **Hero Section**: Beautiful gradient backgrounds with animations
- **Feature Showcase**: Grid of feature cards highlighting key capabilities  
- **Stats Section**: Template statistics (components, TypeScript, React version)
- **How It Works**: Three-step process explanation
- **Responsive Design**: Works perfectly on all devices

### Dashboard Overview
- **KPI Cards**: Revenue, users, growth, conversion metrics
- **Performance Chart**: Multi-line area chart with gradients
- **Distribution Charts**: Pie charts for revenue and user segments
- **User Tables**: Recent users with avatars and status badges

### Navigation
- **Responsive Sidebar**: Collapsible with icons and labels
- **Mobile Support**: Drawer navigation for mobile devices
- **Theme Toggle**: Dark/light mode switching
- **Search**: Global search functionality

### Data Fetching
- **Server Actions**: Modern data fetching patterns
- **Loading States**: Beautiful skeleton components
- **Error Handling**: Graceful error boundaries
- **Caching**: Optimized performance with Next.js caching

## 🎨 Theming

The template supports full theming customization:

```css
/* Custom theme variables in globals.css */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* Add your custom colors */
}
```

## 📱 Mobile Support

- **Responsive Grid**: Adapts to all screen sizes
- **Mobile Sidebar**: Slide-out navigation drawer
- **Touch Interactions**: Optimized for mobile usage
- **Performance**: Fast loading on mobile networks

## 🚀 Deployment

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Docker
```bash
docker build -t dashboard-template .
docker run -p 3000:3000 dashboard-template
```

### Static Export
```bash
yarn build
yarn export
```

## 🔒 Security & Maintenance

### Automated Security Features
- **ESLint Rules**: Security-focused linting rules (no-eval, no-script-url, etc.)
- **Weekly Security Audits**: Automated dependency vulnerability scanning
- **Dependabot Integration**: Automatic security patch updates
- **Pre-commit Hooks**: Lint and type-check before every commit
- **GitHub Security Advisories**: Continuous monitoring for vulnerabilities

### Dependency Management
```bash
# Check for security vulnerabilities
yarn security-audit

# Check for outdated packages
yarn check-updates

# Interactive dependency updates (be careful with major versions)
yarn update-deps

# Run pre-commit checks (lint + type-check)
yarn pre-commit

# Format code with Prettier
yarn format
```

### Automated Workflows
- **Security Audit**: Weekly vulnerability scanning with `yarn audit`
- **Dependency Updates**: Automated patch-level updates via Dependabot
- **CI Pipeline**: Lint, type-check, build, and security validation
- **Code Quality**: ESLint + Prettier for consistent code style

## 📚 Examples

Check out the `/app/dashboard` pages for complete examples of:

- **Analytics Page**: Advanced charts and metrics
- **Data Explorer**: Tables with filtering and search
- **Reports**: Scheduled reports and templates

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Recharts](https://recharts.org/) for the charting components
- [Lucide](https://lucide.dev/) for the icon set
- [Next.js](https://nextjs.org/) team for the amazing framework

---

**Made with ❤️ for the developer community**

If you found this template helpful, please consider giving it a ⭐ on GitHub!