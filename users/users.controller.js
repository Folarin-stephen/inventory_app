const UserModel = require('./../models');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const product = require('../models/product');
const User = UserModel.Users
const Products = UserModel.products

require('dotenv').config()


const getAllProducts = async (req, res) => {
    const products = await Products.findAll({
        
    })
    res.status(200).json(products)
}

const CreateUser = async(req, res,) => {
    //res.status(201).json(req.body);
    //add new user and return 201
    const salt = await bcrypt.genSalt(10);
    var usr = {
    name : req.body.name,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt),
    date_of_birth: req.body.date_of_birth,
    phone_number: req.body.phone_number,
    next_of_kin: req.body.next_of_kin,
    home_address: req.body.home_address,
    gender: req.body.gender
    };
    let created_user = await User.create(usr);

    const token = await jwt.sign({ email: created_user.email, password: created_user.password}, process.env.JWT_SECRET)

    return res.status(201).json(
      {
        created_user,
        token,
        usr
      });
  };


const Login = async(req,res,)=>{
    const user = await User.findOne({ where : {email : req.body.email }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
           token = jwt.sign({ "id" : user.id,"email" : user.email,"name":user.name },process.env.JWT_SECRET);
           res.status(200).json({ token : token });
       } else {
         res.status(400).json({ error : "Password Incorrect" });
       }
     
     }else{
       res.status(404).json({ error : "User does not exist" });
     }
     
     };


     const getCategoriesProduct = async(req, res) => {
        const data = await UserModel.categories.findAll({
            include: [{
                model: Products,
                as: 'product'
            }],
            where: {id: 1}
        })
     }

     module.exports = {
        Login,
        CreateUser,
        getCategoriesProduct,
        getAllProducts
     }