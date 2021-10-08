const express = require('express')
const router = express.Router()
const Members = require('../controller/members')
const { checkAuth } = require('../middlewares/authHandler')


router.get('/', async (req, res, next) => {
  res.json({
    data: {
      pass: 'ok'
    }
  })
})
router.post('/login', Members.login)

router.use(checkAuth)
router.get('/:id([0-9]+)', Members.getOne)
router.patch('/:id([0-9]+)', Members.updateOne)
router.delete('/:id([0-9]+)', Members.deleteOne)

module.exports = router
