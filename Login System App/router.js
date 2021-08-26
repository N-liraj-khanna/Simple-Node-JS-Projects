const express = require('express');

const router = express.Router();

const credentials = {
  email: 'test@example.com',
  password: 'test'
}

// login user
router.post('/login',(req,res)=>{
  if(req.body.email === credentials.email && req.body.password === credentials.password) {
      req.session.user=req.body.email;
      console.log(req.session.user);
      res.redirect('/route/dashboard');
  }else{
    res.end("You don't belong here!");
  }
});

// route for dashboard
router.get('/dashboard', (req, res)=>{
  if(req.session.user){
    console.log(req.session.user);
    res.render("dashboard",{title: "Dashboard", user: req.session.user});
  }else{
    res.end("You don't belong here!");
  }
})

// route for logout
router.get('/logout', (req, res)=>{
  if (req.session) {
    req.session.destroy(function(err) {
        if(err) {
            return end("Something went wrong! Try Again");
        } else {
            req.session = null;
            console.log("logout successful");
        }
    });
  } 
  return res.render('base',{title: "Logged Out!", logout: "Logged out successfully!!"});
})

module.exports =  router;
