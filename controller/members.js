const db = require('../models')
const { Member, Order } = db

const bcrypt = require('bcrypt')
const SALTROUNDS = Number(process.env.SALTROUNDS || 10)
const { createToken } = require('../utils/auth')
const createError = require('http-errors')


const MembersController = {
  login: async (req, res, next) => {
    const { username, password } = req.body

    try {
      const user = await Member.findOne({
        where: {
          username,
        }
      })
      if (!user) return next(createError(401, 'Login Fail'))

      const isValid = await bcrypt.compare(password, user.password)
      if (isValid) {
        const { id, email, level, fullname, address, phone } = user
        const token = createToken({ id, username, email, level, fullname, address, phone })
    
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
  getAll: async (req, res, next) => {
    try {
      const data = await Member.findAll({
        include : Order
      })
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get members fail'))
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params
    const { memberId } = req.auth
    const where = id ? { id } : { id: memberId }

    try {
      const data = await Member.findOne({
        where,
        attributes: ['id', 'fullname', 'username', 'email', 'address', 'phone', 'level'],
        include : Order
      })
      if (data) {
        return res.status(200).json({
          ok: 1,
          data
        })
      }
      console.log(data)
      return next(createError(401, 'Get member fail'))
      
    } catch (error) {
      console.log(error);
      return next(createError(401, 'Get member fail'))
    }
  },
  addOne: async (req, res, next) => {
    const { 
      fullname,
      username,
      password,
      email,
      level,
      address,
      phone,
    } = req.body

    try {
      const hashPassword = bcrypt.hashSync(password, SALTROUNDS)
      await Member.create({
        fullname,
        username,
        password: hashPassword,
        email,
        level,
        address,
        phone,
      })
      return res.status(200).json({
        ok: 1,
        message: 'Register Success',
      })

    } catch (error) {
      return next(createError(401, 'Register Fail'))
    }
  },
  updateOne: async (req, res, next) => {
    const { id } = req.params
    const { memberId, role } = req.auth
    const where = id ? { id } : { id: memberId }
    const { 
      fullname,
      level,
      password,
      address,
      phone,
    } = req.body

    try {
      const _member = await Member.findOne({ where })
      const _password = password ? bcrypt.hashSync(password, SALTROUNDS) : _member.password
      const bodyData = {
        id,
        fullname,
        password: _password,
        address,
        phone,
      }
      if (role) bodyData['level'] = level
      await _member.update(bodyData)

      return res.status(200).json({
        ok: 1,
        message: 'Update Success'
      })

    } catch (error) {
      console.log(error);
      return next(createError(401, 'Update Fail'))
    }

  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const _member = await Member.findByPk(id)
      _member.destroy()
  
      return res.status(200).json({
        ok: 1,
        message: 'Delete Success',
      })
      
    } catch (error) {
      return next(createError(401, message || 'Delete Fail'))
    }
  },
}

module.exports = MembersController