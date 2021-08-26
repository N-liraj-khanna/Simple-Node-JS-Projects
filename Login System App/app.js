// Import
const path=require('path');
const body_parser = require('body-parser');
const session = require('express-session');
const express = require('express');
const {v4:uuidv4} = require('uuid');
const router = require('./router');

const app=express();


// Constants
const port=process.env.PORT || 3000;
  
// Middleware Settings
app.use(session({
  secret:uuidv4(),
  resave: false,
  saveUninitialized: true,
}))

app.use(body_parser.urlencoded({extended: true}));
app.use(body_parser.json());

app.set('view engine','ejs');


// Load static assets
app.use('/static',express.static(path.join(__dirname, 'public')))
app.use('/assets',express.static(path.join(__dirname, 'public/assets')))

app.use('/route', router);
// Home Route
app.get("/",(req,res)=>{
  res.render("base",{title: "Login System"});
})


app.listen(port, ()=>{console.log("Server Started http://127.0.0.1:3000");})