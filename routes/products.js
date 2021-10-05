const express = require('express')
const router = express.Router()
const Products = require('../controller/products')
const { checkAuth, checkUserId } = require('../middlewares/checkAuth')


// 搜尋商品 ?search=keyword
router.get('/', Products.getAll)
router.post('/', checkAuth, Products.addOne)
router.get('/:id([0-9]+)', Products.getOne)
router.patch('/:id([0-9]+)', checkAuth, Products.updateOne)
router.delete('/:id([0-9]+)', checkAuth, Products.deleteOne)
router.get('/category/:category', Products.getByCategory)
router.get('/article/:article', Products.getByArticle)


module.exports = router
