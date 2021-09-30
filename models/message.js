'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Order, {
        foreignKey: 'orderId',
      })
      Message.belongsTo(models.Member, {
        foreignKey: 'memberId',
      })
      Message.belongsTo(models.Admin, {
        foreignKey: 'adminId',
      })
    }
  }
  Message.init(
    {
      orderId: DataTypes.INTEGER,
      memberId: DataTypes.INTEGER,
      adminId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      isDeleted: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Message',
    }
  )
  return Message
}
