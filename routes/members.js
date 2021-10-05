const express = require('express')
const router = express.Router()
const Members = require('../controller/members')
const createError = require('http-errors')
const { checkAuth, checkUserId } = require('../middlewares/checkAuth')


// 取得所有會員資料	GET	/members
router.get('/', Members.getAll)
// 註冊	POST	/members/register	
router.post('/', Members.addOne)
// 登入	POST	/members/login	
router.post('/auth/login', Members.login)
// 登出 *JWT?	GET	/members/logout	
router.get('/auth/logout', Members.logout)
// 取得自己的會員資料	GET	/members/me	
router.get('/:id([0-9]+)', checkAuth, checkUserId, Members.getOne)
// 修改自己的會員資料	PATCH	/members/me	
router.patch('/:id([0-9]+)', checkAuth, checkUserId, Members.updateOne)


// TODO 取得自己的會員資料	
router.delete('/:id([0-9]+)', Members.deleteOne)

module.exports = router
