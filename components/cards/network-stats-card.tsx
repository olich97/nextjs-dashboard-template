"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
	TrendingUp,
	TrendingDown,
	Server,
	Layers,
	BarChart2,
} from "lucide-react";

interface NetworkStatsCardProps {
	title: string;
	value: string;
	change: number;
	icon: "eth" | "layers" | "server" | "chart";
}

export function NetworkStatsCard({
	title,
	value,
	change,
	icon,
}: NetworkStatsCardProps) {
	// Determine if the change is positive or negative
	const isPositive = change >= 0;

	// Function to render the appropriate icon
	const renderIcon = () => {
		switch (icon) {
			case "eth":
				return (
					<div className="rounded-full bg-blue-100 dark:bg-blue-900/20 p-2 w-10 h-10 flex items-center justify-center">
						<span className="text-blue-600 dark:text-blue-400 font-bold">
							Ξ
						</span>
					</div>
				);
			case "layers":
				return (
					<div className="rounded-full bg-purple-100 dark:bg-purple-900/20 p-2 w-10 h-10 flex items-center justify-center">
						<Layers className="h-5 w-5 text-purple-600 dark:text-purple-400" />
					</div>
				);
			case "server":
				return (
					<div className="rounded-full bg-green-100 dark:bg-green-900/20 p-2 w-10 h-10 flex items-center justify-center">
						<Server className="h-5 w-5 text-green-600 dark:text-green-400" />
					</div>
				);
			case "chart":
				return (
					<div className="rounded-full bg-amber-100 dark:bg-amber-900/20 p-2 w-10 h-10 flex items-center justify-center">
						<BarChart2 className="h-5 w-5 text-amber-600 dark:text-amber-400" />
					</div>
				);
		}
	};

	return (
		<Card>
			<CardContent className="p-6">
				<div className="flex items-center justify-between">
					<div>
						<p className="text-sm font-medium text-muted-foreground mb-1">
							{title}
						</p>
						<h4 className="text-2xl font-bold">{value}</h4>
					</div>
					{renderIcon()}
				</div>
				<div
					className={`flex items-center mt-4 text-sm ${
						isPositive
							? "text-green-600 dark:text-green-400"
							: "text-red-600 dark:text-red-400"
					}`}
				>
					{isPositive ? (
						<TrendingUp className="h-4 w-4 mr-1" />
					) : (
						<TrendingDown className="h-4 w-4 mr-1" />
					)}
					<span>{`${isPositive ? "+" : ""}${change.toFixed(change % 1 === 0 ? 0 : 2)}`}</span>
					<span className="text-muted-foreground ml-1">from last period</span>
				</div>
			</CardContent>
		</Card>
	);
}