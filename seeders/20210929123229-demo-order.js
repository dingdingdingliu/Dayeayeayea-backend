'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [
      {
        memberId: 1,
        status: '處理中',
        isDeleted: 0,
        orderAddress: '台北市文山區指南路二段64號',
        orderName: '劉叮叮',
        orderEmail: 'jj@gamil.com',
        orderPhone: '0987654321',
        payment: '信用卡',
        shipping: '宅配',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberId: 2,
        status: '已出貨',
        isDeleted: 0,
        orderAddress: '台北市中正區忠孝西路一段118號',
        orderName: '林賈姬',
        orderEmail: 'hh@gamil.com',
        orderPhone: '0912345678',
        payment: '貨到付款',
        shipping: '宅配',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberId: 3,
        status: '已取消',
        isDeleted: 0,
        orderAddress: '台北市松山區南京東路四段2號',
        orderName: 'Chris Martin',
        orderEmail: 'coldplay@gamil.com',
        orderPhone: '0911333555',
        payment: '信用卡',
        shipping: '宅配',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        memberId: 4,
        status: '已完成',
        isDeleted: 0,
        orderAddress: '新北市中和區中山路2段64巷36號7樓',
        orderName: '杜振熙',
        orderEmail: 'softlipa@gamil.com',
        orderPhone: '0922444666',
        payment: '貨到付款',
        shipping: '宅配',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
