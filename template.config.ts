import { Icons } from "@/components/icons";

export interface TemplateConfig {
  // Core Branding - The essentials that every project needs
  branding: {
    appName: string;
    tagline: string;
    description: string;
    logoLight: string;
    logoDark: string;
    favicon: string;
    bannerImage?: string;
  };
  
  // Navigation Structure - Keep it flexible
  navigation: {
    title: string;
    href: string;
    icon: keyof typeof Icons;
    label: string;
    count?: number;
    tag?: string;
    disabled?: boolean;
  }[];
  
  // Dashboard Basic Config
  dashboard: {
    title: string;
    subtitle?: string;
    externalLinks?: {
      label: string;
      url: string;
      icon?: string;
    }[];
  };
  
  // Feature Toggles - What's available
  features: {
    dateRangePicker: boolean;
    refreshButton: boolean;
    search: boolean;
    mobileSupport: boolean;
    darkMode: boolean;
  };
  
  // Optional customizations
  theme?: {
    primaryColor?: string;
    accentColor?: string;
  };
}

// Default template configuration
export const templateConfig: TemplateConfig = {
  branding: {
    appName: "Dashboard Template",
    tagline: "Modern Analytics Dashboard",
    description: "A beautiful, customizable dashboard template built with Next.js",
    logoLight: "/logo_black.png",
    logoDark: "/logo_white.png",
    favicon: "/favicon.ico",
  },
  
  navigation: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: "home",
      label: "overview",
    },
    {
      title: "Analytics", 
      href: "/dashboard/analytics",
      icon: "chart",
      label: "analytics",
    },
    {
      title: "Data",
      href: "/dashboard/data", 
      icon: "database",
      label: "data",
    },
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: "file-text",
      label: "reports",
    },
  ],
  
  dashboard: {
    title: "Analytics Overview",
    subtitle: "Monitor your key metrics and performance indicators",
  },

  features: {
    dateRangePicker: true,
    refreshButton: true,
    search: true,
    mobileSupport: true,
    darkMode: true,
  },
};

// Example configurations for inspiration - developers can copy and modify
export const examples = {
  ecommerce: {
    ...templateConfig,
    branding: {
      ...templateConfig.branding,
      appName: "E-Commerce Dashboard",
      tagline: "Sales & Inventory Analytics",
    },
    navigation: [
      { title: "Overview", href: "/dashboard", icon: "home", label: "overview" },
      { title: "Products", href: "/dashboard/products", icon: "package", label: "products" },
      { title: "Orders", href: "/dashboard/orders", icon: "shopping-cart", label: "orders" },
      { title: "Customers", href: "/dashboard/customers", icon: "users", label: "customers" },
    ],
    dashboard: {
      title: "Sales Overview",
      subtitle: "Track your online store performance",
      externalLinks: [
        { label: "Shopify Admin", url: "https://admin.shopify.com", icon: "external-link" }
      ],
    },
  },

  saas: {
    ...templateConfig,
    branding: {
      ...templateConfig.branding,
      appName: "SaaS Analytics",
      tagline: "Product & User Insights",
    },
    navigation: [
      { title: "Overview", href: "/dashboard", icon: "home", label: "overview" },
      { title: "Users", href: "/dashboard/users", icon: "users", label: "users" },
      { title: "Revenue", href: "/dashboard/revenue", icon: "dollar-sign", label: "revenue" },
      { title: "Features", href: "/dashboard/features", icon: "zap", label: "features" },
    ],
    dashboard: {
      title: "Product Analytics",
      subtitle: "Monitor user engagement and growth metrics",
    },
  },

  crypto: {
    ...templateConfig,
    branding: {
      ...templateConfig.branding,
      appName: "DeFi Dashboard",
      tagline: "Decentralized Finance Analytics",
    },
    navigation: [
      { title: "Portfolio", href: "/dashboard", icon: "home", label: "portfolio" },
      { title: "Protocols", href: "/dashboard/protocols", icon: "server", label: "protocols" },
      { title: "DeFi Yield", href: "/dashboard/yield", icon: "trending-up", label: "yield" },
      { title: "Risk", href: "/dashboard/risk", icon: "alert-triangle", label: "risk" },
    ],
    dashboard: {
      title: "DeFi Portfolio",
      subtitle: "Track your decentralized finance positions",
    },
    theme: {
      primaryColor: "#f59e0b",
      accentColor: "#10b981",
    },
  },
} as const;