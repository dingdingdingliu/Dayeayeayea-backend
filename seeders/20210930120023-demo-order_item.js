'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Order_items', [
      {
        productId: 3,
        orderId: 1,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        orderId: 1,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        orderId: 2,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 12,
        orderId: 2,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 18,
        orderId: 2,
        quantity: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        orderId: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        orderId: 3,
        quantity: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 13,
        orderId: 3,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 20,
        orderId: 4,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 16,
        orderId: 4,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Order_items', null, {})
  },
}
