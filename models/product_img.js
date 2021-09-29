'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product_img extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product_img.belongsTo(models.Product, {
        foreignKey: 'productId',
      })
    }
  }
  Product_img.init(
    {
      productId: DataTypes.INTEGER,
      imgUrlSm: DataTypes.TEXT,
      imgUrlMd: DataTypes.TEXT,
      imgUrlLg: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Product_img',
    }
  )
  return Product_img
}
