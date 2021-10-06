const express = require('express')
const router = express.Router()
const Articles = require('../controller/articles')


router.get('/', Articles.getAll)
router.get('/:id([0-9]+)', Articles.getOne)

module.exports = router
