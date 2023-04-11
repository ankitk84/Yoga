const express = require('express');
const port = process.env.PORT || 8000;
const body_Parser = require('body-parser');
require('./mongo.js');
const UserInfo = require('./schema.js');

const app = express();
app.use(express.json());
app.use(body_Parser.urlencoded());
app.get('/getContact',async(req,res)=>{
    const data = await UserInfo.find();
    res.send(data);
})
app.get('/',(req,res)=>{

    res.send("Hlo Bhaiya And this server is created by Pinku");
})
app.post('/contact',async(req,res)=>{
    const data = req.body;
    try{
        await UserInfo.create(data);
        res.send("Added")
    }
    catch(error){
        console.log("Information not added");
    }
})
app.listen(port,()=>{
    console.log(`Port : ${port}`)
})