const express = require('express')
const router = express.Router()
const Admin = require('../controller/admins')
const Orders = require('../controller/orders')
const { checkAdmin } = require('../middlewares/authHandler')


router.post('/login', Admin.login)
router.use(checkAdmin)
router.get('/orders', Orders.getAll)
router.post('/orders', Orders.addOne)
router.get('/orders/:id([0-9]+)', Orders.getOne)



module.exports = router
