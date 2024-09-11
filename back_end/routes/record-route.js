const { Router } = require("express");
const {
	getAllRecord,
	getInfo,
	getChartData,
} = require("../controllers/record-controller");
const { auth } = require("../middlewares/auth");

const router = Router();

router.route("/info").get(auth, getInfo);
router.route("/chart").get(auth, getChartData);
router.route("/").get(auth, getAllRecord);

module.exports = router;
