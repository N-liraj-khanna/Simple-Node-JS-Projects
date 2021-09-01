/* Imports */
const router = require('./routes/router');
const path=require('path');
const mongoose=require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

/* Constants */
const MONGO_URL = "mongodb+srv://<username>:<password>@cluster0.yx8gt.mongodb.net/urlShortner?retryWrites=true&w=majority"
const app = express();
const PORT = process.env.PORT || 3000;


/* Connect with DB */
mongoose.connect(
  MONGO_URL,  
  {useNewUrlParser: true},
  ()=>{console.log('Connected with DB');
});


/* Middlewares */

// View Engine setup
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);


/* General Config */
app.listen(PORT, ()=>{console.log(`Server Up and running ${PORT}`);});
