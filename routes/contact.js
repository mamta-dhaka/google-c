var express = require("express");
const ContactController = require("../controllers/ContactsController");

var router = express.Router();

router.post("/list", ContactController.contactList);

module.exports = router;