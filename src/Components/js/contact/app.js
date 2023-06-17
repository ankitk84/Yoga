const express = require('express');
const port = process.env.PORT || 8000;
const body_Parser = require('body-parser');
const nodemailer = require('nodemailer')
require('./mongo.js');
const UserInfo = require('./schema.js');

const sendEmail = async(email,message)=>{
    const transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:email,
        pass:'sqaggmvvhlagaslv'
      }
    });
    const message1 = {
      from:email,
      to:'priyankaverma10351@gmail.com',
      subject:'Mail Send From YOGA',
      text:message
    }

    try{
      const info = await transporter.sendMail(message1);
    }
    catch(err){
      console.log('Error: ',err);
    }
}

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
    console.log("ddkdkkdkd"+data.email);
    await sendEmail(data.email,data.message);
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

