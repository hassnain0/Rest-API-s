const express=require('express');
const bodyparser=require('body-parser');
const MongoClient = require('mongodb').MongoClient
const app=express();

app.use(bodyparser.urlencoded({extended:true}))

app.post('/quotes',(req,res)=>{
console.log(req.body)
})

  MongoClient.connect('mongodb+srv://Hassnain_Ali:hassnain@cluster0.o3gnmyd.mongodb.net/', (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })