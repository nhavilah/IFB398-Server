require('dotenv').config();
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const knex = require('../database/db');

//handles the /user/registration endpoint
//takes username and password in the header
router.post("/register",function(req,res,next){
  const email = req.body.email
  const password = req.body.password
  console.log(email, password);

  //verify body
  if(!email || !password){
    res.status(400).json({
      error: true,
      message: "Request body incomplete - email and password needed"
    })
    return
  }

  //check for user in the database
  const queryUsers = knex("user").where("username","=",email)
  queryUsers
    .then((user) => {
      if(user.length > 0) {
        res.status(401).json({
          error: true,
          message: "User already exists"
        });
        return;
      }

      //if the user doesn't exist in the database insert them into the database
      const saltRounds = 10
      const hash = bcrypt.hashSync(password,saltRounds)
      return knex("user").insert({ username: email, password: hash})
    })  
    .then(() => {
      res.status(201).json({
        success: true,
        message: "Successfully created user"
      })
      return;
    })
    .catch((error) => {
      res.status(error.status || 500)
      res.send({ error: true, message: error.message })
      console.log(error.message)
    })
})

//this handles the /user/login endpoint
//takes in the username and password in the header
//checks if the user exists in the database
router.post("/login",function (req,res,next) {
  //retrieve email and password from req.body
  const email = req.body.email
  const password = req.body.password

  console.log("received");

  if(!email || !password){
    res.status(400).json({
      error: true,
      message: "Request body incomplete - email and password needed"
    });
    return;
  }

  const queryUsers = knex("user").select("*").where("username","=",email)
  queryUsers
  .then((user) =>{
    if(user.length === 0){
      res.status(401).json({
        error: true,
        message: "User does not exist"
      })
      return
    }

    //compare password hashes
    return bcrypt.compare(password, user[0].password)
  })
  .then((match) => {
    if(!match){
      res.status(401).json({
        error: true,
        message: "Passwords do not match"
      })
      return
    }

    console.log('logged in');
    //create and return JWT token
    // const secretKey = process.env.SECRET_KEY;
    // const expires_in = 60 * 60 * 24; //1 day
    // const exp = Date.now() + expires_in * 1000
    // const token = jwt.sign({ email, exp }, secretKey)
    // return res.json({ token_type: "Bearer", token, expires_in })
  })
  .catch((error) => {
    res.status(error.status || 500)
    res.send({ error: true, message: error.message })
  })
})

module.exports = router;