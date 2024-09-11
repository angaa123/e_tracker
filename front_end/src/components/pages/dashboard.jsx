"use client";

import React from "react";
import VisaCard from "../cards/visaCard";
import Income from "../cards/income";
import Expence from "../cards/expence";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/app/user-context/user-context";
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
	const [transactions, setTransactions] = useState([]);
	const [cardInfo, setCardInfo] = useState(null);

	const fetchTransactions = async () => {
		try {
			const res = await axios.get(`http://localhost:8008/records`);
			console.log("DD", res.data.guilgee);
			setTransactions(res.data.guilgee);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	const getInfoCardData = async () => {
		try {
			const res = await axios.get(`http://localhost:8008/records/info`);
			console.log("ST", res.data);
			setCardInfo(res.data);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	useEffect(() => {
		fetchTransactions();
		getInfoCardData();
	}, [user]);

	console.log("cardInfo", cardInfo);
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
