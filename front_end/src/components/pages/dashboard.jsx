"use client";

import React from "react";
import VisaCard from "../cards/visaCard";
import Income from "../cards/income";
import Expence from "../cards/expence";

import {
	ArcElement,
	BarElement,
	CategoryScale,
	Chart,
	Legend,
	LinearScale,
} from "chart.js";
import DonatChart from "../charts/donatChart";
import BarChart from "../charts/barChart";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

function Dashboard() {
	return (
		<div className="flex flex-col md:flex-row justify-center bg-base-200 min-h-full">
			<div className="grid grid-cols-6 overflow-auto gap-8 m-8 w-5/6">
				<VisaCard />
				<Income />
				<Expence />
				<BarChart />
				<DonatChart />
			</div>
		</div>
	);
}

export default Dashboard;
