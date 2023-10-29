const joi = require('joi')
const jwt = require('jsonwebtoken')
const UserModel = require('./../models');
const User = UserModel.users

const bearerTokenAuth = async (req, res, next) => {
    try {
    const authHeader = req.headers;
    console.log(authHeader);

    if (!authHeader.authorization) {
        return res.status(401).json({ message: 'You are not authenticated!' });
    }

    const token = authHeader.authorization.split(' ')[1]; // berear tokenvalue
    console.log(token);

    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    console.log({ decoded })

    // decoded { email: someemail@mail.com, _id: jshkdf }

    const user = await User.findOne({ id: decoded.email })
    
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized",
        })
    }

    req.user = user;

    next()
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message: "Unauthorized",
        })
    }
}


const ValidateUserCreation = async (req, res, next) => {
    try {
        const schema = joi.object({
            name: joi.string().required(),
            password: joi.string().required(),
            email: joi.string().email().required(),
            date_of_birth: joi.string().required(),
            phone_number: joi.string().required(),
            gender: joi.string().valid('male', 'female'),
            home_address: joi.string()
        })

        await schema.validateAsync(req.body, { abortEarly: true })
    
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}

const LoginValidation = async (req, res, next) => {
    try {
        const schema = joi.object({
            password: joi.string().required(),
            email: joi.string().email().required()
            
        })

        await schema.validateAsync(req.body, { abortEarly: true })
    
        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}


module.exports = {
    ValidateUserCreation,
    LoginValidation,
    bearerTokenAuth
}