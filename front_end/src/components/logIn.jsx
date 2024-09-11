"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LogIn() {
	const router = useRouter();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const logInUser = async () => {
		console.log("-----------------", JSON.stringify(user), "----------------");
		try {
			const res = await fetch("http://localhost:8008/auth/signin", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});
			const data = await res.json(); // Parse response data

			if (res.status === 200) {
				console.log("user logged in");
				alert("User login successful");

				console.log(data.token); // Log actual response data
				localStorage.setItem("token", data.token);
				router.push("/dashboard");
			} else {
				alert("User login failed");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="hero bg-white min-h-screen">
			<div className="hero-content flex-col ">
				<div className="text-center ">
					<h1 className="text-3xl font-bold text-black">Create Geld account</h1>
					<p className="py-3 text-black">
						Sign up below to create your Wallet account
					</p>
				</div>
				<div className="card w-full max-w-sm shrink-0 shadow-2xl">
					{/* <form className="card-body"> */}

					<div className="form-control">
						<input
							type="email"
							placeholder="email"
							onChange={(e) => setUser({ ...user, email: e.target.value })}
							className="input bg-slate-300 text-slate-600  input-bordered"
							required
						/>
					</div>
					<div className="form-control">
						<input
							type="password"
							placeholder="password"
							onChange={(e) => setUser({ ...user, password: e.target.value })}
							className="input bg-slate-300 text-slate-600 input-bordered"
							required
						/>
					</div>

					<div className="form-control ">
						<button
							className="btn btn-primary"
							onClick={() => {
								logInUser();
							}}
						>
							Login
						</button>
					</div>
					<div className="mt-10 flex">
						<p className="text-black">don`t have account?</p>
						<div
							className="text-blue-500"
							onClick={() => {
								router.push("/signup");
							}}
						>
							signup
						</div>
					</div>
					{/* </form> */}
				</div>
			</div>
		</div>
	);
}

export default LogIn;
