const express = require('express')
const router = express.Router()
const Products = require('../controller/products')
const { checkAuth } = require('../middlewares/authHandler')


// 搜尋商品 ?search=keyword
router.get('/', Products.getAll)
router.get('/:id([0-9]+)', Products.getOne)
router.get('/page/:page([0-9]+)', Products.getByPage)
router.get('/category/:category', Products.getByCategory)
router.get('/article/:article', Products.getByArticle)
router.post('/', checkAuth, Products.addOne)
router.patch('/:id([0-9]+)', checkAuth, Products.updateOne)
router.delete('/:id([0-9]+)', checkAuth, Products.deleteOne)

module.exports = router
