'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Product_img, {
        foreignKey: 'productId',
      })
      Product.hasOne(models.Order_item, {
        foreignKey: 'productId',
      })
    }
  }
  Product.init(
    {
      name: DataTypes.STRING(512),
      price: DataTypes.INTEGER,
      discountPrice: DataTypes.INTEGER,
      category: DataTypes.ENUM(
        'home',
        'apparel',
        'kitchenware',
        'food',
        'stationery',
        'outdoor'
      ),
      quantity: DataTypes.INTEGER,
      status: DataTypes.ENUM('on', 'off'),
      shortDesc: DataTypes.STRING(512),
      longDesc: DataTypes.TEXT,
      article: DataTypes.ENUM('dining', 'fragrance', 'camping', 'null'),
      isDeleted: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  )
  return Product
}
