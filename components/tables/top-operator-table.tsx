"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Operator {
	id: string;
	name: string;
	totalStake: number;
	avsCount: number;
	importanceScore: number;
	status: string;
}

interface TopOperatorsTableProps {
	operators: Operator[];
}

export function TopOperatorsTable({ operators }: TopOperatorsTableProps) {
	// Function to get initials from name
	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((part) => part[0])
			.join("")
			.toUpperCase();
	};

	// Function to get background color based on importance score
	const getImportanceScoreColor = (score: number) => {
		if (score >= 0.7) {
			return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
		} else if (score >= 0.4) {
			return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
		}
		return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Operator</TableHead>
					<TableHead className="text-right">Stake (ETH)</TableHead>
					<TableHead className="text-center">AVS Count</TableHead>
					<TableHead className="text-right">Importance</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{operators.map((operator) => (
					<TableRow
						key={operator.id}
						className="cursor-pointer hover:bg-muted/50"
					>
						<TableCell>
							<div className="flex items-center gap-2">
								<Avatar className="h-8 w-8">
									<AvatarFallback className="bg-primary/10 text-primary">
										{getInitials(operator.name)}
									</AvatarFallback>
								</Avatar>
								<div>
									<div className="font-medium">{operator.name}</div>
									<div className="text-xs text-muted-foreground">
										ID: {operator.id}
									</div>
								</div>
							</div>
						</TableCell>
						<TableCell className="text-right font-medium">
							{operator.totalStake.toLocaleString()}
						</TableCell>
						<TableCell className="text-center">
							<Badge variant="outline">{operator.avsCount}</Badge>
						</TableCell>
						<TableCell className="text-right">
							<div className="flex items-center justify-end gap-2">
								<span
									className={`text-xs px-2 py-0.5 rounded-full ${getImportanceScoreColor(operator.importanceScore)}`}
								>
									{operator.importanceScore.toFixed(2)}
								</span>
								<Progress
									value={operator.importanceScore * 100}
									className="w-12 h-2"
									indicatorClassName={
										operator.importanceScore >= 0.7
											? "bg-orange-500"
											: operator.importanceScore >= 0.4
												? "bg-yellow-500"
												: "bg-green-500"
									}
								/>
							</div>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}