"use client";
import Dashboard from "@/components/pages/dashboard";
import React from "react";
import { fetchUserData } from "@/app/user-context/user-context";

const DashboardPage = () => {
	return (
		<div className="min-h-full">
			<Dashboard />
		</div>
	);
};

export default DashboardPage;
