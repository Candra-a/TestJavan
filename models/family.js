'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
module.exports = (sequelize, DataTypes) => {
  class Family extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Family.init({
    name: DataTypes.STRING,
    father: DataTypes.STRING,
    mother: DataTypes.STRING,
    assets: DataTypes.ARRAY(DataTypes.TEXT),
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Family',
  });
  return Family;
};