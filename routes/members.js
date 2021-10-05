const express = require('express')
const router = express.Router()
const Members = require('../controller/members')
const { checkAuth, checkUserId } = require('../middlewares/checkAuth')


router.post('/', Members.addOne)
router.post('/login', Members.login)
router.get('/', Members.getAll)
router.get('/:id([0-9]+)', checkAuth, checkUserId, Members.getOne)
router.patch('/:id([0-9]+)', checkAuth, checkUserId, Members.updateOne)
router.delete('/:id([0-9]+)', checkAuth, checkUserId, Members.deleteOne)


module.exports = router
