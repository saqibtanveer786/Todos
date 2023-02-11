const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const User = require('../modals/Users')
const { body, validationResult } = require('express-validator');

// this end point is to register user: "Post"  Atuntication not require Login also
router.post('/signup',
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 5 }), 
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }).then(user => res.json(user));
})

// this end point is to login user: "Post"  Atuntication not require Login also
router.post('/login',
  body('email').isEmail(),
  body('password').isLength({ min: 5 }), 
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let user = await User.find({
    name:`${req.body.email}`,password:`${req.body.password}`
    })
  if (!user) {
    res.send(user)
    console.log(user)
  }
})


module.exports = router