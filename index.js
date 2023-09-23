const express = require("express")
const app = express();
const mongoose = require("mongoose")
const morgan = require('morgan');
const bodyParser = require('body-parser')
var cors = require('cors')
const env = require('dotenv').config()
app.use(cors({ credentials: true, origin: true }))
app.use(bodyParser.json({ limit: '10mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

mongoose.connect(process.env.DBURL, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    console.log("process.env.DBURL", process.env.DBURL)
    if (err) {
        console.log("err-----------------------------------------", err)
    } else {
        console.log("DB=====================>", process.env.DBURL)
    }
});
app.use(morgan('combined'));
app.use(express.static('./img'));
require('./router')(app)
app.set('views', './views');
app.set('view-engine', 'jade');
console.log('Magic happens on port', process.env.PORT);



