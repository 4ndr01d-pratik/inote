const express = require('express');
const router = express.Router();
const {body, validationResult} = require('express-validator');

const User = require('../models/User');
//create a user using: POST "/api/auth". Doesnot require auth//
router.post('/',[body('name','Enter a valid name').isLength({min: 3}),
body('email','Enter a valid email').isEmail(),
body('password','Password must atleast have 5 characters').isLength({min: 5})],(req,res)=>{
  const error = validationResult(req);
  if(!error.isEmpty()){
    return res.status(400).json({erroe: error.array()});
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }).then(user => res.json(user))
  .catch(err=> {console.log(err)
  res.json({error: 'Email is already registered'})})
})
module.exports = router