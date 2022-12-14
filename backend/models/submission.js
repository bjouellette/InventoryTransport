'use strict';
// const { DataTypes, sequelize } = require('sequelize');
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
//     class Submission extends Model {}
// } 
class Submission extends Model {}
Submission.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            trip: {
                type: DataTypes.STRING,
                allowNull: true
            },
            start: {
                type: DataTypes.STRING,
                allowNull: false
            },
          
            end: {
                type: DataTypes.STRING,
                allowNull: false
            },
            keytag: {
                type: DataTypes.STRING,
                allowNull: false
            },
            stock: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last8: {
                type: DataTypes.STRING,
                allowNull: false
            },
            gas: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
       
            toll: {
                type: DataTypes.INTEGER,
                allowNull: true
          }
        }, {
            sequelize,
            modelName: 'Submission',
            tableName: 'submissions',
            timestamps: false
          });

return Submission; 
}
    
