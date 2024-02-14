const express = require('express')
const cors=require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

const authRouters = require("./routes/auth.routes.js")
app.use("/auth",authRouters)

const userRouters = require("./routes/user.routes.js")
app.use("/users",userRouters)

module.exports=app 
