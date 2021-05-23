const router = require('express').Router(); 
const userModel = require('../models/users/userModel');
const auth = require("../authentication/auth");

router.post('/register', userModel.registerUser );

router.post('/login', userModel.loginUser);


router.patch('/addorder/:id', auth.verifyToken, userModel.addOrder);


module.exports = router;


