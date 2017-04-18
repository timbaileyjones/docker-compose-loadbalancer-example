// Get dependencies
let express = require("express");
let path = require("path");
let http = require("http");
let bodyParser = require("body-parser");
let log4js = require("log4js");
let log = log4js.getLogger();
let moment = require("moment");

let fs = require('fs');
let os = require('os');
let logfile = `/tmp/shared_logs/` + os.hostname() + `_access.node.log`;

const router = express.Router();

log.setLevel("TRACE");
// log.setLevel("DEBUG");

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname)));

// Catch all other routes and return the index file
app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "../static", "index.html"));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || 3000;
app.set("port", port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

app.post("/api/data", (req, res) => {
    console.log('req.body', req.body);
    let line = moment().format("YYYY-MM-DD hh:mm:ss") + " " + JSON.stringify(req.body) + "\n";
    fs.appendFileSync(logfile, line);
    res.send({ "status": "success" });
});

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
    log.info(`API running on localhost: ${port}`);
});
/* POST data listing. */