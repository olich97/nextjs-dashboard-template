"use client";

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

interface AVSService {
	id: string;
	name: string;
	description: string;
	totalStake: number;
	operatorCount: number;
	diversityScore: number;
	status: string;
}

interface TopAVSTableProps {
	avsServices: AVSService[];
}

export function TopAVSTable({ avsServices }: TopAVSTableProps) {
	// Function to get diversity score color
	const getDiversityScoreColor = (score: number) => {
		if (score >= 0.8) {
			return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
		} else if (score >= 0.6) {
			return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400";
		}
		return "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400";
	};

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>AVS Service</TableHead>
					<TableHead className="text-right">Stake (ETH)</TableHead>
					<TableHead className="text-center">Operators</TableHead>
					<TableHead className="text-right">Diversity</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{avsServices.map((avs) => (
					<TableRow key={avs.id} className="cursor-pointer hover:bg-muted/50">
						<TableCell>
							<div>
								<div className="font-medium">{avs.name}</div>
								<div className="text-xs text-muted-foreground">
									{avs.description}
								</div>
							</div>
						</TableCell>
						<TableCell className="text-right font-medium">
							{avs.totalStake.toLocaleString()}
						</TableCell>
						<TableCell className="text-center">
							<Badge variant="outline">{avs.operatorCount}</Badge>
						</TableCell>
						<TableCell className="text-right">
							<div className="flex items-center justify-end gap-2">
								<span
									className={`text-xs px-2 py-0.5 rounded-full ${getDiversityScoreColor(avs.diversityScore)}`}
								>
									{avs.diversityScore.toFixed(2)}
								</span>
								<Progress
									value={avs.diversityScore * 100}
									className="w-12 h-2"
									indicatorClassName={
										avs.diversityScore >= 0.8
											? "bg-green-500"
											: avs.diversityScore >= 0.6
												? "bg-yellow-500"
												: "bg-orange-500"
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