const db = require('../models')
const { FAQ } = db
const createError = require('http-errors')


const faqController = {
  getAll: async (req, res, next) => {
    try {
      const data = await FAQ.findAll()
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get FAQ fail'))
    }
  }
}

module.exports = faqController
