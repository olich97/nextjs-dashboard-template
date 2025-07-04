"use client";
import { DashboardNav } from "@/components/dashboard-nav";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/constants/data";
import { PanelRightClose } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  return (
			<>
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<div className="pr-4">
							<PanelRightClose />
						</div>
					</SheetTrigger>
					<SheetContent side="left" className="!px-0">
						<div className="space-y-4 py-4">
							<div className="px-3 py-2">
								<Link href="/">
									<Image
										src="/eigen_lens_logo.png" // Replace with your logo path
										alt="Logo"
										width={150} // Adjust the size as needed
										height={50}
										className="pb-8"
									/>
								</Link>
								<div className="space-y-1">
									<DashboardNav
										items={navItems}
										setOpen={setOpen}
										isCollapsed={false}
									/>
								</div>
							</div>
						</div>
					</SheetContent>
				</Sheet>
			</>
		);
}
