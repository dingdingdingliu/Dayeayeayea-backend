'use strict'

const { isNull } = require('util')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        orderId: 2,
        memberId: 2,
        adminId: null,
        content: '請問大約何時會寄出呢?謝謝',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        memberId: null,
        adminId: 1,
        content: '您好，下週一就會寄出了，屆時再請您留意簡訊通知喔!謝謝。',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 2,
        memberId: 2,
        adminId: null,
        content: '好的，謝謝你',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        memberId: 4,
        adminId: null,
        content: '不好意思東西好像寄錯了耶',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        memberId: 4,
        adminId: null,
        content: '啊抱歉，是我搞錯了',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        orderId: 4,
        memberId: null,
        adminId: 2,
        content:
          '您好，謝謝您的購買，如果有問題歡迎隨時聯繫我們，或撥打客服電話，謝謝。',
        isDeleted: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {})
  },
}
