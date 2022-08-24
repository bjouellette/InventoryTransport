'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('InventoryTransports', {
      id: {
        allowNull: false,
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
      end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      keytag: {
        type: Sequelize.STRING,
        allowNull: false
      },
      stock: {
        type: Sequelize.STRING,
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
      toll: {
        type: Sequelize.INTEGER,
        allowNull: false
      } 
    },
      {
        Sequelize,
        modelName: 'InventoryTransport',
        tableName: 'submission',
        timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InventoryTransports');
  }
};