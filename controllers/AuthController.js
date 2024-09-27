const userModel = require("../models/userModel");

const registercontroller = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name) {
      return next("Name is required");
    }
    if (!email) {
      return next("email is required");
    }
    if (!password) {
      return next("password is required");
    }
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      return res.status(200).json({
        success: false,
        message: "Email already register please login",
      });
    }
    //create new user
    const user = await userModel.create({ name, email, password });
    //token
    const token = user.createJWT();
    res
      .status(201)
      .json({
        success: true,
        message: "user created succesfully",
        user: {
          name: user.name,
          lastname: user.lastname,
          email: user.email,
          location: user.location
        }, 
        token
      });
  } catch (error) {
    return next(error);
  }
};

const logincontroller = async (req,res)=>{
    const {email,password}=req.body;
    //validation check
    if(!email || !password){
      return next("please provide all field")
    }
    //find user by email
    const user = await userModel.findOne({email}).select("+password")
    if(!user){
      return next("Invalid username or password")
    }
    const ismatch=await user.comparePassword(password);
    if(!ismatch){
     return next("Invalid username or password")
    }
    user.password=undefined;
    const token= user.createJWT()
    res.status(200).json({success:true,message:"Login successfully",user,token})
}

module.exports = {registercontroller,logincontroller};
