'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code_transaksi: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tanggal_transaksi: {
        allowNull: false,
        type: Sequelize.DATE
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Customers'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      qty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_diskon: {
        type: Sequelize.INTEGER
      },
      total_harga: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_bayar: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Sales');
  }
};