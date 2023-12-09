//import express
const express =require('express');
const body_parse = require('body-parser');
const userRouter= require('./routers/user.route');
const cors=require('cors');

const app=express();
app.use(cors());

app.use(body_parse.json());

app.use('/',userRouter);

module.exports=app;