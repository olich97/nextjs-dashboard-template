import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign, Users, TrendingUp, Activity, ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { getDashboardStats } from "@/lib/actions";

async function StatsCardsContent() {
	const stats = await getDashboardStats();

	const statItems = [
		{
			title: "Total Revenue",
			value: stats.totalRevenue,
			change: stats.trends.revenueChange,
			icon: DollarSign,
			description: "from last month"
		},
		{
			title: "Active Users",
			value: stats.activeUsers,
			change: stats.trends.usersChange,
			icon: Users,
			description: "from last month"
		},
		{
			title: "Growth Rate",
			value: stats.growthRate,
			change: stats.trends.growthChange,
			icon: TrendingUp,
			description: "from last month"
		},
		{
			title: "Conversion Rate",
			value: stats.conversionRate,
			change: stats.trends.conversionChange,
			icon: Activity,
			description: "from last month"
		},
	];

	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{statItems.map((item) => {
				const Icon = item.icon;
				const isPositive = item.change > 0;
				const changeColor = isPositive ? "text-green-600" : "text-red-600";
				const changeBg = isPositive ? "bg-green-50 dark:bg-green-950" : "bg-red-50 dark:bg-red-950";
				
				return (
					<Card key={item.title} className="transition-all duration-200 hover:shadow-md">
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium text-muted-foreground">
								{item.title}
							</CardTitle>
							<Icon className="h-4 w-4 text-muted-foreground" />
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold tracking-tight">{item.value}</div>
							<div className="flex items-center space-x-1 text-xs">
								<div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${changeBg}`}>
									{isPositive ? (
										<ArrowUpIcon className={`h-3 w-3 ${changeColor}`} />
									) : (
										<ArrowDownIcon className={`h-3 w-3 ${changeColor}`} />
									)}
									<span className={`font-medium ${changeColor}`}>
										{Math.abs(item.change)}%
									</span>
								</div>
								<span className="text-muted-foreground">{item.description}</span>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}

function StatsCardsSkeleton() {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{[...Array(4)].map((_, i) => (
				<Card key={i}>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<Skeleton className="h-4 w-24" />
						<Skeleton className="h-4 w-4" />
					</CardHeader>
					<CardContent>
						<Skeleton className="h-8 w-20 mb-2" />
						<div className="flex items-center space-x-2">
							<Skeleton className="h-5 w-12 rounded-full" />
							<Skeleton className="h-3 w-20" />
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export default function StatsCards() {
	return (
		<Suspense fallback={<StatsCardsSkeleton />}>
			<StatsCardsContent />
		</Suspense>
	);
}

StatsCards.Skeleton = StatsCardsSkeleton;