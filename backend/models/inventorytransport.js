// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class InventoryTransport extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   InventoryTransport.init({
//     name: DataTypes.STRING,
//     trip: DataTypes.STRING,
//     start: DataTypes.STRING,
//     other1: DataTypes.STRING,
//     end: DataTypes.STRING,
//     other2: DataTypes.STRING,
//     stock: DataTypes.INTEGER,
//     last8: DataTypes.STRING,
//     gas: DataTypes.BOOLEAN,
//     gas_amount: DataTypes.STRING,
//     toll: DataTypes.INTEGER
//   }, {
//     sequelize,
//     modelName: 'InventoryTransport',
//   });
//   return InventoryTransport;
// };