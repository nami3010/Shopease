const express = require("express")
const app = express();
const mongoose=require("mongoose");
const bodyParser=require('body-parser');
const env = require('dotenv').config()
app.use(bodyParser.json())
app.listen(8000)
const connectToMongo = async () =>{
    try{
mongoose.connect('mongodb+srv://nami:12345@cluster0.1hhp7q8.mongodb.net/Capstone?retryWrites=true&w=majority')
    }catch(error){
    console.log("🚀 ~ file: index.js:11 ~ connectToMongo ~ error:", error)

    }
}
connectToMongo()
require('./router')(app)