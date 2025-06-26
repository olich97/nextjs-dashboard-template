import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { getUsers } from "@/lib/actions";

async function RecentUsersContent() {
	const users = await getUsers({ limit: 5, sortBy: "joinDate", sortOrder: "desc" });

	return (
		<Card className="col-span-3">
			<CardHeader>
				<CardTitle>Recent Users</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{users.map((user) => (
						<div key={user.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent/50 transition-colors">
							<div className="flex items-center space-x-3">
								<Avatar className="h-9 w-9">
									<AvatarFallback className="text-xs font-medium">
										{user.name.split(' ').map(n => n[0]).join('')}
									</AvatarFallback>
								</Avatar>
								<div className="space-y-1">
									<p className="text-sm font-medium leading-none">{user.name}</p>
									<p className="text-xs text-muted-foreground">{user.email}</p>
								</div>
							</div>
							<div className="text-right space-y-1">
								<div className="text-sm font-medium">
									${user.revenue.toLocaleString()}
								</div>
								<div className="flex items-center space-x-2">
									<Badge variant="outline" className="text-xs">
										{user.orders} orders
									</Badge>
									<Badge 
										variant={user.status === 'Active' ? 'default' : 'secondary'}
										className="text-xs"
									>
										{user.status}
									</Badge>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

function RecentUsersTableSkeleton() {
	return (
		<Card className="col-span-3">
			<CardHeader>
				<CardTitle>Recent Users</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{[...Array(5)].map((_, i) => (
						<div key={i} className="flex items-center justify-between p-3 border rounded-lg">
							<div className="flex items-center space-x-3">
								<Skeleton className="h-9 w-9 rounded-full" />
								<div className="space-y-2">
									<Skeleton className="h-4 w-32" />
									<Skeleton className="h-3 w-40" />
								</div>
							</div>
							<div className="text-right space-y-2">
								<Skeleton className="h-4 w-16" />
								<div className="flex space-x-2">
									<Skeleton className="h-5 w-16 rounded-full" />
									<Skeleton className="h-5 w-12 rounded-full" />
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

export default function RecentUsersTable() {
	return (
		<Suspense fallback={<RecentUsersTableSkeleton />}>
			<RecentUsersContent />
		</Suspense>
	);
}

RecentUsersTable.Skeleton = RecentUsersTableSkeleton;