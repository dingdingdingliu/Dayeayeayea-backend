'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: '冬日香氛精選',
        content:
          '從居家到外出的個人風格都透過氣味畫龍點睛，生活中的時刻與場景經由(一直出現精油)香味的細節打造出各種不同的氛圍，讓日常生活即便重複著，也創造不一樣的心情。\n\n從居家到外出的個人風格都透過氣味畫龍點睛，生活中的時刻與場景經由(一直出現精油)香味的細節打造出各種不同的氛圍，讓日常生活即便重複著，也創造不一樣的心情。\n\n從居家到外出的個人風格都透過氣味畫龍點睛，生活中的時刻與場景經由(一直出現精油)香味的細節打造出各種不同的氛圍，讓日常生活即便重複著，也創造不一樣的心情。',
        imgUrl:
          'https://images.unsplash.com/photo-1589288956077-918faef27189?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '居家溫馨餐桌料理',
        content:
          '在居家成為主流的現在，在家創造和重視的人共享餐點的記憶吧，由風味豐富的食材飲品與品味餐具，打造溫暖放鬆的時光。我們也準備了幾道菜譜，希望能為您的餐桌點綴美好時刻。\n\n在居家成為主流的現在，在家創造和重視的人共享餐點的記憶吧，由風味豐富的食材飲品與品味餐具，打造溫暖放鬆的時光。我們也準備了幾道菜譜，希望能為您的餐桌點綴美好時刻。\n\n在居家成為主流的現在，在家創造和重視的人共享餐點的記憶吧，由風味豐富的食材飲品與品味餐具，打造溫暖放鬆的時光。我們也準備了幾道菜譜，希望能為您的餐桌點綴美好時刻。',
        imgUrl:
          'https://images.unsplash.com/photo-1616170687910-2edb17b633d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: '山海之間露營特輯',
        content:
          '忙碌的城市生活需要山海之間的心靈洗滌，可以三兩人間的療癒沉澱，或是呼朋引伴的熱鬧放鬆。我們也為您精選實用且具風格的露營用品，希望您能享有獨一無二的旅程。\n\n忙碌的城市生活需要山海之間的心靈洗滌，可以三兩人間的療癒沉澱，或是呼朋引伴的熱鬧放鬆。我們也為您精選實用且具風格的露營用品，希望您能享有獨一無二的旅程。\n\n忙碌的城市生活需要山海之間的心靈洗滌，可以三兩人間的療癒沉澱，或是呼朋引伴的熱鬧放鬆。我們也為您精選實用且具風格的露營用品，希望您能享有獨一無二的旅程。\n\n',
        imgUrl:
          'https://images.unsplash.com/photo-1526939615915-ba16b7ad9013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {})
  },
}
