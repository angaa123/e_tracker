"use client";
import React from "react";

function Expence({ expd }) {
	return (
		<div className="col-span-2 flex justify-center items-center">
			<div className="card bg-slate-50 min-h-52 w-full min-w-96">
				<div className="border-b-2 border-black">
					<p>Your expence</p>
					
				</div><p>{expd}</p>
			</div>
		</div>
	);
}

export default Expence;
