var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
// var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");
var apiResponse = require("./helpers/apiResponse");
var cors = require("cors");
var app = express();

//don't show the log when it is test
if(process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use(express.static("client/build"));

app.use("/api/", apiRouter);

// throw 404 if URL not found
// app.all("*", function(req, res) {
// 	return apiResponse.notFoundResponse(res, "Page not found");
// });

if(process.env.NODE_ENV !== "test") {
	console.log("App is running ... ", );
	console.log("Press CTRL + C to stop the process. \n");
}

console.log(path.join(__dirname, "." ,"client", "build", "index.html"));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.use((err, req, res) => {
	if(err.name == "UnauthorizedError"){
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static("client/build"));
// 	app.get("*", (req, res) => {
// 		res.sendFile(path.join(__dirname + "client" + "build" + "index.html"));
// 	});
// }

// if (process.env.NODE_ENV === "production") {
// 	// Serve any static files
// 	app.use(express.static(path.join(__dirname, "client/build")));
// 	// Handle React routing, return all requests to React app
// 	app.get("*", function(req, res) {
// 		res.sendFile(path.join(__dirname, "client/build", "index.html"));
// 	});
// }
app.listen(process.env.PORT || 3001, () => console.log(`LISTENING ON UHH PORT ${process.env.PORT || 3001}`));

module.exports = app;
