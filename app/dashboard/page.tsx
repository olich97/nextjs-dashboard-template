import { Suspense } from "react";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { templateConfig } from "@/template.config";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RefreshButton from "@/components/refresh-button";
import StatsCards from "@/components/dashboard/stats-cards";
import PerformanceOverview from "@/components/dashboard/performance-overview";
import RevenueDistribution from "@/components/dashboard/revenue-distribution";
import UserEngagement from "@/components/dashboard/user-engagement";
import RecentUsersTable from "@/components/dashboard/recent-users-table";

export default function DashboardPage() {
	return (
		<div className="flex-1 space-y-4 p-4 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<div>
					<h2 className="text-3xl font-bold tracking-tight">
						{templateConfig.dashboard.title}
					</h2>
					{templateConfig.dashboard.subtitle && (
						<p className="text-muted-foreground">
							{templateConfig.dashboard.subtitle}
						</p>
					)}
				</div>
				<div className="flex items-center space-x-2">
					{templateConfig.features.dateRangePicker && <CalendarDateRangePicker />}
					{templateConfig.features.refreshButton && <RefreshButton />}
					{templateConfig.dashboard.externalLinks?.map((link, index) => (
						<Link key={index} href={link.url} target="_blank">
							<Button size="sm" variant="outline">
								<ExternalLink className="mr-2 h-4 w-4" />
								{link.label}
							</Button>
						</Link>
					))}
				</div>
			</div>

			<Tabs defaultValue="overview" className="space-y-4">
				<TabsList>
					<TabsTrigger value="overview">Overview</TabsTrigger>
					<TabsTrigger value="analytics">Analytics</TabsTrigger>
					<TabsTrigger value="performance">Performance</TabsTrigger>
					<TabsTrigger value="insights">Insights</TabsTrigger>
				</TabsList>

				<TabsContent value="overview" className="space-y-4">
					{/* KPI Cards */}
					<StatsCards />

					{/* Main Chart and Recent Users */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<PerformanceOverview />
						<RecentUsersTable />
					</div>

					{/* Secondary Charts */}
					<div className="grid gap-4 md:grid-cols-2">
						<RevenueDistribution />
						<UserEngagement />
					</div>
				</TabsContent>

				<TabsContent value="analytics" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Advanced Analytics</CardTitle>
							<CardDescription>
								Detailed metrics and performance insights
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex items-center justify-center h-[400px]">
								<div className="text-center">
									<h3 className="text-lg font-medium mb-2">Comprehensive Analytics</h3>
									<p className="text-muted-foreground max-w-md">
										Access detailed analytics, custom reports, and data visualization tools
										to gain deeper insights into your metrics.
									</p>
									<Button variant="outline" className="mt-4" asChild>
										<Link href="/dashboard/analytics">View Analytics</Link>
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="performance" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>Performance Metrics</CardTitle>
							<CardDescription>
								Monitor system performance and optimization opportunities
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid gap-4 md:grid-cols-3">
								<div className="space-y-2">
									<p className="text-sm font-medium">Response Time</p>
									<div className="text-2xl font-bold">124ms</div>
									<p className="text-xs text-muted-foreground">-12ms improvement</p>
								</div>
								<div className="space-y-2">
									<p className="text-sm font-medium">Uptime</p>
									<div className="text-2xl font-bold">99.98%</div>
									<p className="text-xs text-muted-foreground">+0.02% this month</p>
								</div>
								<div className="space-y-2">
									<p className="text-sm font-medium">Throughput</p>
									<div className="text-2xl font-bold">1,245</div>
									<p className="text-xs text-muted-foreground">req/sec average</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>

				<TabsContent value="insights" className="space-y-4">
					<Card>
						<CardHeader>
							<CardTitle>AI-Powered Insights</CardTitle>
							<CardDescription>
								Automated insights and recommendations
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div className="border-l-4 border-blue-500 pl-4">
									<h4 className="font-semibold">Revenue Growth Opportunity</h4>
									<p className="text-sm text-muted-foreground">
										Your premium features show 85% adoption rate. Consider expanding this tier.
									</p>
								</div>
								<div className="border-l-4 border-green-500 pl-4">
									<h4 className="font-semibold">Performance Optimization</h4>
									<p className="text-sm text-muted-foreground">
										API response times improved by 15% after recent optimization.
									</p>
								</div>
								<div className="border-l-4 border-orange-500 pl-4">
									<h4 className="font-semibold">User Engagement Alert</h4>
									<p className="text-sm text-muted-foreground">
										Mobile users spend 40% more time in app. Focus mobile experience.
									</p>
								</div>
							</div>
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
}
