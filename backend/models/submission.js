'use strict';
const {
    Model
} = require('sequelize');
const { DataTypes } = require('sequelize/types');
module.exports = (sequelize, DataTypes) => {
    class Submission extends Model {
        static associate(models) {}
    }}
Submission.init({
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
            other1: {
                type: DataTypes.STRING
            },
            end: {
                type: DataTypes.STRING,
                allowNull: false
            },
            other2: {
                type: DataTypes.STRING
            },
            stock: {
                type: DataTypes.INTEGER,
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
            gas_amount: {
                type: DataTypes.STRING
            },
            toll: {
                type: DataTypes.INTEGER
          }
        }, {
            sequelize,
            modelName: 'Submission',
          });
          Submission;