const express = require('express')
const router = express.Router()
const Members = require('../controller/members')
const { checkAuth } = require('../middlewares/authHandler')


router.post('/login', Members.login)
router.post('/', Members.addOne)

router.use(checkAuth)
router.post('/check', (req, res, next) => res.status(200).json({ ok: 1 }))
router.get('/me', Members.getOne)
router.patch('/me', Members.updateOne)

module.exports = router
