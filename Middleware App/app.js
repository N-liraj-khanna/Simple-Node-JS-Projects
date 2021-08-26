// Imports
const express=require('express');
const path=require('path');
const fs=require('fs');

// Constants
const app = express();
const port=process.env.PORT || 3000;

// Routes
app.get('/', (req,res)=>{
  res.send("Welcome!")
})

// Middlewares
app.use((req,res,next)=>{
  var filepath=path.join(__dirname,'static',req.url);
  fs.stat(filepath,(err, file)=>{
    if(!err && file.isFile()){
      res.sendFile(filepath);
    }else{
      next();
    }
  });
});

app.use((req,res)=>{
  req.status(404);
  res.send("File Not Found!")
})

app.listen(port, ()=>{console.log('Started at http://localhost:3000')})