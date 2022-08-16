'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InventoryTransports', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      trip: {
        type: Sequelize.STRING,
        allowNull: false
      },
      start: {
        type: Sequelize.STRING,
        allowNull: false
      },
      other1: {
        type: Sequelize.STRING
      },
      end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      other2: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      last8: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gas: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      gas_amount: {
        type: Sequelize.STRING
      },
      toll: {
        type: Sequelize.INTEGER,
        allowNull: false
      } 
    },
      {
        sequelize,
        modelName: 'InventoryTransport',
        tableName: 'submission',
        timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InventoryTransports');
  }
};