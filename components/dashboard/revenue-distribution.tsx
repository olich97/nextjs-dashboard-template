import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { RevenueDistributionChart } from "@/components/charts/revenue-distribution-chart";
import { getDistributionData } from "@/lib/actions";

async function RevenueDistributionContent() {
	const data = await getDistributionData("products");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Revenue Distribution</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[280px]">
					<RevenueDistributionChart data={data} />
				</div>
			</CardContent>
		</Card>
	);
}

function RevenueDistributionSkeleton() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Revenue Distribution</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[280px] flex items-center justify-center">
					<Skeleton className="h-48 w-48 rounded-full" />
				</div>
			</CardContent>
		</Card>
	);
}

export default function RevenueDistribution() {
	return (
		<Suspense fallback={<RevenueDistributionSkeleton />}>
			<RevenueDistributionContent />
		</Suspense>
	);
}

RevenueDistribution.Skeleton = RevenueDistributionSkeleton;