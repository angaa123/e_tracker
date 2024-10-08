const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { myLogger } = require("./middlewares/logger");
dotenv.config();

const authRoutes = require("./routes/auth-route");
const userRoutes = require("./routes/user-route");
const categoryRoutes = require("./routes/category-route");
const recordRoutes = require("./routes/record-route");

const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use(myLogger());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/records", recordRoutes);
app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
	console.log(`Сервер localhost:${PORT} дээр аслаа.`);
});
