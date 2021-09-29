'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Member.hasMany(models.Order, {
        foreignKey: 'memberId',
      })
    }
  }
  Member.init(
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      level: DataTypes.ENUM('normal', 'vip'),
      address: DataTypes.STRING(512),
      phone: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Member',
    }
  )
  return Member
}
