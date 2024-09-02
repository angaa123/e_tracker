import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import React from "react";

function VisaCard() {
	return (
		<div>
			<div
				className="card bg-slate-50 w-96 h-52"
				style={{
					backgroundImage: "url('https://i.imgur.com/v8ALuOS.jpeg')",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					/*backgound image */
				}}
			>
				<div className="card-body">
					<h1 className="card-title text-black">dfhm</h1>
					<p className="text-white mt-20">1234 5678 9012 3456</p>
				</div>
			</div>
		</div>
	);
}

export default VisaCard;
