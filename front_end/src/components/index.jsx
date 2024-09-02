import React from "react";
import Header from "./header";
import VisaCard from "@/components/visaCard";
import Income from "./income";
function Index() {
	return (
		<>
			<Header />
			<div className="flex flex-col md:flex-row justify-between items-center">
				<VisaCard />
				<Income />
			</div>
		</>
	);
}

export default Index;
