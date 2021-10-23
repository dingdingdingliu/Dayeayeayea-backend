const express = require('express')
const router = express.Router()
const Orders = require('../controller/orders')
const { checkAuth } = require('../middlewares/authHandler')


router.use(checkAuth)
router.post('/', Orders.addOne)
router.get('/me', Orders.getAllByUser)
router.get('/me/:ticket', Orders.getOneByTicket)
router.patch('/me/:ticket', Orders.updateOne)
router.patch('/me/:ticket/:action(cancel)', Orders.updateStatus)

module.exports = router
