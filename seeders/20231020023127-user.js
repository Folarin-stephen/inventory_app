'use strict';
try {
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
    await queryInterface.bulkInsert('Users', [
      {
       id: "cad36176-ead7-4300-b231-6299c730bcaf",
       name: "Folarin Isabelle",
       email: "folarinisabelle007@gmail.com",
       password: "12345678",
       date_of_birth: "08-06-2021",
       phone_number: "08069081214",
       next_of_kin: "Folarin Oluwaseyi",
       home_address: "Eleweran Abeokuta",
       gender: "female",
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
    await queryInterface.bulkDelete('Users', null, {id: "cad36176-ead7-4300-b231-6299c730bcaf"});
  }
};
} catch (err) {
  console.log(err)
}


