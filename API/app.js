const express=require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const morgan=require('morgan')
const app=express();
const  conn= async ()=>{
    try{
        const con=await mongoose.connect("mongodb://localhost:27017/OnePiece")
    ;
       console.log(`MongoDB connected: ${con.connection.host}`);
    }catch(err){
       console.log(err);
       process.exit(1);
       }
    
}

conn();
   
app.use(bodyParser.json());
app.use(morgan('tiny'))
app.use('/',require('./routers/route'));
app.use('/',(req,res)=>{
    res.send('hello world')
})

app.listen(8080,()=>{
    console.log('app Running in Prt 8080');
})