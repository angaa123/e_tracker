const sql = require("../config/db");
const jwt = require("jsonwebtoken");
const user = require("../middlewares/auth");

const getAllRecord = async (req, res) => {
	const uid = req.user.id;
	try {
		const guilgee =
			await sql`SELECT * FROM record r INNER JOIN categories  c ON r.cid=c.id WHERE uid= ${uid} ORDER BY r.created_at DESC`;
		res.status(200).json({ guilgee });
	} catch (error) {
		res.status(400).json({ message: "failded", error });
	}
};

const getInfo = async (req, res) => {
	const uid = req.user.id;
	console.log("jdfbjhdjhbfdv============");
	try {
		const [income, expense] = await sql`SELECT transaction_type, SUM(amount) 
FROM record 
WHERE uid = ${uid}
GROUP BY transaction_type;`;
		res.status(200).json({ income, expense });
		console.log(income, expense);
	} catch (error) {
		res.status(400).json({ message: "failded blalbalbalballba", error });
	}
};

const getChartData = async (req, res) => {
	const uid = req.user.id;
	try {
		const donutChartData = await sql`
    SELECT SUM(r.amount), c.name cat_name FROM record r 
    INNER JOIN categories c ON r.cid=c.id
    WHERE r.transaction_type='EXP' AND r.uid=${uid}
    GROUP BY cat_name;
    `;
		const barChartData = await sql`
    SELECT TO_CHAR(DATE_TRUNC('month', r.created_at), 'Mon') as sar, 
    SUM(CASE WHEN r.transaction_type = 'EXP' THEN r.amount ELSE 0 END) as total_exp,
    SUM(CASE WHEN r.transaction_type = 'INC' THEN r.amount ELSE 0 END) as total_inc
    FROM record r
		WHERE r.uid=${uid}
    GROUP BY DATE_TRUNC('month', r.created_at) 
    ORDER BY DATE_TRUNC('month', r.created_at);
    `;
		res
			.status(200)
			.json({ message: "success", donut: donutChartData, bar: barChartData });
	} catch (error) {
		res.status(400).json({ message: "failded", error });
	}
};

module.exports = { getAllRecord, getInfo, getChartData };
