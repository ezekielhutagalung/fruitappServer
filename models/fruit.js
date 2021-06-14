'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fruit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fruit.init(
    {
      name: DataTypes.STRING,

      HargaTotal: DataTypes.INTEGER,

      BeratTotal: DataTypes.FLOAT,
      HargaPerKg: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Fruit',
      hooks: {
        beforeCreate: (instance) => {
          instance.BeratTotal = instance.BeratTotal / 1000
        },
        beforeCreate: (instance) => {
          instance.HargaPerKg = instance.HargaTotal / instance.BeratTotal
        },
      },
    }
  )
  return Fruit
}
