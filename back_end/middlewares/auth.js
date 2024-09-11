const jwt = require("jsonwebtoken");
const { JTW_PASSWORD } = process.env;
const auth = (req, res, next) => {
	// console.log("Нэвтэрсэн хэрэглэгч шалгах", req.headers.authorization);

	if (!req.headers.authorization) {
		console.log("999999999", req.headers.authorization);
		res.status(401).json({ message: "Энэ үйдлийг хийхийн тулд нэвтэрнэ үү." });
	} else {
		const token = req.headers.authorization.split(" ")[1]; // Bearer token
		const user = jwt.verify(token, JTW_PASSWORD); // { id: user.id }
		req.user = user;
		console.log(user); // { id: user.id }
		next();
	}
};

module.exports = { auth };
