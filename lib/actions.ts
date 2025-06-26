"use server";

import { revalidatePath } from "next/cache";

// Template-friendly mock data - easily customizable for any project
const users = [
	{
		id: "user-1",
		name: "Sarah Johnson",
		email: "sarah.j@company.com",
		revenue: 45230,
		orders: 8,
		score: 0.72,
		status: "Active",
		joinDate: "2024-01-15",
	},
	{
		id: "user-2", 
		name: "Michael Chen",
		email: "m.chen@business.com",
		revenue: 38790,
		orders: 12,
		score: 0.93,
		status: "Active",
		joinDate: "2023-11-20",
	},
	{
		id: "user-3",
		name: "Emily Rodriguez",
		email: "emily.r@startup.io", 
		revenue: 61240,
		orders: 6,
		score: 0.58,
		status: "Active",
		joinDate: "2024-02-03",
	},
	{
		id: "user-4",
		name: "David Kim",
		email: "david.kim@tech.co",
		revenue: 24680,
		orders: 4,
		score: 0.32,
		status: "Active",
		joinDate: "2024-03-12",
	},
	{
		id: "user-5",
		name: "Lisa Thompson",
		email: "lisa.t@enterprise.com",
		revenue: 52390,
		orders: 9,
		score: 0.81,
		status: "Active", 
		joinDate: "2023-12-08",
	},
];

const products = [
	{
		id: "prod-1",
		name: "Premium Plan",
		description: "Advanced features and priority support",
		revenue: 154230,
		customers: 25,
		rating: 4.8,
		status: "Active",
		category: "Subscription",
	},
	{
		id: "prod-2",
		name: "Enterprise Suite",
		description: "Full-featured business solution",
		revenue: 98750,
		customers: 18,
		rating: 4.7,
		status: "Active", 
		category: "Enterprise",
	},
	{
		id: "prod-3",
		name: "Starter Package",
		description: "Perfect for small teams getting started",
		revenue: 210450,
		customers: 32,
		rating: 4.6,
		status: "Active",
		category: "Basic",
	},
	{
		id: "prod-4",
		name: "Analytics Pro",
		description: "Advanced analytics and reporting tools",
		revenue: 76890,
		customers: 15,
		rating: 4.9,
		status: "Active",
		category: "Add-on",
	},
	{
		id: "prod-5",
		name: "Mobile App",
		description: "Native mobile application",
		revenue: 45670,
		customers: 12,
		rating: 4.5,
		status: "Active",
		category: "Mobile",
	},
];

// Dashboard stats - customizable metrics
const dashboardStats = {
	totalRevenue: "$45,231.89",
	activeUsers: "2,350",
	conversionRate: "3.2%", 
	growthRate: "+12.5%",
	trends: {
		revenueChange: 20.1,
		usersChange: 180.1,
		conversionChange: 0.4,
		growthChange: 7.0,
	},
};

// Server action for fetching dashboard stats
export async function getDashboardStats() {
	// In real implementation:
	// const res = await db.query('SELECT * FROM dashboard_stats ORDER BY timestamp DESC LIMIT 1');
	// return res;

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 500));
	return dashboardStats;
}

// Server action for fetching users with optional filtering and pagination
export async function getUsers(options?: {
	limit?: number;
	sortBy?: string;
	sortOrder?: "asc" | "desc";
	page?: number;
	pageSize?: number;
}) {
	// In real implementation:
	// let query = 'SELECT * FROM users';
	// if (options?.sortBy) {
	//   query += ` ORDER BY ${options.sortBy} ${options.sortOrder || 'desc'}`;
	// }
	// if (options?.limit) {
	//   query += ` LIMIT ${options.limit}`;
	// }
	// const res = await db.query(query);
	// return res;

	// Default options
	const {
		limit,
		sortBy = "revenue",
		sortOrder = "desc",
		page = 1,
		pageSize = 10,
	} = options || {};

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 700));

	let result = [...users];

	// Apply sorting
	result.sort((a: any, b: any) => {
		if (sortOrder === "asc") {
			return a[sortBy] - b[sortBy];
		} else {
			return b[sortBy] - a[sortBy];
		}
	});

	// Apply pagination if needed
	if (page && pageSize) {
		const startIndex = (page - 1) * pageSize;
		result = result.slice(startIndex, startIndex + pageSize);
	}

	// Apply limit if specified
	if (limit) {
		result = result.slice(0, limit);
	}

	return result;
}

