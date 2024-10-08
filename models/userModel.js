const mongoose =require("mongoose");
const validator = require("validator")
const bcrypt = require("bcryptjs")
const JWT = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is Required"]
    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
        require:[true,"Gmail is Required"],
        unique:true,
        validate:validator.isEmail
    },
    password:{
        type:String,
        require:[true,"password is Required"],
        minlength:[6,"password should be grater than 6 character"],
        select:true
    },
    location:{
        type:String,
        default:"India"
    },
},{timestamps:true})
//middleware create hash password

userSchema.pre('save', async function(){
    if(!this.isModified) return;
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

//compare password

userSchema.methods.comparePassword= async function(userPassword){
    const ismatch = await bcrypt.compare(userPassword,this.password);
    return ismatch;
}

//jsonwebtoken

userSchema.methods.createJWT=function(){
    return JWT.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}


module.exports=mongoose.model("User",userSchema)