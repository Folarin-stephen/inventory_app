const AdminModel = require('../models/admin')
const Model = require('./../models');


const addProducts = async (req, res) => {

    var data = {
        
        name: req.body.name,
        price: req.body.price,
        size: req.body.price,
        active: req.body.active,
        category_id: req.body.category_id
    };
const created_product = await Model.products.create(data);
    res.status(201).json(created_product);
}

module.exports = {
    addProducts
}