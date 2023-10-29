const express = require('express');
const router = express.Router();
const Models = require('../models');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const joi = require("joi");
const User = Models.Users;
const middleware = require("./users_middleware");
const controller = require("./users.controller")
dotenv.config();

// user get 
router.get('/get', controller.getAllProducts)
// Create user
router.post('/signup', middleware.ValidateUserCreation, controller.CreateUser)

router.use(middleware.bearerTokenAuth)

// Signin user
router.post('/login', middleware.LoginValidation, controller.Login)



module.exports = router;
