"use client";
import React from "react";
import Header from "./header";
import Dashboard from "./dashboard";

function HomePage() {
	const storedToken = localStorage.getItem("token");
	console.log("token************", storedToken);

	return (
		<>
			<Header />
			<Dashboard />
		</>
	);
}

export default HomePage;
