// Imports
const express = require('express');
const body_parser = require('body-parser');
const router = require('./router');

// Constants
const app=express();
const port = process.env.PORT || 3000;


// Middlewares
app.use('/api',router);
app.use(body_parser.urlencoded({extended: false}));


// Routing
app.get('/',(req,res)=>{
  res.end("Home");
})



// General configuration
app.listen(port,()=>{console.log(`Server started on http://localhost:${port}`)})