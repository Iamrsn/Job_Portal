const express = require("express");
const router = express.Router();
const Registercontroller = require("../controllers/AuthController")

router.post("/register",Registercontroller);

module.exports=router;