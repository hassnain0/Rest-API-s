const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({extended:true}))

app.post('/quotes',(req,res)=>{
console.log(req.body)
})

const mongo_Client=require('mongodb').MongoClient
