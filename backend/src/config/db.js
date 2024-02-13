const mongoose = require("mongoose")

const mondbUrl = "mongodb+srv://darwekara123:1IQpZgJpZPtQSJyq@cluster0.p3qxgyo.mongodb.net/?retryWrites=true&w=majority"

const connectDb = ()=>{
    return mongoose.connect(mondbUrl)
}

module.exports={connectDb}