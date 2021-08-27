/*            Imports            */
const express = require('express');
const dotenv = require('dotenv');
const morgan= require('morgan');
const body_parser= require('body-parser');
const path=require('path');
const route = require('./server/routes/router');
const connectDB = require('./server/database/connection');


/*             Settings             */
dotenv.config({path: 'config.env'})


/*            Constants            */
const app=express();
const PORT = process.env.PORT || 8080;



/*            Middlewares            */
// Set Logger
app.use(morgan('tiny'));
app.use(body_parser.urlencoded({extended: true}));

// Mongo DB Connection
connectDB();

// Set Template Engines
app.set("view engine","ejs");
// app.set("views", path.resolve(__dirname,"views/ejs")); //Reference

// Load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/images")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

// Routes
app.use('/',route);



/*          General Configuration        */
app.listen(PORT,()=>{console.log(`Server started on http://localhost:${PORT}`)})