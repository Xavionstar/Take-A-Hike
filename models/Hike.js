const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hike extends Model {}

Hike.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false,
          },

          difficulty: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          condition: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          max_altitude: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          length: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
         
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'hike',
      },
);


module.exports = Hike;