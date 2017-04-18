// Get dependencies
import express = require("express");
import path = require("path");
import http = require("http");
import bodyParser = require("body-parser");
import log4js = require("log4js");

// Get our API routes
import api = require("./api");

let log = log4js.getLogger();
log.setLevel("TRACE");
// log.setLevel("DEBUG");

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname)));

// Set our api routes
app.use("/api", api);

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

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
	log.info(`API running on localhost: ${port}`);
});
