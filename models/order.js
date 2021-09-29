'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Member, {
        foreignKey: 'memberId',
      })
      Order.hasMany(models.Message, {
        foreignKey: 'orderId',
      })
      Order.belongsToMany(models.Product, {
        through: models.Order_item,
        foreignKey: 'orderId',
      })
    }
  }
  Order.init(
    {
      memberId: DataTypes.INTEGER,
      status: DataTypes.ENUM('處理中', '已出貨', '已取消', '已完成'),
      isDeleted: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
