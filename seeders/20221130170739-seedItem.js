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
    let data = require('../data/item.json').map((el)=>{
    let item = {
      nama_item: el.nama_item,
      unit: el.unit,
      stok:el.stok,
      harga_satuan:el.harga_satuan,
      barang:el.barang,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return item
    })
    await queryInterface.bulkInsert('Items', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Items', null, {})
  }
};
