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
  },
  addOne: async (req, res, next) => {
    const { 
      title,
      content,
      imgUrl
    } = req.body

    try {
      const article = await Article.create({
        title,
        content,
        imgUrl
      })
      if (article) {
        return res.status(201).json({
          ok: 1,
          message: 'Add article success',
        })
      }
      return next(createError(401, 'Add article fail'))
  
    } catch (error) {
      return next(createError(401, 'Add article fail'))
    }
  },
  updateOne: async (req, res, next) => {
    const { id } = req.params

    const { 
      title,
      content,
      imgUrl
    } = req.body

    try {
      const article = await Article.findByPk(id)
      await article.update({
        title,
        content,
        imgUrl
      })
      return res.status(200).json({
        ok: 1,
        message: 'Update article success'
      })

    } catch (error) {
      return next(createError(401, 'Update article fail'))
    }
    
  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const article = await Article.findByPk(id)
      article.destroy()

      return res.status(200).json({
        ok: 1,
        message: 'Delete article success'
      })

    } catch (error) {
      return next(createError(401, 'Delete article fail'))
    }
  }
}

module.exports = articlesController