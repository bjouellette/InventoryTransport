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
                allowNull: false
            },
            start: {
                type: DataTypes.STRING,
                allowNull: false
            },
            // other1: {
            //     type: DataTypes.STRING
            // },
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
            // gas_amount: {
            //     type: DataTypes.STRING
            // },
            toll: {
                type: DataTypes.INTEGER,
                allowNull: false
          }
        }, {
            sequelize,
            modelName: 'Submission',
            tableName: 'submissions',
            timestamps: false
          });

return Submission; 
}
    
