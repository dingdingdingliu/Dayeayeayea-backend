const db = require('../models')
const { Admin, Member, Order } = db

const bcrypt = require('bcrypt')
const { createToken } = require('../utils/auth')
const createError = require('http-errors')


const AdminsController = {
  login: async (req, res, next) => {
    const { username, password } = req.body

    try {
      const user = await Admin.findOne({
        where: {
          username,
        }
      })
      if (!user) return next(createError(401, 'Login Fail'))

      const isValid = await bcrypt.compare(password, user.password)
      if (isValid) {
        const token = createToken({ username, role: 'supervisor' })
    
        return res.status(200).json({
          ok: 1,
          token
        })
      }
      return next(createError(401, 'Incorrect email or password'))

    } catch (error) {
      return next(createError(401, 'Login Fail'))
    }
  },
  checkLogin: async (req, res, next) => {
    const { username, role } = req.auth

    try {
      const data = await Admin.findOne({
        where: { username }
      })
      if (data && role === 'supervisor') {
        return res.status(200).json({
          ok: 1,
          message: 'You are real supervisor !!!'
        })
      }
      console.log(data)
      return next(createError(401, 'Who are you ?!'))
      
    } catch (error) {
      console.log(error);
      return next(createError(401, 'Who are you ?!'))
    }
  }
}

module.exports = AdminsController