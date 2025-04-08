const express  = require('express');
const { error } = require('./Middleware/error');
require('dotenv').config()
const db = require('../Backend/config/db')
const routes = require('../Backend/Routes/authRoutes')
const app = express();

app.use(express.json())
app.get('/testing', (req,res)=>{
return res.send("Hi, Api is Active")
})

app.use('/api',routes)
app.use(error)


app.listen(process.env.PORT || 4000 , ()=>{
  console.log("server started on port: " + process.env.PORT)
})

db()