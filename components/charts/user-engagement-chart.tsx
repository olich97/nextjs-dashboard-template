"use client";

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface UserEngagementChartProps {
	data: any[];
}

export function UserEngagementChart({ data }: UserEngagementChartProps) {
	const COLORS = [
		"#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", 
		"#ef4444", "#3b82f6", "#8b5cf6", "#14b8a6"
	];

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			return (
				<div className="bg-card p-3 border rounded-md shadow-lg">
					<p className="font-medium text-card-foreground">{label}</p>
					<p className="text-sm text-muted-foreground">
						Users: {Number(payload[0].value).toLocaleString()}
					</p>
				</div>
			);
		}
		return null;
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<BarChart
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
				<XAxis 
					dataKey="name" 
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
					angle={-45}
					textAnchor="end"
					height={80}
				/>
				<YAxis 
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
				/>
				<Tooltip content={<CustomTooltip />} />
				<Bar 
					dataKey="value" 
					radius={[4, 4, 0, 0]}
					stroke="hsl(var(--background))"
					strokeWidth={1}
				>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}

// Loading skeleton component
UserEngagementChart.Skeleton = function UserEngagementChartSkeleton() {
	return (
		<div className="space-y-3">
			<Skeleton className="h-6 w-32" />
			<div className="flex items-end justify-between space-x-2">
				{[...Array(8)].map((_, i) => (
					<Skeleton 
						key={i} 
						className={`w-8 h-${Math.floor(Math.random() * 20) + 10}`} 
						style={{ height: `${Math.floor(Math.random() * 100) + 50}px` }}
					/>
				))}
			</div>
			<div className="flex justify-center space-x-2">
				{[...Array(4)].map((_, i) => (
					<Skeleton key={i} className="h-3 w-16" />
				))}
			</div>
		</div>
	);
};