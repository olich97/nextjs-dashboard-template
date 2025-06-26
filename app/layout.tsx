import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { templateConfig } from "@/template.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${templateConfig.branding.appName} | ${templateConfig.branding.tagline}`,
  description: templateConfig.branding.description,
  openGraph: {
    title: `${templateConfig.branding.appName} | ${templateConfig.branding.tagline}`,
    description: templateConfig.branding.description,
    images: templateConfig.branding.bannerImage ? [
      {
        url: templateConfig.branding.bannerImage,
        width: 1200,
        height: 630,
      },
    ] : [],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
			<html lang="en" suppressHydrationWarning className="h-full">
				<body
					className={cn(
						"h-full bg-background font-sans antialiased",
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						{children}
						<Toaster />
					</ThemeProvider>
				</body>
			</html>
		);
}