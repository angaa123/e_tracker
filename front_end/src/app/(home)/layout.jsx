import Header from "@/components/pages/header";
import HomePage from "@/components/pages/home";
import { useRouter } from "next/navigation";
import React from "react";
import { DashProvider } from "../user-context/dash-context";

export default function HomeLayout({ children }) {
	return (
		<div className="min-h-screen">
			<DashProvider>
				<Header />
				{children}
			</DashProvider>
		</div>
	);
}
