"use client";
import Dashboard from "@/components/pages/dashboard";
import React from "react";
import axios from "axios";
const fetchUserData = async () => {
    try {
		const token = localStorage.getItem("token");
		console.log(token);
		const response = await axios.get(`http://localhost:8008/users/profile`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		
		if (response.status === 200) {
			localStorage.setItem("userID", response.data.user.id);
			console.log("USER", response.data.user.id);
		}
    } catch (error) {
		console.error("Error fetching user data:", error);
    }
};


const DashboardPage = () => {
	fetchUserData();
	return (
		<div className="min-h-full">
			<Dashboard />
		</div>
	);
};

export default DashboardPage;
