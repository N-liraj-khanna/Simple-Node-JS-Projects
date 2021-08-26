const express = require('express');
const router = express.Router();

var accounts = require('./database') 

// GET requests
router.get('/accounts', (req, res)=>{
  return res.json({user_data: accounts});
})

router.get('/accounts/:id', (req, res)=>{
  const id=Number(req.params.id);
  const account=accounts.find((account)=>{
    return account.id===id;
  });
  if(account)
    return res.json({user_data: account});
  else
    res.status(500).send("No such Account found")
})

// PUT request
router.put('/accounts/:id', (req, res)=>{
  const id=Number(req.params.id);
  const account=accounts.find((account)=>{
    return account.id===id;
  });

  if(!account)
    res.status(500).send("No such Account found")

  const data = req.body;
  const index = accounts.indexOf(account);
  const updated={...account,...data};
  accounts[index]=updated;

  return res.json({user_data: updated});
})

// POST requests
router.post('/accounts', (req, res)=>{
  const data_input=req.body;
  accounts.push(data_input);
  return res.json({user_data: accounts});
})

// DELETE requests
router.delete('/accounts/:id',(req,res)=>{
  const id=Number(req.params.id);
  const new_accounts = accounts.filter((account)=>{return account.id!=id});

  if(!new_accounts)
    return res.status(500).send("No account found!");
  
    accounts=new_accounts;
    return res.send(accounts);
  
})

module.exports = router;