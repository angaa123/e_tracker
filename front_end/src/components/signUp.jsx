"use client";
import React from "react";
import { useState } from "react";

import { useRouter } from "next/navigation";

function SignUp() {
	const router = useRouter();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});
	const [repassword, setRepassword] = useState("");

	const createUser = async () => {
		if (user.password === repassword) {
			console.log(
				"-----------------",
				JSON.stringify(user),
				"----------------"
			);
			try {
				const res = await fetch("http://localhost:8008/auth/signup", {
					method: "POST",
					headers: {
						"content-type": "application/json",
					},
					body: JSON.stringify(user),
				});
				console.log(res);

				if (res.status === 201) {
					router.push("/login");
				} else {
					alert("user creation failed");
				}
			} catch (error) {
				console.log(error);
			}
		} else {
			alert("passwords do not match");
		}
	};

	console.log("user", user);

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
							type="text"
							placeholder="name"
							// value={user.name}
							onChange={(e) => setUser({ ...user, name: e.target.value })}
							className="input bg-slate-300 text-slate-600  input-bordered"
							required
						/>
					</div>
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

					<div className="form-control">
						<input
							type="password"
							placeholder="re-password"
							onChange={(e) => setRepassword(e.target.value)}
							className="input bg-slate-300 text-slate-600 input-bordered"
							required
						/>
					</div>
					<div className="form-control ">
						<button
							className="btn btn-primary"
							onClick={() => {
								createUser();
							}}
						>
							Sign up
						</button>
					</div>
					<div className="mt-10 flex">
						<p className="text-black">Already have account?</p>
						<div
							className="text-blue-500"
							onClick={() => {
								router.push("/login");
							}}
						>
							login
						</div>
					</div>
					{/* </form> */}
				</div>
			</div>
		</div>
	);
}

export default SignUp;
