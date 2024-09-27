const express = require("express");
const dotenv = require("dotenv")
require("express-async-errors")
const cors = require("cors");
const morgan = require("morgan");
dotenv.config({})
const app = express();

//files import
const connectDB=require("./config/db.js")
const TestRoutes = require("./routes/TestRoutes")
const AuthRoutes = require("./routes/AuthRoutes");
const errormiddleware = require("./middlewares/ErrorMiddleware.js");

//middlewares
app.use(express.json())
app.use(cors());
app.use(morgan("dev"))

//import routes from test routes..
app.use("/api/test",TestRoutes);
app.use("/api/auth",AuthRoutes)

//validation middlewares
app.use(errormiddleware)


connectDB()
port =process.env.port || 3000;
app.listen(port,()=>{
    console.log(`port runn on ${port}`)
})
