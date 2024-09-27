const express = require("express");
const router = express.Router();
const {registercontroller,logincontroller} = require("../controllers/AuthController")


//register post method
router.post("/register",registercontroller);

//log in post method
router.post("/login",logincontroller);

module.exports=router;