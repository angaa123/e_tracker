import { Bar } from "react-chartjs-2";

const BarChart = ({ bar }) => {
	const data1 = {
		labels: bar.map((item) => item.sar),
		datasets: [
			{
				label: "Income",
				backgroundColor: "#22C55E",
				data: bar.map((item) => item.total_inc),
			},
			{
				label: "Expense",
				backgroundColor: "#F87171",
				data: bar.map((item) => item.total_exp),
			},
		],
	};

	const options1 = {
		responsive: true,

		scales: {
			y: {
				beginAtZero: true,
			},
		},
	};

	return (
		<div className="col-span-3 flex items-center justify-center h-96 p-4 bg-white card">
			{/* {barChartData && <Bar data={data1} options={options1} />} */}
			<Bar data={data1} options={options1} />
			{/* {!barChartData && (
        <div className="flex items-end justify-center w-full gap-4 ">
          <div className="w-4 skeleton h-14"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-24 skeleton"></div>
          <div className="w-4 h-16 skeleton"></div>
          <div className="w-4 skeleton h-14"></div>
        </div>
      )} */}
		</div>
	);
};

export default BarChart;
