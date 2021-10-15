'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Orders', 'orderAddress', {
        type: Sequelize.STRING(512)
      }),
      queryInterface.addColumn('Orders', 'orderName', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Orders', 'orderEmail', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Orders', 'orderPhone', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Orders', 'payment', {
        type: Sequelize.ENUM('信用卡', '貨到付款'),
        defaultValue: '信用卡'
      }),
      queryInterface.addColumn('Orders', 'shipping', {
        type: Sequelize.ENUM('宅配', '超商'),
        defaultValue: '宅配'
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Orders', 'orderAddress'),
      queryInterface.removeColumn('Orders', 'orderName'),
      queryInterface.removeColumn('Orders', 'orderEmail'),
      queryInterface.removeColumn('Orders', 'orderPhone'),
      queryInterface.removeColumn('Orders', 'payment'),
      queryInterface.removeColumn('Orders', 'shipping')
    ])
  }
}
