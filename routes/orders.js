const express = require('express')
const router = express.Router()
const Orders = require('../controller/orders')
const { checkAuth } = require('../middlewares/authHandler')


router.use(checkAuth)
router.get('/', Orders.getAll)
router.post('/', Orders.addOne)
router.get('/:id([0-9]+)', Orders.getOne)
router.get('/me', Orders.getOneByUser)
router.patch('/:id([0-9]+)', Orders.updateOne)
router.patch('/:id([0-9]+)/:action(normal|cancel|ship|complete)', Orders.updateStatus)
router.delete('/:id([0-9]+)', Orders.deleteOne)

module.exports = router
