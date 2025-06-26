import Sidebar from "@/components/layout/sidebar";
import type { Metadata } from "next";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/layout/header";

export const metadata: Metadata = {
	title: "EigenLens | Cross-AVS Analytics Dashboard",
	description: "Visualizing the EigenLayer ecosystem",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-full">
			<div className="flex h-full overflow-hidden max-h-screen">
				<Sidebar className="w-64 hidden md:block" />
				<div className="flex-1 overflow-x-hidden h-full pl-1">
					<Header className="sticky top-0 z-10" />
					<main className="h-full">
						{children}
						<Toaster richColors />
						<SpeedInsights />
					</main>
				</div>
			</div>
		</div>
	);
}
