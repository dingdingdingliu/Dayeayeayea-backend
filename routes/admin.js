const express = require('express')
const router = express.Router()
const Admin = require('../controller/admins')
const Members = require('../controller/members')
const Products = require('../controller/products')
const Orders = require('../controller/orders')
const { checkAdmin } = require('../middlewares/authHandler')


router.post('/login', Admin.login)
router.use(checkAdmin)

router.get('/members', Members.getAll)
router.get('/members/:id([0-9]+)', Members.getOne)
router.patch('/members/:id([0-9]+)', Members.updateOne)
router.delete('/members/:id([0-9]+)', Members.deleteOne)

router.get('/products/', Products.getAll)
router.post('/products/', Products.addOne)
router.get('/products/:id([0-9]+)', Products.getOne)
router.patch('/products/:id([0-9]+)', Products.updateOne)
router.delete('/products/:id([0-9]+)', Products.deleteOne)
router.patch('/products/imgs/:id([0-9]+)', Products.updateImgs)
router.delete('/products/imgs/:id([0-9]+)', Products.deleteImgs)

router.get('/orders', Orders.getAll)
router.get('/orders/:id([0-9]+)', Orders.getOne)
router.patch('/orders/:id([0-9]+)', Orders.updateOne)
router.patch('/orders/:id([0-9]+)/:action(normal|cancel|ship|complete)', Orders.updateStatus)
router.delete('/orders/:id([0-9]+)', Orders.deleteOne)

module.exports = router
