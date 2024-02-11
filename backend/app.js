const express = require('express'); 
const app = express(); 
require('dotenv').config();
const mongoose = require('mongoose')
const seedDB = require('./seed')
const cors = require('cors')
const quoteApi = require('./apis/quoteRoutes')

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)}); 

app.use(express.urlencoded({extended: true})); 
app.use(cors({origin: ['http://localhost:3000']}))
app.use(quoteApi)
// seedDB(); 
app.get('/hello', (req, res)=>{
    res.status(200).json({msg: 'get request done'})
})

let Port = process.env.PORT
app.listen(Port || 8000, ()=>{
    console.log('app is running at: ', Port); 
})