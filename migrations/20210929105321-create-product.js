'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        unique: true,
        type: Sequelize.STRING(512),
      },
      price: {
        type: Sequelize.INTEGER,
      },
      discountPrice: {
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.ENUM(
          'home',
          'apparel',
          'kitchenware',
          'food',
          'stationery',
          'outdoor'
        ),
        defaultValue: 'home',
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.ENUM('on', 'off'),
        defaultValue: 'on',
      },
      shortDesc: {
        type: Sequelize.STRING(512),
      },
      longDesc: {
        type: Sequelize.TEXT,
      },
      article: {
        type: Sequelize.ENUM('dining', 'fragrance', 'camping', 'null'),
        defaultValue: 'null',
      },
      isDeleted: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products')
  },
}
