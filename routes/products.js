const express = require('express')
const router = express.Router()
const Products = require('../controller/products')
const createError = require('http-errors')


// 取得所有商品
// 搜尋商品 ?search=keyword
router.get('/', Products.getAll)
// 新增商品
router.post('/', Products.addOne)
// 取得單一商品
router.get('/:id([0-9]+)', Products.getOne)
// 編輯商品 (含上下架)
router.patch('/:id([0-9]+)', Products.updateOne)
// 刪除商品
router.delete('/:id([0-9]+)', Products.deleteOne)
// 取得分類商品
router.get('/category/:category', Products.getByCategory)
// 取得精選文章商品
router.get('/article/:article', Products.getByArticle)


module.exports = router