// Server action for fetching products with optional filtering and pagination
export async function getProducts(options?: {
	limit?: number;
	sortBy?: string;
	sortOrder?: "asc" | "desc";
	page?: number;
	pageSize?: number;
}) {
	// In real implementation, similar to getUsers but with product data

	// Default options
	const {
		limit,
		sortBy = "revenue",
		sortOrder = "desc",
		page = 1,
		pageSize = 10,
	} = options || {};

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 600));

	let result = [...products];

	// Apply sorting
	result.sort((a: any, b: any) => {
		if (sortOrder === "asc") {
			return a[sortBy] - b[sortBy];
		} else {
			return b[sortBy] - a[sortBy];
		}
	});

	// Apply pagination if needed
	if (page && pageSize) {
		const startIndex = (page - 1) * pageSize;
		result = result.slice(startIndex, startIndex + pageSize);
	}

	// Apply limit if specified
	if (limit) {
		result = result.slice(0, limit);
	}

	return result;
}

// Server action for fetching performance growth data
export async function getPerformanceGrowth() {
	// In real implementation:
	// const res = await db.query('SELECT * FROM performance_metrics ORDER BY month');
	// return res;

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 900));

	// Generate sample data
	const months = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
	];
	const currentMonth = new Date().getMonth();

	// Get the last 6 months
	const last6Months = [];
	for (let i = 5; i >= 0; i--) {
		const monthIndex = (currentMonth - i + 12) % 12;
		last6Months.push(months[monthIndex]);
	}

	// Create realistic performance data
	return last6Months.map((month, index) => {
		const baseRevenue = 45000 + index * 8000;
		const baseUsers = 2000 + index * 350;

		return {
			month,
			"Revenue": Math.round(baseRevenue + Math.random() * 5000),
			"Active Users": Math.round(baseUsers + Math.random() * 200),
			"Conversion Rate": Number((2.8 + index * 0.2 + Math.random() * 0.5).toFixed(1)),
			"Customer Satisfaction": Number((4.2 + Math.random() * 0.6).toFixed(1)),
		};
	});
}

// Server action for fetching distribution data
export async function getDistributionData(type: "users" | "products") {
	// In real implementation:
	// const res = await db.query(`SELECT * FROM revenue_distribution WHERE type = ${type}`);
	// return res;

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 750));

	if (type === "users") {
		return [
			{ name: "Enterprise Users", value: 45230 },
			{ name: "Pro Users", value: 38790 },
			{ name: "Premium Users", value: 61240 },
			{ name: "Standard Users", value: 24680 },
			{ name: "Free Users", value: 52390 },
			{ name: "Trial Users", value: 33450 },
			{ name: "Student Users", value: 28760 },
			{ name: "Non-profit Users", value: 35480 },
			{ name: "Developer Users", value: 22930 },
			{ name: "Partner Users", value: 19870 },
		];
	} else {
		return [
			{ name: "Analytics Pro", value: 154230 },
			{ name: "Dashboard Suite", value: 98750 },
			{ name: "Reporting Tools", value: 210450 },
			{ name: "Data Export", value: 76890 },
			{ name: "API Access", value: 45670 },
			{ name: "Mobile App", value: 115430 },
			{ name: "Custom Integrations", value: 68240 },
			{ name: "AI Insights", value: 82910 },
			{ name: "Real-time Sync", value: 63580 },
			{ name: "Enterprise Support", value: 91320 },
		];
	}
}

