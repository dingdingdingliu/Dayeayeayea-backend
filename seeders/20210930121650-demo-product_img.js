'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Product_imgs', [
      {
        productId: 1,
        imgUrlSm:
          'https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1602409339188-95d178a611a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 1,
        imgUrlSm:
          'https://images.unsplash.com/photo-1499624412197-fdc740373527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1499624412197-fdc740373527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1499624412197-fdc740373527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        imgUrlSm:
          'https://images.unsplash.com/photo-1617351165968-835ea5778860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1617351165968-835ea5778860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1617351165968-835ea5778860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 2,
        imgUrlSm:
          'https://images.unsplash.com/photo-1617351165959-471f874b60a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1617351165959-471f874b60a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1617351165959-471f874b60a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        imgUrlSm:
          'https://images.unsplash.com/photo-1623826538345-192361e2d4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1623826538345-192361e2d4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1623826538345-192361e2d4cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 3,
        imgUrlSm:
          'https://images.unsplash.com/photo-1623537730966-ae1154a07fd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1623537730966-ae1154a07fd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1623537730966-ae1154a07fd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 4,
        imgUrlSm:
          'https://images.unsplash.com/photo-1557861537-0cb2daf501fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1557861537-0cb2daf501fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1557861537-0cb2daf501fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 5,
        imgUrlSm:
          'https://images.unsplash.com/photo-1625467150295-8eadf10ea64d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1625467150295-8eadf10ea64d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1625467150295-8eadf10ea64d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 6,
        imgUrlSm:
          'https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1597692493647-25bd4240a3f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=703&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 7,
        imgUrlSm:
          'https://images.unsplash.com/photo-1606914469101-89a1980027fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1606914469101-89a1980027fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1606914469101-89a1980027fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 8,
        imgUrlSm:
          'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 9,
        imgUrlSm:
          'https://images.unsplash.com/photo-1513082243229-8831438c7f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1513082243229-8831438c7f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1513082243229-8831438c7f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=790&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 10,
        imgUrlSm:
          'https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1622260614927-208cfe3f5cfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 11,
        imgUrlSm:
          'https://images.unsplash.com/photo-1598973161837-e72ec6b7fd9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1598973161837-e72ec6b7fd9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1598973161837-e72ec6b7fd9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 12,
        imgUrlSm:
          'https://images.unsplash.com/photo-1623783593139-f4f36b7bbb2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmclMjBwb2xlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=60',
        imgUrlMd:
          'https://images.unsplash.com/photo-1623783593139-f4f36b7bbb2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmclMjBwb2xlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        imgUrlLg:
          'https://images.unsplash.com/photo-1623783593139-f4f36b7bbb2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJla2tpbmclMjBwb2xlc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 13,
        imgUrlSm:
          'https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1524591431555-cc7876d14adf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=857&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 14,
        imgUrlSm:
          'https://images.unsplash.com/photo-1585686398360-075d6cd5dca1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1585686398360-075d6cd5dca1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1585686398360-075d6cd5dca1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=960&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 15,
        imgUrlSm:
          'https://images.unsplash.com/photo-1584628804776-81c4422437d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1584628804776-81c4422437d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1584628804776-81c4422437d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=919&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 16,
        imgUrlSm:
          'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1473186505569-9c61870c11f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 17,
        imgUrlSm:
          'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1491185841098-9ce20f966624?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 18,
        imgUrlSm:
          'https://images.unsplash.com/photo-1612367537720-0ddca2509f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1612367537720-0ddca2509f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1612367537720-0ddca2509f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 19,
        imgUrlSm:
          'https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 19,
        imgUrlSm:
          'https://images.unsplash.com/photo-1591632288574-a387f820a1ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1591632288574-a387f820a1ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1591632288574-a387f820a1ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 20,
        imgUrlSm:
          'https://images.unsplash.com/photo-1493710494541-43364cb47485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1493710494541-43364cb47485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1493710494541-43364cb47485?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 21,
        imgUrlSm:
          'https://images.unsplash.com/photo-1614674688937-407a267e4497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1614674688937-407a267e4497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1614674688937-407a267e4497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1010&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 22,
        imgUrlSm:
          'https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1612887726773-e64e20cf08fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 23,
        imgUrlSm:
          'https://images.unsplash.com/photo-1588271968087-4c51abe05afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1588271968087-4c51abe05afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1588271968087-4c51abe05afc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        productId: 24,
        imgUrlSm:
          'https://images.unsplash.com/photo-1551628723-952088378fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
        imgUrlMd:
          'https://images.unsplash.com/photo-1551628723-952088378fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
        imgUrlLg:
          'https://images.unsplash.com/photo-1551628723-952088378fd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Product_imgs', null, {})
  },
}
