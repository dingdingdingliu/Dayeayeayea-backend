const express = require('express')
const router = express.Router()
const Orders = require('../controller/orders')
const { checkAuth } = require('../middlewares/authHandler')


router.use(checkAuth)
router.post('/', Orders.addOne)
router.get('/me', Orders.getAllByUser)
router.get('/me/:id([0-9]+)', Orders.getOne)
router.patch('/me/:id([0-9]+)/:action(cancel)', Orders.updateStatus)

module.exports = router
