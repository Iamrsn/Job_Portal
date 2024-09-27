const mongoose = require("mongoose")

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_LOCAL_URI)
        console.log(`connected to mongodb database ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`mongoDb eerror ${error}`)
    }
}

module.exports=connectDB;