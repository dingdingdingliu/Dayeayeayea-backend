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
      Order.hasMany(models.Order_item, {
        foreignKey: 'orderId',
      })
      Order.hasMany(models.Message, {
        foreignKey: 'orderId',
      })
    }
  }
  Order.init(
    {
      memberId: DataTypes.INTEGER,
      ticketNo: DataTypes.STRING,
      status: DataTypes.ENUM('處理中', '已出貨', '已取消', '已完成'),
      isDeleted: DataTypes.INTEGER,
      orderAddress: DataTypes.STRING(512),
      orderName: DataTypes.STRING,
      orderEmail: DataTypes.STRING,
      orderPhone: DataTypes.STRING,
      payment: DataTypes.ENUM('信用卡', '貨到付款'),
      shipping: DataTypes.ENUM('宅配', '超商'),
    },
    {
      sequelize,
      modelName: 'Order',
    }
  )
  return Order
}
