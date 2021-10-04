'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('FAQs', [
      {
        question: '一定要加入會員才能下單嗎？',
        answer: '對。為了方便您追蹤及管理訂單，請先加入會員再購買商品。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '忘記密碼怎麼辦？',
        answer:
          '您可以點選登入頁面的「忘記密碼」，系統就會傳送變更密碼的 email 給您。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '如何查詢我的訂單？',
        answer:
          '登入會員後，進入會員專區，即可在「我的訂單」查詢訂單詳細資訊。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '我的商品什麼時候會送到？',
        answer:
          '您可以在會員專區的「訂單紀錄」中查看訂單狀態。一般情況下，我們會在 5-7 個工作天內出貨，而商品會在出貨後的 3-5 個工作天到貨。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '如何辦理退貨？',
        answer: '不好意思，目前不提供退貨服務，請想清楚再購買，謝謝。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '下錯訂單了怎麼辦？',
        answer:
          '送出訂單後，您可以前往會員專區的「訂單紀錄」頁面查詢您的訂單。只要尚未出貨，您都可以直接取消訂單。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '我改名了，要去哪裡修改會員資料？',
        answer:
          '真的嗎？希望是個吉利的好名字。回答您的問題，您可以在會員專區的「會員資料」中修改個人資料。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: '太好買買太多怎麼辦？',
        answer:
          '請多買一點，我們會幫您升級成 VIP 會員，讓您享有生日購物金、特定商品優惠價以及運費減免等眾多優惠。',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('FAQs', null, {})
  },
}
