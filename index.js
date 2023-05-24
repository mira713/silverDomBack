const express= require("express");
const {userRouter} = require('./Router/userRoutes');
const {connection} = require('./config/db')
//const {noteRouter} = require('./Router/notesRouter');
// const {authenticate} = require('./middleware/authorisation');
require("dotenv").config();
const cors = require("cors");


const app = express()
app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.use("/user",userRouter)
// app.use(authenticate)
//app.use("/notes",noteRouter)




let port = process.env.port
app.listen(port,async()=>{
    await connection
    console.log('connected to db')
    console.log("running")
})

