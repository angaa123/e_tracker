"use client";
import React from "react";
import Header from "./header";
import VisaCard from "@/components/visaCard";
import Income from "./income";
import Expence from "./expence";

function Index() {
	const storedToken = localStorage.getItem("token");
	console.log("token************", storedToken);

	return (
		<>
			<Header />
			<div className="flex flex-col md:flex-row justify-center bg-base-200">
				<div className="w-5/6">
					<div className="cardContainer flex">
						<VisaCard />
						<Income />
						<Expence />
					</div>
				</div>
			</div>
		</>
	);
}

export default Index;
