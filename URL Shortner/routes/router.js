const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const URL = require('../model/url.js');

const PORT=process.env.PORT || 3000;

router.get('/', (req,res)=>{
  return res.render('index.ejs', {shortenUrl: null});
});

router.post('/', async (req,res)=>{
  var uuid = uuidv4();
  uuid=uuid.slice(uuid.length-5);
  const url = new URL({url: req.body.url, uuid: uuid});
  await url.save();
  return res.render('index.ejs', {shortenUrl: `http://localhost:${PORT}/${uuid}`});
});

router.get('/:uuid', async (req,res)=>{
  const uuid = req.params.uuid;
  const savedURL = await URL.findOne({uuid: uuid});
  console.log("a", savedURL);
  if(!savedURL) return res.status(404).send("Invalid URL");
  return res.redirect("asd");
});

router.get('*',(req,res)=>{
  return res.status(404).send("Page Not Found");
})

module.exports = router;