var express = require("express");
const AuthController = require("../controllers/AuthController");

var router = express.Router();

router.post("/authenticate-user", AuthController.authenticateUser);

module.exports = router;