// Imports
const express= require('express');
const morgan= require('morgan');
const {v4:uuidv4}= require('uuid');

// Constants
const app=express();
const port = process.env.port || 3000;
const fs = require('fs');
const path = require('path');

// Middlewares
let logs = fs.createWriteStream(path.join(__dirname, 'logs.log'), {flags: 'a'});

app.use((req,res,next)=>{
  req.id=uuidv4();
  next();
});

morgan.token('id',(req)=>{
  return req.id
})

morgan.token("param",(req,res,param)=>{
  return "User Token";
})
app.use(morgan(':id :param :method :status :url "HTTP/:http-version'));
app.use(morgan(':id :param :method :status :url "HTTP/:http-version',{stream: logs}));

// Routes
app.get('/',(req, res)=>{
  res.send("Morgan Logger App");
});


// General
app.listen(port, ()=>{console.log("Server started on http://localhost:3000");});