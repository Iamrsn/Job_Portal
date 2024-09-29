const express = require("express");
const router = express.Router();
const testpostcontroller = require("../controllers/Testcontroller.js");
const userAuth = require("../middlewares/AuthMiddleware.js");

router.post("/test",testpostcontroller);

module.exports=router;