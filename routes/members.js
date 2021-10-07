const express = require('express')
const router = express.Router()
const Members = require('../controller/members')
const { checkAuth } = require('../middlewares/authHandler')


router.post('/login', Members.login)
router.post('/', Members.addOne)

router.use(checkAuth)
router.get('/', Members.getAll)
router.get('/:id([0-9]+)', checkAuth, Members.getOne)
router.patch('/:id([0-9]+)', checkAuth, Members.updateOne)
router.delete('/:id([0-9]+)', checkAuth, Members.deleteOne)

module.exports = router
