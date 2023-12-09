const router = require('express').Router();
const UserController =require ("../controller/user.controller");

router.post('/signUp',UserController.register);

module.exports=router;

//Difind all the routes