"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
	ArrowRight,
	BarChart2,
	TrendingUp,
	Users,
	Database,
	Activity,
	DollarSign,
	Zap,
	Shield,
	Code,
	Smartphone,
	Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { templateConfig } from "@/template.config";

export default function LandingPage() {
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [logo, setLogo] = useState(templateConfig.branding.logoLight);

	useEffect(() => {
		setMounted(true);
		const effectiveTheme = theme === "system" ? "light" : theme;
		setLogo(effectiveTheme === "light" ? templateConfig.branding.logoLight : templateConfig.branding.logoDark);
	}, [theme]);

	if (!mounted) return null;

	return (
		<div className="flex flex-col min-h-screen">
			{/* Navbar */}
			<nav className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center justify-between">
					<div className="flex items-center gap-2">
						<Image
							src={logo}
							width={130}
							height={40}
							alt={templateConfig.branding.appName}
							className="w-32"
						/>
					</div>
					<div className="flex items-center gap-4">
						<Link
							href="#features"
							className="text-sm font-medium hover:underline"
						>
							Features
						</Link>
						<Link
							href="#how-it-works"
							className="text-sm font-medium hover:underline"
						>
							How It Works
						</Link>
						<Link href="/dashboard" passHref>
							<Button>
								Launch Dashboard
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="py-20 md:py-32 relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 z-0" />
				<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-primary/5 to-transparent z-0" />
				<div className="container relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
								Modern
								<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
									{" "}
									Dashboard{" "}
								</span>
								Template
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-md">
								{templateConfig.branding.description}
							</p>
							<div className="flex flex-col sm:flex-row gap-4">
								<Link href="/dashboard" passHref>
									<Button
										size="lg"
										className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
									>
										View Dashboard
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</Link>
								<Link href="#how-it-works" passHref>
									<Button size="lg" variant="outline">
										Learn More
									</Button>
								</Link>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="rounded-2xl overflow-hidden shadow-2xl border bg-card"
						>
							<div className="w-full h-[360px] bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 flex items-center justify-center">
								<div className="text-center space-y-4">
									<BarChart2 className="h-16 w-16 text-blue-500 mx-auto" />
									<p className="text-muted-foreground font-medium">Dashboard Preview</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-16 bg-muted/50">
				<div className="container">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="p-6 rounded-lg"
						>
							<p className="text-3xl md:text-4xl font-bold mb-2">50+</p>
							<p className="text-sm text-muted-foreground">Components</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="p-6 rounded-lg"
						>
							<p className="text-3xl md:text-4xl font-bold mb-2">100%</p>
							<p className="text-sm text-muted-foreground">TypeScript</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="p-6 rounded-lg"
						>
							<p className="text-3xl md:text-4xl font-bold mb-2">React 19</p>
							<p className="text-sm text-muted-foreground">Latest Version</p>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="p-6 rounded-lg"
						>
							<p className="text-3xl md:text-4xl font-bold mb-2">MIT</p>
							<p className="text-sm text-muted-foreground">Open Source</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20">
				<div className="container">
					<div className="text-center mb-16">
						<motion.h2
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl md:text-4xl font-bold mb-4"
						>
							Powerful Features
						</motion.h2>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-xl text-muted-foreground max-w-2xl mx-auto"
						>
							Everything you need to build modern, beautiful dashboards
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<BarChart2 className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Beautiful Charts
							</h3>
							<p className="text-muted-foreground">
								Interactive charts and visualizations with Recharts.
								Area charts, pie charts, and bar charts included.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<Code className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Next.js 15 + TypeScript
							</h3>
							<p className="text-muted-foreground">
								Built with the latest Next.js features including Turbopack,
								Server Components, and full TypeScript support.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<Palette className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Modern UI Components</h3>
							<p className="text-muted-foreground">
								Beautiful components built with shadcn/ui and Tailwind CSS.
								Dark/light theme support included.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<Zap className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Server Actions</h3>
							<p className="text-muted-foreground">
								Modern data fetching patterns with Server Actions,
								Suspense boundaries, and loading states.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<Smartphone className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
							<p className="text-muted-foreground">
								Perfectly responsive layout that works beautifully
								on desktop, tablet, and mobile devices.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="bg-card rounded-xl p-6 shadow-sm border"
						>
							<div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
								<Shield className="h-6 w-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
							<p className="text-muted-foreground">
								Centralized configuration system makes it easy to
								customize branding, navigation, and features.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="py-20 bg-muted/50">
				<div className="container">
					<div className="text-center mb-16">
						<motion.h2
							initial={{ opacity: 0, y: -10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="text-3xl md:text-4xl font-bold mb-4"
						>
							How It Works
						</motion.h2>
						<motion.p
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="text-xl text-muted-foreground max-w-2xl mx-auto"
						>
							Get started with your dashboard in three simple steps
						</motion.p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="flex flex-col items-center text-center p-6"
						>
							<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
								<span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
									1
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-8 w-8 text-primary"
								>
									<rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
									<path d="M9 22v-4h6v4"></path>
									<path d="M8 6h.01"></path>
									<path d="M16 6h.01"></path>
									<path d="M12 6h.01"></path>
									<path d="M12 10h.01"></path>
									<path d="M12 14h.01"></path>
									<path d="M16 10h.01"></path>
									<path d="M16 14h.01"></path>
									<path d="M8 10h.01"></path>
									<path d="M8 14h.01"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">Configure & Customize</h3>
							<p className="text-muted-foreground">
								Update the template configuration to match your brand,
								navigation, and feature requirements.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="flex flex-col items-center text-center p-6"
						>
							<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
								<span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
									2
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-8 w-8 text-primary"
								>
									<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
									<path d="M12 9v4"></path>
									<path d="M12 17h.01"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Connect Your Data
							</h3>
							<p className="text-muted-foreground">
								Replace the mock data with your real API calls
								to display your actual business metrics.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="flex flex-col items-center text-center p-6"
						>
							<div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 relative">
								<span className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
									3
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="h-8 w-8 text-primary"
								>
									<path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z"></path>
									<path d="M8 12h8"></path>
									<path d="M11 9h5"></path>
									<path d="M11 15h5"></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-4">Deploy & Scale</h3>
							<p className="text-muted-foreground">
								Deploy your customized dashboard to Vercel, Netlify,
								or any hosting platform with ease.
							</p>
						</motion.div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 relative">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 z-0" />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="container relative z-10"
				>
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Start Building Your Dashboard
						</h2>
						<p className="text-xl text-muted-foreground mb-8">
							This template is open source and ready to use. Customize it
							for your project or contribute to make it even better.
						</p>
						<Link href="/dashboard" passHref>
							<Button
								size="lg"
								className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
							>
								View Dashboard Template
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
						</Link>
					</div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className="py-12 bg-muted">
				<div className="container">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="space-y-4">
							<Image
								src={logo}
								width={130}
								height={40}
								alt={templateConfig.branding.appName}
								className="w-32"
							/>
							<p className="text-sm text-muted-foreground">
								Modern dashboard template built with Next.js 15, TypeScript,
								and beautiful UI components.
							</p>
						</div>
						<div>
							<h3 className="font-medium mb-4">Navigation</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/dashboard"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										Dashboard
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/analytics"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										Analytics
									</Link>
								</li>
								<li>
									<Link
										href="/dashboard/reports"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										Reports
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-4">Resources</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="https://nextjs.org"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										Next.js
									</a>
								</li>
								<li>
									<a
										href="https://github.com/your-username/nextjs-dashboard-template"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										GitHub Repository
									</a>
								</li>
								<li>
									<a
										href="https://ui.shadcn.com"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground"
									>
										shadcn/ui
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-medium mb-4">Created By</h3>
							<ul className="space-y-2">
								<li>
									<a
										href="https://github.com/olich97"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-2"
										>
											<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
											<path d="M9 18c-4.51 2-5-2-7-2"></path>
										</svg>
										GitHub
									</a>
								</li>
								<li>
									<a
										href="https://x.com/olichdev"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="mr-2"
										>
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
										</svg>
										x.com
									</a>
								</li>
								<li>
									<a
										href="https://olich.me"
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-muted-foreground hover:text-foreground flex items-center"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="mr-2"
										>
											<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
											<path d="M2 12h20"></path>
											<path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"></path>
										</svg>
										Website
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
						<p>
							© {new Date().getFullYear()} {templateConfig.branding.appName} - An open source dashboard template
							for the developer community
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
