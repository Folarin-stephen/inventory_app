'use strict';
const Usermodels = require('../models')
const uuid = require("uuid");
const uuidv4 = uuid.v4()
const {
  Model
} = require('sequelize');
const { Sequelize, products } = require('.');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      defaultValue: uuidv4,
      unique: true
    },
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    size: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    category_id: {
      type: DataTypes.STRING,
      references: Usermodels.categories
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()

    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'product',
  });
 return product
};