import express = require("express");
import log4js = require("log4js");

let log = log4js.getLogger();

const router = express.Router();
export = router;

/* GET api listing. */
router.get("/", (req, res) => {
	log.info("test api");
	res.send("api works");
});
