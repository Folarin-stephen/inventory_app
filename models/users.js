'use strict';
const bcrypt =  require("bcrypt")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
//   Users.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// };
// Users.beforeSave((user, options) => {
//   const {
//       password
//   } = user;

//   var saltRounds = 10;
//   var salt = bcrypt.genSaltSync(saltRounds);
//   var hash = bcrypt.hashSync(password, salt);
//   user.password = hash;
// });
// Users.beforeSave((user, options) => {
//    var user = this;
//     value = this.password;
//    const salt = await bcrypt.genSalt(10);
//    const hash = await bcrypt.hash(user.password, salt);
//    this.password = hash;
//   //  next();
// });

// Users.beforeSave((user, options) => {
//   const {
//       password
//   } = user;

//   var saltRounds = 10;
//   var salt = bcrypt.genSaltSync(saltRounds);
//   var hash = bcrypt.hashSync(password, salt);
//   user.password = hash;
// });

// Users.beforeBulkInsert((user, options) => {
//     for (const user of users) {
//         const {
//             password
//         } = user;

//         var saltRounds = 10;
//         var salt = bcrypt.genSaltSync(saltRounds);
//         var hash = bcrypt.hashSync(password, salt);
//         user.password = hash;
//     }
// });

  Users.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    date_of_birth: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    next_of_kin: DataTypes.STRING,
    home_address: DataTypes.STRING,
    gender: {
      type: DataTypes.STRING,
      values: ['male', 'female']
    }
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: true,
  //   // createdAt: {defaultValue: new Date()},
  //   // updatedAt: {defaultValue: new Date()}
  });

 

  return Users;
};