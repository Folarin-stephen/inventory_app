'use strict';

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
   await queryInterface.bulkInsert('categories', 
   [
    {
      id:"1",
      name: "Furniture",
      description: "Interiors & Furniture",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "2",
      name: "Children",
      description: "Kids, Toys & Gadgets",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Fashion & Clothings",
      description: "Fashion styles",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Technology",
      description: "Industrial Technology",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Food & Groceries",
      description: "Food retail",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mobile Phone & gadgets",
      description: "Mobiles",
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ]
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("categories", null, {})
  }
};
