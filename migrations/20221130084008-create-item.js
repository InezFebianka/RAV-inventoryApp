'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_item: {
        allowNull: false,
        type: Sequelize.STRING
      },
      unit: {
        allowNull: false,
        //1 for kg
        //2 for pcs
        type: Sequelize.INTEGER
      },
      stok: {
        type: Sequelize.INTEGER
      },
      harga_satuan: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      barang: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Items');
  }
};