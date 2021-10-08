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
        password: '$2b$10$gj5MrrTyPzF0bgbdPyKtjewFiplDUhAZdFLWlVEKYH/K7cLwiPmgO',
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
        password: '$2b$10$EDXUjndVPIdAPuqlU1267e9Lm3dFdmjjeqVcwn.d.QQWVTpJemIEW',
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
        password: '$2b$10$j8dp0jpoqQnOU4dETcftI.LN6.oQbgjCwSL9V3GK304BWofkxhLxC',
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
        password: '$2b$10$R2dRqT7O9IFEwOWmKl.oEOAxvgW0lRfF1Wu5RdO/J3LqD4sycN9xi',
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
