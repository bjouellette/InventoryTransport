'use strict';
const {
    Model
} = require('sequelize');
const { DataTypes } = require('sequelize/types');
module.exports = (sequelize, DataTypes) => {
    class Submission extends Model {}
}

Submission.init({
            name: {
                DataTypes.STRING,
                allowNull: false
            },
            trip: {
                DataTypes.STRING,
                allowNull: false
            },
            start: {
                DataTypes.STRING,
                allowNull: false
            },
            other1: {
                DataTypes.STRING
            },
            end: {
                DataTypes.STRING,
                allowNull: false
            },
            other2: {
                DataTypes.STRING
            },
            stock: {
                DataTypes.INTEGER,
                allowNull: false
            },
            last8: {
                DataTypes.STRING,
                allowNull: false
            },
            gas: {
                DataTypes.BOOLEAN,
                allowNull: false
            },
            gas_amount: {
                DataTypes.STRING
            },
            toll: {
                DataTypes.INTEGER
          }, {
            sequelize,
            modelName: 'Submission',
          });
          return Submission;
        };
})