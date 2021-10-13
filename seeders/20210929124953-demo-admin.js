'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admins', [
      {
        username: 'admin01',
        password: '$2a$12$qQm8773wSmcJMucub6CTZeXPTEx.I/MgZttjYxYHRcxJhZEBLBLvu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'admin02',
        password: '$2a$12$QvsURR7WE4iCghulvb3MauTDXrqJ5c0OyG4t6fdaEPCjQAJz/mY.O',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Admins', null, {})
  },
}
