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
      })
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Orders', 'orderAddress'),
      queryInterface.removeColumn('Orders', 'orderName'),
      queryInterface.removeColumn('Orders', 'orderEmail'),
      queryInterface.removeColumn('Orders', 'orderPhone')
    ])
  }
}
