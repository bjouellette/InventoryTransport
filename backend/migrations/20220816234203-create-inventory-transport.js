'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('submissions', {
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
        allowNull: true
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
        allowNull: true
      } 
    },
      {
        Sequelize,
        modelName: 'Submission',
        tableName: 'submissions',
        timestamps: false
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('InventoryTransports');
  }
};