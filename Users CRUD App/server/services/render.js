const axios=require('axios');

exports.home_route=(req,res)=>{
  axios.get('http://localhost:3000/api/users')
    .then((response)=>{
      return res.render('index',{users:response.data});
    }).catch((err)=>{
      res.send(err);
    });
}

exports.add_user_route=(req,res)=>{
  axios.post('http://localhost:3000/api/users')
    .then((response)=>{})
  return res.render('add_user');
}

exports.update_user_route=(req,res)=>{
  axios.get('http://localhost:3000/api/users',{params: {id:req.query.id}})
    .then(data=>{
      return res.render('update_user',{user:data.data});
    }).catch((error)=>{
      console.log(error);
      res.status(404).send({message:error.message||"Something went wrong"});
    })
}