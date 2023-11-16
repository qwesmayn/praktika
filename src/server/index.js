const express = require("express")
const mongoose = require("mongoose")
const config = require("config")    
const authRouter = require("./routes/auth.roytes")
const app = express()
const PORT = config.get('serverPort')

app.use("/api/auth", authRouter)

const start = async () =>{
    try{
        console.log(req.body)
        mongoose.connect(config.get('dbUrl'))
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    }
    catch(e){

    }
}

start()