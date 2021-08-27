var UserDB=require('../model/models');

// Create new user
exports.create=(req,res)=>{
  if(!req.body){
    res.status(400).send("Content cannot be empty!");
  }

  const user=UserDB({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });
  user.save(user)
    .then(data=>{
      // res.send(data);
      res.redirect('/')
    }).catch(err=>{
      res.status(500).send({message: err.message || "Something went wrong"});
    })
}

// Retrieve all users, or find single user
exports.find=(req,res)=>{
  if(!req.query.id){
    UserDB.find()
    .then(data=>{
      res.send(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send({message: err.message||"Something went wrong!"})
    })  
  }else{
    UserDB.findById(req.query.id)
    .then(data=>{
      res.send(data);
    })
    .catch(err=>{
      console.log(err);
      res.status(500).send({message: err.message||"Something went wrong!"})
    })  
  }
}

// Update existing users 
exports.update=(req,res)=>{
  if(!req.body){
    res.status(400).send({message: "Data cannot be empty"});
  }
  const id=req.params.id;
  UserDB.findByIdAndUpdate(id, req.body, {useFindAndModify:false})
    .then(data=>{
      if(!data){
        res.status(404).send({message: `User with id - ${id} NOT FOUND!`});
      }else{
        res.send(data);
      }
    })
    .catch(err=>{
      res.send(500).send({message: err.message || "Something went wrong!"});
    })
}

// Delete existing user
exports.delete=(req,res)=>{
  const id=req.params.id;
  UserDB.findByIdAndDelete(id)
    .then(data=>{
      if(!data){
        res.status(404).send({message: `User with id - ${id} NOT FOUND!`});
      }else{
        res.send("User deleted successfully!");
      }
    }).catch(err=>{
      res.status(500).send({message:err.message|| "Something went wrong!"});
    });
}