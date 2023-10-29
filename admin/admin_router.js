const express = require('express');
const router = express.Router();
const Models = require('../models');
const bcrypt = require("bcrypt");
const controller = require('./admin_controller')


router.post('/addproduct', controller.addProducts)


module.exports = router