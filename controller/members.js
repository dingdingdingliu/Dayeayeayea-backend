const db = require('../models')
const { Member } = db

const bcrypt = require('bcrypt')
const SALTROUNDS = Number(process.env.SALTROUNDS)
const { createToken } = require('../utils/auth')


const MembersController = {
  login: async (req, res) => {
    const { username, password } = req.body
    const user = await Member.findOne({
      where: {
        username,
      }
    })
    if (user) {
      const isValid = await bcrypt.compare(password, user.password)
      if (isValid) {
        const { id, email, level } = user
        const token = createToken({ username, id, email, level })
    
        return res.status(200).json({
          ok: 1,
          token
        })
      }
    }
    return res.status(200).json({
      ok: 0,
      message: 'Incorrect email or password'
    })
  },
  logout: async (req, res) => {
    res.status(200).json({ok: 1, message: "Sometimes you must close your eyes to see"});
  },
  getAll: async (req, res) => {
    const data = await Member.findAll()
    return res.status(200).json({
      ok: 1,
      data
    })
  },
  getOne: async (req, res) => {
    const { id } = req.params
    const data = await Member.findByPk(id)
    return res.status(200).json({
      ok: 1,
      data
    })
  },
  addOne: async (req, res) => {
    const { 
      fullname,
      username,
      password,
      email,
      level,
      address,
      phone,
    } = req.body

    const hashPassword = bcrypt.hashSync(password, SALTROUNDS)

    try {
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
      const { message } = error.errors[0]
      return res.status(200).json({
        ok: 0,
        message
      })
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params
    const { 
      fullname,
      username,
      password,
      email,
      level,
      address,
      phone,
    } = req.body

    const _member = await Product.findByPk(id)
    const hashPassword = bcrypt.hashSync(password, SALTROUNDS)

    try {
      await _member.update({
        id,
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
        message: 'Update Success'
      })
    } catch (error) {
      const { message } = error.errors[0]
      return res.status(200).json({
        ok: 0,
        message
      })
    }

  },
  deleteOne: async (req, res) => {
    const { id } = req.params
    const _member = await Member.findByPk(id)
    _member.destroy()

    return res.status(200).json({
      ok: 1,
      message: 'Delete Success',
    })
  },
}

module.exports = MembersController