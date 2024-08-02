import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
dotenv.config()

const PORT =process.env.PORT || 5000;
const MONGOURL=process.env.MONGO_URL;

//Connecting to DB

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected Successfully.")
    app.listen(PORT,()=>{
        console.log(`Server is running on the PORT ${PORT}`)
    })
}).catch((error)=>{console.log(error)})