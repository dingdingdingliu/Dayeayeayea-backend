'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        username: 'admin01',
        password: bcrypt.hashSync('12345678', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin02',
        password: bcrypt.hashSync('12345678', saltRounds),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {})
  },
}
