import React from "react";

function Record({ transactions }) {
	return (
		<div className="col-span-6 flex p-4 bg-white card">
			<h1 className="text-xl font-bold border-b-2 p-4">Last Records</h1>
			{transactions.map((guilgee) => {
				return (
					<div className="flex p-3 justify-between border-b-2">
						<div className="flex">
							<div className="avatar">
								<div className="w-12 rounded-full">
									<img src={guilgee.category_img} alt="icon" />
								</div>
							</div>
							<div>
								<p className=" text-lg">{guilgee.name}</p>
								<p className=" text-sm">{guilgee.create_at}</p>
							</div>
						</div>

						{guilgee.transaction_type === "EXP" ? (
							<h1 className=" text-2xl font-bold text-warning">
								{guilgee.amount}
							</h1>
						) : (
							<h1 className="text-2xl font-bold text-success">
								{guilgee.amount}
							</h1>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default Record;
