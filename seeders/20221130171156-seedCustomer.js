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
    let data = require('../data/customer.json').map((el)=>{
    let customer = {
      nama: el.nama,
      contact: el.contact,
      email:el.email,
      alamat:el.alamat,
      diskon:el.diskon,
      tipe_diskon:el.tipe_diskon,
      ktp:el.ktp,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return customer
    })
    await queryInterface.bulkInsert('Customers', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Customers', null, {})
  }
};
