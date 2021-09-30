'use strict'
const bcrypt = require('bcrypt')
const saltRounds = 10

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Members', [
      {
        fullname: '劉叮叮',
        username: 'dingdingliu',
        email: 'mumu123456@gmail.com',
        password: bcrypt.hashSync('dingding123', saltRounds),
        level: 'normal',
        address: null,
        phone: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: '柳承智',
        username: 'jackieeee',
        email: 'jackie123456@gmail.com',
        password: bcrypt.hashSync('jackie123', saltRounds),
        level: 'normal',
        address: '新竹市光復路二段101號',
        phone: '0987123456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: '珍妮特',
        username: 'janetcute',
        email: 'janetcute123456@gmail.com',
        password: bcrypt.hashSync('janet123', saltRounds),
        level: 'normal',
        address: '台北市大安區羅斯福路四段1號',
        phone: '0911234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: '神恩佐',
        username: 'enzolol',
        email: 'enzolol123456@gmail.com',
        password: bcrypt.hashSync('enzo123', saltRounds),
        level: 'normal',
        address: '台南市東區大學路1號',
        phone: '0988765432',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Members', null, {})
  },
}
