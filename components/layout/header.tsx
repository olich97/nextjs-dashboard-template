"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from "@/components/ui/command";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "@/constants/data";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from "./theme-toggle";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Header({ className }: HeaderProps) {
	const [open, setOpen] = React.useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const navInfo = navItems.map((item) => ({
		title: item.title,
		href: item.href,
		icon: item.icon,
	}));

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				setOpen((open) => !open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, []);

	const runCommand = React.useCallback((command: () => unknown) => {
		setOpen(false);
		command();
	}, []);

	return (
		<div
			className={cn(
				"sticky top-0 z-30 flex h-16 items-center justify-between px-8 py-4 backdrop-blur-sm bg-background/90 border-b",
				className,
			)}
		>
			<div className="flex items-center gap-2 md:hidden">
				<MobileSidebar />
			</div>

			<div className="flex items-center gap-2 w-full max-w-md">
				<Button
					variant="outline"
					className="inline-flex items-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-9 w-full justify-between text-sm sm:pr-12 md:w-64 lg:w-[300px]"
					onClick={() => setOpen(true)}
				>
					<span className="inline-flex">
						<SearchIcon className="mr-2 h-4 w-4" />
						Search...
					</span>
					<kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
						<span className="text-xs">⌘</span>K
					</kbd>
				</Button>
			</div>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
				<CommandList>
					<CommandEmpty>No results found.</CommandEmpty>
					<CommandGroup heading="Pages">
						{navInfo.map((nav) => (
							<CommandItem
								key={nav.href}
								onSelect={() =>
									runCommand(() => router.push(nav.href as string))
								}
							>
								<span>{nav.title}</span>
							</CommandItem>
						))}
					</CommandGroup>
				</CommandList>
			</CommandDialog>

			<div className="flex items-center gap-4">
				<ThemeToggle />
			</div>
		</div>
	);
}