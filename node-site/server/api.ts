import express = require("express");
import log4js = require("log4js");
import moment = require("moment");

let log = log4js.getLogger();
let fs = require('fs');
let os = require('os');
let logfile = `/tmp/shared_logs/` + os.hostname() + `_access.node.log`;

const router = express.Router();
export = router;

/* POST data listing. */
router.post("/data", (req, res) => {
	console.log('req.body', req.body);
	let line = moment().format("YYYY-MM-DD hh:mm:ss") + " " + JSON.stringify(req.body) + "\n";
    fs.appendFileSync(logfile, line);
	res.send({ "status": "success"}); 
});