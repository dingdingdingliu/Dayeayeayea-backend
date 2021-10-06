const db = require('../models')
const { Article } = db
const createError = require('http-errors')

const articlesController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Article.findAll()
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get article fail'))
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await Article.findByPk(id)
      if (data) {
        return res.status(200).json({
          ok: 1,
          data
        })
      }
      return next(createError(401, 'Get article fail'))

    } catch (error) {
      return next(createError(401, 'Get article fail'))
    }
  }
}

module.exports = articlesController