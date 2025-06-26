"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface RevenueDistributionChartDataItem {
	name: string;
	value: number;
}

interface RevenueDistributionChartProps {
	data: RevenueDistributionChartDataItem[];
}

export function RevenueDistributionChart({ data }: RevenueDistributionChartProps) {
	const COLORS = [
		"#8b5cf6", // Purple
		"#06b6d4", // Cyan
		"#10b981", // Emerald
		"#f59e0b", // Amber
		"#ef4444", // Red
		"#3b82f6", // Blue
		"#8b5cf6", // Purple (lighter)
		"#14b8a6", // Teal
	];

	const CustomTooltip = ({ active, payload }: any) => {
		if (active && payload && payload.length) {
			const data = payload[0];
			const percentage = ((data.value / data.payload.total) * 100).toFixed(1);
			
			return (
				<div className="bg-card p-3 border rounded-md shadow-lg">
					<p className="font-medium text-card-foreground">{data.name}</p>
					<p className="text-sm text-muted-foreground">
						Revenue: ${Number(data.value).toLocaleString()}
					</p>
					<p className="text-sm font-medium text-primary">{percentage}% of total</p>
				</div>
			);
		}
		return null;
	};

	// Calculate total for percentage calculations
	const dataWithTotal = data.map(item => ({
		...item,
		total: data.reduce((sum, d) => sum + d.value, 0)
	}));

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart>
				<Pie
					data={dataWithTotal}
					cx="50%"
					cy="50%"
					outerRadius={100}
					innerRadius={40}
					paddingAngle={2}
					dataKey="value"
				>
					{dataWithTotal.map((entry, index) => (
						<Cell 
							key={`cell-${index}`} 
							fill={COLORS[index % COLORS.length]}
							stroke="hsl(var(--background))"
							strokeWidth={2}
						/>
					))}
				</Pie>
				<Tooltip content={<CustomTooltip />} />
				<Legend 
					verticalAlign="bottom" 
					height={36}
					iconType="circle"
					wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }}
				/>
			</PieChart>
		</ResponsiveContainer>
	);
}

// Loading skeleton component
RevenueDistributionChart.Skeleton = function RevenueDistributionChartSkeleton() {
	return (
		<div className="space-y-3">
			<Skeleton className="h-6 w-32" />
			<div className="flex items-center justify-center">
				<Skeleton className="h-64 w-64 rounded-full" />
			</div>
			<div className="flex justify-center space-x-4">
				{[...Array(4)].map((_, i) => (
					<div key={i} className="flex items-center space-x-2">
						<Skeleton className="h-3 w-3 rounded-full" />
						<Skeleton className="h-4 w-16" />
					</div>
				))}
			</div>
		</div>
	);
};