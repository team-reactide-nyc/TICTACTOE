const express = require('express');
const path = require('path');
const app = express();
const {getData} = require('./controllers/APIcontroller.js')
console.log(process.env.NODE_ENV);

app.use('/build',express.static(path.join(__dirname,'../build')))
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'../index.html'))
})
app.get('/api',getData);
app.get('style/css', (req,res)=>{
  res.sendFile(path.join(__dirname,'../style.css'))
})
app.listen(3000, ()=>console.log('listening to port 3000!!!!'))