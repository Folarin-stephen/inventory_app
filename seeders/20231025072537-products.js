'use strict';
const uuid = require("uuid");
const uuidv4 = uuid.v4()
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  
   await queryInterface.bulkInsert('products', [
   {
    id: uuidv4,
    name: "Office  Cabinet 20kA",
    price: "45,000",
    size: "small",
    active: true,
    category_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Managers Chair",
    price: "150,000",
    size: "medium",
    active: true,
    category_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Hughies Diaper",
    price: "14,000",
    size: "medium",
    active: true,
    category_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Police car Toy",
    price: "25,000",
    size: "small",
    active: true,
    category_id: 2,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Corn Flakes Rebag",
    price: "350",
    size: "small",
    active: true,
    category_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Vegetable Cooking Oil",
    price: "8,000",
    size: "medium",
    active: true,
    category_id: 5,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Men Vintage Shirt",
    price: "12,000",
    size: "medium",
    active: true,
    category_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Gucci Hand Bag",
    price: "120,000",
    size: "small",
    active: true,
    category_id: 3,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Wireless Bluettoth I-Phone",
    price: "11,000",
    size: "small",
    active: true,
    category_id: 4,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "JBL Bass player",
    price: "220,000",
    size: "medium",
    active: true,
    category_id: 6,
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    id: uuidv4,
    name: "Dinning Set Marble",
    price: "200,000",
    size: "medium",
    active: true,
    category_id: 1,
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products',null,{})
  }
};
