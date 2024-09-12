"use client";

import React from "react";
import VisaCard from "../cards/visaCard";
import Income from "../cards/income";
import Expence from "../cards/expence";
import Record from "./record";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/user-context/user-context";
import { dashContext } from "@/app/user-context/dash-context";
import axios from "axios";

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
	const { user } = useContext(UserContext);

	const { transactions } = useContext(dashContext);
	const { income } = useContext(dashContext);
	const { expense } = useContext(dashContext);
	const { bar } = useContext(dashContext);
	const { donat } = useContext(dashContext);

	return (
		<div className="flex flex-col md:flex-row justify-center bg-base-200 min-h-full">
			<div className="grid grid-cols-6 overflow-auto gap-8 m-8 w-5/6">
				<VisaCard />
				<Income ind={income} />
				<Expence expd={expense} />
				<BarChart bar={bar} />
				<DonatChart donat={donat} />
				<Record transactions={transactions} />
			</div>
		</div>
	);
}

export default Dashboard;
