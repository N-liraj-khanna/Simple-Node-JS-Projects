const mongoose=require('mongoose');

const schema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  gender:String,
  status:String,
});

const UserDB = new mongoose.model("UserDB",schema);

module.exports=UserDB;

