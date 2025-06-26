"use client";

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import { Skeleton } from "@/components/ui/skeleton";

interface PerformanceOverviewProps {
	data: any[];
}

export function PerformanceOverviewChart({ data }: PerformanceOverviewProps) {
	const formatYAxis = (value: number): string => {
		if (value >= 1000000) {
			return `${(value / 1000000).toFixed(1)}M`;
		} else if (value >= 1000) {
			return `${(value / 1000).toFixed(0)}K`;
		}
		return value.toString();
	};

	const formatTooltipValue = (value: number, name: string) => {
		if (name === "Revenue") {
			return [`$${Number(value).toLocaleString()}`, name];
		}
		if (name === "Conversion Rate") {
			return [`${value}%`, name];
		}
		if (name === "Customer Satisfaction") {
			return [`${value}/5.0`, name];
		}
		return [Number(value).toLocaleString(), name];
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<defs>
					<linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
					</linearGradient>
					<linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#06b6d4" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#06b6d4" stopOpacity={0.1}/>
					</linearGradient>
				</defs>
				<CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
				<XAxis 
					dataKey="month" 
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
				/>
				<YAxis 
					tickFormatter={formatYAxis}
					axisLine={false}
					tickLine={false}
					tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
				/>
				<Tooltip
					formatter={formatTooltipValue}
					contentStyle={{
						backgroundColor: "hsl(var(--card))",
						borderColor: "hsl(var(--border))",
						borderRadius: "8px",
						boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
					}}
					labelStyle={{ color: "hsl(var(--foreground))" }}
				/>
				<Legend 
					iconType="circle"
					wrapperStyle={{ paddingTop: "20px" }}
				/>
				<Area
					type="monotone"
					dataKey="Revenue"
					stroke="#8b5cf6"
					strokeWidth={2}
					fillOpacity={1}
					fill="url(#colorRevenue)"
				/>
				<Area
					type="monotone"
					dataKey="Active Users"
					stroke="#06b6d4"
					strokeWidth={2}
					fillOpacity={1}
					fill="url(#colorUsers)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
}

// Loading skeleton component
PerformanceOverviewChart.Skeleton = function PerformanceOverviewChartSkeleton() {
	return (
		<div className="space-y-3">
			<div className="flex justify-between items-center">
				<Skeleton className="h-6 w-40" />
				<Skeleton className="h-4 w-24" />
			</div>
			<Skeleton className="h-[300px] w-full" />
		</div>
	);
};