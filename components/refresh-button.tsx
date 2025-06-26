"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { refreshDashboardData } from "@/lib/actions";
import { useToast } from "@/components/ui/use-toast";

export default function RefreshButton() {
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();

	const handleRefresh = async () => {
		setIsLoading(true);
		try {
			const result = await refreshDashboardData();
			if (result.success) {
				toast({
					title: "Data refreshed",
					description: `Dashboard data was updated at ${new Date(result.refreshedAt).toLocaleTimeString()}.`,
				});
			}
		} catch (error) {
			toast({
				title: "Refresh failed",
				description: "There was an error refreshing the dashboard data.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Button
			variant="outline"
			size="sm"
			onClick={handleRefresh}
			disabled={isLoading}
		>
			<RefreshCw
				className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`}
			/>
			{isLoading ? "Updating..." : "Refresh Data"}
		</Button>
	);
}