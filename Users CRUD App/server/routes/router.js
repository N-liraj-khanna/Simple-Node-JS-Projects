const express = require('express');
const route = express.Router();
const render=require('../services/render')
const controller = require('../controller/controller');

route.get('/',render.home_route);

route.get('/add-user',render.add_user_route);

route.get('/update-user',render.update_user_route);

// API
route.post('/api/users',controller.create);
route.get('/api/users',controller.find);
route.get('/api/users/:id',controller.find);
route.put('/api/users/:id',controller.update);
route.delete('/api/users/:id',controller.delete);



module.exports=route;