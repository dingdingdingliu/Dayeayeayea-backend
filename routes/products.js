const express = require('express')
const router = express.Router()
const Products = require('../controller/products')


const categoryMatch = 'all|home|apparel|kitchenware|food|stationery|outdoor'
const articleMatch = 'null|dining|fragrance|camping'
// 搜尋商品 ?search=keyword
router.get('/', Products.getAll)
router.get('/:id([0-9]+)', Products.getOne)
router.get('/page/:page([1-9]|[1-9][0-9]+)', Products.getByPage)

router.get(`/category/all/:page([1-9]|[1-9][0-9])?`, Products.getByPage)
router.get(`/category/:category(${categoryMatch})/:page([1-9]|[1-9][0-9])?`, Products.getByCategory)
router.get(`/article/:article(${articleMatch})/:page([1-9]|[1-9][0-9]+)?`, Products.getByArticle)

module.exports = router
