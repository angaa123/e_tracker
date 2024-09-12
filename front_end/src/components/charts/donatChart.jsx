"use client";
import { Doughnut } from "react-chartjs-2";

const DoughnurChart = ({ donat }) => {
	const amountdata = donat.map((i) => i.sum);
	const labels = donat.map((i) => i.cat_name);

	const data2 = {
		datasets: [
			{
				data: amountdata,
				backgroundColor: [
					"#1C64F2",
					"#E74694",
					"#FDBA8C",
					"#16BDCA",
					"#F2901C",
				],
				hoverBackgroundColor: [
					"#1C64F2",
					"#E74694",
					"#FDBA8C",
					"#16BDCA",
					"#F2901C",
				],
			},
		],
		labels: labels,
	};

	const options2 = {
		legend: {
			align: "start",
			position: "right",

			labels: {
				display: false,
				position: "right",
			},
		},
	};

	return (
		<div className="col-span-3 flex items-center justify-center p-4 h-96 bg-white card ">
			<div className="h-96 w-96">
				<Doughnut options={options2} data={data2} />
				{/* {categoryData && <Doughnut options={options2} data={data2} />}
        {!categoryData && (
          <div className="flex items-center justify-center w-full h-full gap-4">
            <div className="w-24 h-24 rounded-full skeleton"></div>
          </div>
        )} */}
			</div>
		</div>
	);
};

export default DoughnurChart;
