import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PerformanceOverviewChart } from "@/components/charts/performance-overview-chart";
import { getPerformanceGrowth } from "@/lib/actions";

async function PerformanceOverviewContent() {
	const data = await getPerformanceGrowth();

	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle>Performance Overview</CardTitle>
				<CardDescription>
					Revenue and user growth trends over the last 6 months
				</CardDescription>
			</CardHeader>
			<CardContent className="pl-2">
				<div className="h-[300px]">
					<PerformanceOverviewChart data={data} />
				</div>
			</CardContent>
		</Card>
	);
}

function PerformanceOverviewSkeleton() {
	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle>Performance Overview</CardTitle>
				<CardDescription>
					Revenue and user growth trends over the last 6 months
				</CardDescription>
			</CardHeader>
			<CardContent className="pl-2">
				<div className="h-[300px]">
					<Skeleton className="h-full w-full" />
				</div>
			</CardContent>
		</Card>
	);
}

export default function PerformanceOverview() {
	return (
		<Suspense fallback={<PerformanceOverviewSkeleton />}>
			<PerformanceOverviewContent />
		</Suspense>
	);
}

PerformanceOverview.Skeleton = PerformanceOverviewSkeleton;