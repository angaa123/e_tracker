"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const dashContext = createContext();

export const DashProvider = ({ children }) => {
	const { user } = useContext(UserContext);
	const [transactions, setTransactions] = useState([]);
	const [income, setIcome] = useState(null);
	const [expense, setExpense] = useState(null);
	const [bar, setBar] = useState([]);
	const [donat, setDonat] = useState([]);

	const fetchTransactions = async (token) => {
		try {
			const res = await axios.get(`http://localhost:8008/records`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setTransactions(res.data.guilgee);
			console.log("DD", transactions);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	const getInfoCardData = async (token) => {
		try {
			const res = await axios.get(`http://localhost:8008/records/info`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setIcome(res.data.income.sum);
			setExpense(res.data.expense.sum);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	const getChartData = async (token) => {
		try {
			const token = localStorage.getItem("token");
			const res = await axios.get(`http://localhost:8008/records/chart`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setDonat(res.data.donut);
			setBar(res.data.bar);
		} catch (error) {
			console.error(error);
			toast.error("Failed to fetch transactions");
		}
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		fetchTransactions(token);
		getInfoCardData(token);
		getChartData(token);
	}, [user]);
	console.log("income", income);
	console.log("expense", expense);
	console.log("bar", bar);
	console.log("donat", donat);
	console.log("transactions", transactions);

	return (
		<DashContext.Provider
			value={{
				income,
				expense,
				bar,
				donat,
				transactions,
				fetchTransactions,
				getInfoCardData,
				getChartData,
			}}
		>
			{children}
		</DashContext.Provider>
	);
};

////
///
//
//
