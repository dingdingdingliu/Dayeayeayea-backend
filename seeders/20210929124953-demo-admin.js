'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        username: 'admin01',
        password: '$2b$10$ZYyrpzKeU2S0O8awe/kZweA3zDpz5ubzeN2w8cRjCmskaW9KRwoXm',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin02',
        password: '$2b$10$o6xFu5MRX2eCdjMUO9/ES.diJrdS1gHfTCJYEztsONRj6xTnhTRoq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {})
  },
}
