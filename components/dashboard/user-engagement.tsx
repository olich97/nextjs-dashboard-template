import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { UserEngagementChart } from "@/components/charts/user-engagement-chart";
import { getDistributionData } from "@/lib/actions";

async function UserEngagementContent() {
	const data = await getDistributionData("users");

	return (
		<Card>
			<CardHeader>
				<CardTitle>User Engagement</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[280px]">
					<UserEngagementChart data={data} />
				</div>
			</CardContent>
		</Card>
	);
}

function UserEngagementSkeleton() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>User Engagement</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[280px] flex items-end justify-between space-x-2">
					{[...Array(8)].map((_, i) => (
						<Skeleton 
							key={i} 
							className="w-8"
							style={{ height: `${Math.floor(Math.random() * 100) + 50}px` }}
						/>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

export default function UserEngagement() {
	return (
		<Suspense fallback={<UserEngagementSkeleton />}>
			<UserEngagementContent />
		</Suspense>
	);
}

UserEngagement.Skeleton = UserEngagementSkeleton;