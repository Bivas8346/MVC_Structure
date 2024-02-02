const express=require('express');
const route=express.Router()
const HomeController=require('../Controller/HomeController')


route.get('/',HomeController.Home)
route.get('/about',HomeController.About)
route.get('/con',HomeController.Contact)
route.get('/service',HomeController.Service)


module.exports=route