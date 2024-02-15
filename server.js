const express=require('express');
const bodyparser=require('body-parser');
const app=express();

app.use(bodyparser.urlencoded({extended:true}))


app.get('/',(req,res)=>{

})
app.post('/quotes',(req,res)=>{
console.log(req.body)
})
