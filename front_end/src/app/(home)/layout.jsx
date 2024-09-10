import Header from "@/components/pages/header";
import HomePage from "@/components/pages/home";
import React from "react";

export default function HomeLayout({ children }) {
	return (
		<div className="min-h-screen">
			<Header />

			{children}
		</div>
	);
}
