const express = require("express");
const userAuth= require("../middlewares/AuthMiddleware")
const updateUserController=require("../controllers/userController")

const router = express.Router()

//routes
//update user
router.put("/update-user",userAuth,updateUserController)



module.exports=router;