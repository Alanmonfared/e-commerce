const router = require('express').Router(); 
const userModel = require('../models/users/userModel');



router.post('/register', userModel.registerUser );

router.post('/login', userModel.loginUser);

router.post("/addorder", userModel.addOrder);



module.exports = router;