// Server action for fetching market concentration data
export async function getMarketConcentrationData() {
	// In real implementation:
	// const res = await db.query('SELECT * FROM market_concentration');
	// return res;

	// Simulating network delay
	await new Promise((resolve) => setTimeout(resolve, 550));

	return [
		{
			name: "Enterprise Clients",
			value: 42,
			description: "42% of revenue from enterprise clients",
		},
		{
			name: "SMB Clients",
			value: 28,
			description: "28% of revenue from small-medium business",
		},
		{
			name: "Individual Users",
			value: 18,
			description: "18% of revenue from individual subscriptions",
		},
		{
			name: "Partner Channel",
			value: 12,
			description: "12% of revenue from partner sales",
		},
	];
}

// Server action for refreshing data
export async function refreshDashboardData() {
	// In a real implementation, you might invalidate caches or perform other operations

	// Simulate a delay for the refresh operation
	await new Promise((resolve) => setTimeout(resolve, 1500));

	// Revalidate the dashboard path to refresh the data
	revalidatePath("/dashboard");

	return {
		success: true,
		refreshedAt: new Date().toISOString(),
	};
}

// Server action to filter users
export async function filterUsers(filterParams: {
	searchTerm?: string;
	minRevenue?: number;
	maxRevenue?: number;
	minScore?: number;
	maxScore?: number;
	status?: string;
}) {
	// In a real implementation, you'd construct a database query with these parameters
	const {
		searchTerm,
		minRevenue,
		maxRevenue,
		minScore,
		maxScore,
		status,
	} = filterParams;

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 800));

	// Apply filters to the mock data
	let filteredUsers = [...users];

	if (searchTerm) {
		const term = searchTerm.toLowerCase();
		filteredUsers = filteredUsers.filter(
			(user) =>
				user.name.toLowerCase().includes(term) ||
				user.email.toLowerCase().includes(term) ||
				user.id.toLowerCase().includes(term),
		);
	}

	if (minRevenue !== undefined) {
		filteredUsers = filteredUsers.filter(
			(user) => user.revenue >= minRevenue,
		);
	}

	if (maxRevenue !== undefined) {
		filteredUsers = filteredUsers.filter(
			(user) => user.revenue <= maxRevenue,
		);
	}

	if (minScore !== undefined) {
		filteredUsers = filteredUsers.filter(
			(user) => user.score >= minScore,
		);
	}

	if (maxScore !== undefined) {
		filteredUsers = filteredUsers.filter(
			(user) => user.score <= maxScore,
		);
	}

	if (status) {
		filteredUsers = filteredUsers.filter((user) => user.status === status);
	}

	return filteredUsers;
}

// Server action to filter products
export async function filterProducts(filterParams: {
	searchTerm?: string;
	minRevenue?: number;
	maxRevenue?: number;
	minRating?: number;
	maxRating?: number;
	status?: string;
	category?: string;
}) {
	// In a real implementation, you'd construct a database query with these parameters
	const { searchTerm, minRevenue, maxRevenue, minRating, maxRating, status, category } =
		filterParams;

	// Simulate network delay
	await new Promise((resolve) => setTimeout(resolve, 800));

	// Apply filters to the mock data
	let filteredProducts = [...products];

	if (searchTerm) {
		const term = searchTerm.toLowerCase();
		filteredProducts = filteredProducts.filter(
			(product) =>
				product.name.toLowerCase().includes(term) ||
				product.description.toLowerCase().includes(term) ||
				product.category.toLowerCase().includes(term) ||
				product.id.toLowerCase().includes(term),
		);
	}

	if (minRevenue !== undefined) {
		filteredProducts = filteredProducts.filter((product) => product.revenue >= minRevenue);
	}

	if (maxRevenue !== undefined) {
		filteredProducts = filteredProducts.filter((product) => product.revenue <= maxRevenue);
	}

	if (minRating !== undefined) {
		filteredProducts = filteredProducts.filter(
			(product) => product.rating >= minRating,
		);
	}

	if (maxRating !== undefined) {
		filteredProducts = filteredProducts.filter(
			(product) => product.rating <= maxRating,
		);
	}

	if (status) {
		filteredProducts = filteredProducts.filter((product) => product.status === status);
	}

	if (category) {
		filteredProducts = filteredProducts.filter((product) => product.category === category);
	}

	return filteredProducts;
}