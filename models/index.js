'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const categories = require('./categories');
const product = require('./product');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.categories = require('./categories')(sequelize, Sequelize.DataTypes)
db.products = require('./product')(sequelize, Sequelize.DataTypes)
db.users = require('./users')(sequelize, Sequelize.DataTypes)

db.sequelize.sync({force: false}).then(()=>{
  console.log('yes resync done');
})

db.categories.hasMany(db.products, {
  foreignKey: 'category_id',
  as: "product"
})

db.products.belongsTo(db.categories, {
  foreignKey: "category_id",
  as: "product"
})

module.exports = db;
