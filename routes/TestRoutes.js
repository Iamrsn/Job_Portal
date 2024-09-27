const express = require("express");
const router = express.Router();
const testpostcontroller = require("../controllers/Testcontroller")

router.post("/test",testpostcontroller);

module.exports=router;