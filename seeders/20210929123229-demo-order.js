'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        memberId: 1,
        status: '處理中',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 2,
        status: '已出貨',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 3,
        status: '已取消',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        memberId: 4,
        status: '已完成',
        isDeleted: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  },
}
