const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const port=5000;  
// app.get('/quotes',(req,res)=>{
//     res.send("This is Learning of API")
// });
const start=async()=>{
    try{
           app.listen(port,()=>{
           console.log( `${port} Yes I am connected`);
        })
    }
    catch(err){
        console.log("Error",err)
    }
}

app.put('./quotes',(req,res)=>{
    console.log("Request",req.body);
})
start();