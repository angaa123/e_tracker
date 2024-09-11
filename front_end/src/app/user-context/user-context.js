"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userID, setUserID] = useState(null);

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
				//------
				setUserID(response.data.user.id);
				setUser(response.data.user);
				//--------
				localStorage.setItem("userID", userID);
				localStorage.setItem("user", user);
				console.log(user);
			}
		} catch (error) {
			console.error("Error fetching user data:", error);
		}
	};

	useEffect(() => {
		if (!user) {
		}
		fetchUserData();
	}, [user?.id]);

	return (
		<UserContext.Provider value={{ user, fetchUserData }}>
			{children}
		</UserContext.Provider>
	);
};
