const db = require('../models')
const { Product } = db
const { Op } = require("sequelize")
const createError = require('http-errors')


const ProductsController = {
  getAll: async (req, res, next) => {
    const { search } = req.query
    
    let data = null
    try {
      if (search) {
        data = await Product.findAll({
          where: {
            name: {
              [Op.like]: `%${search}%`
            }
          }
        })
      } else {
        data = await Product.findAll()
      }
  
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get products fail'))
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params

    try {
      const data = await Product.findByPk(id)
      if (!data) next(createError(401, 'Get product fail'))
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get product fail'))
    }
  },
  addOne: async (req, res, next) => {
    const { 
      name,
      price,
      discountPrice,
      category,
      quantity,
      status,
      shortDesc,
      longDesc,
      article,
      isDeleted,
    } = req.body

    try {
      const _product = await Product.create({
        name,
        price,
        discountPrice,
        category,
        quantity,
        status,
        shortDesc,
        longDesc,
        article,
        isDeleted,
      })

      if (_product) {
        return res.status(201).json({
          ok: 1,
          message: 'Add product success',
        })
      }
      return next(createError(401, 'Add product fail'))
  
    } catch (error) {
      const { message } = error.errors[0]
      return next(createError(401, message || 'Add product fail'))
    }
  },
  updateOne: async (req, res, next) => {
    const { id } = req.params
    const { 
      name,
      price,
      discountPrice,
      category,
      quantity,
      status,
      shortDesc,
      longDesc,
      article,
      isDeleted,
    } = req.body

    try {
      const _product = await Product.findByPk(id)

      await _product.update({
        id,
        name,
        price,
        discountPrice,
        category,
        quantity,
        status,
        shortDesc,
        longDesc,
        article,
        isDeleted,
      })

      return res.status(200).json({
        ok: 1,
        message: 'Update product success'
      })

    } catch (error) {
      const { message } = error.errors[0]
      return next(createError(401, message || 'Update product fail'))
    }
    
  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params
    try {
      const _product = await Product.findByPk(id)
      _product.destroy()
  
      return res.status(200).json({
        ok: 1,
        message: 'Delete product success',
      })

    } catch (error) {
      return next(createError(401, 'Delete product fail'))
    }
  },
  getByCategory: async (req, res, next) => {
    const { category } = req.params

    try {
      const _products = await Product.findAll({
        where: {
          category
        }
      })
      // return _products Array
      return res.status(200).json({
        ok: 1,
        data: _products
      })

    } catch (error) {
      return next(createError(401, 'Get product fail'))
    }
  },
  getByArticle: async (req, res, next) => {
    const { article } = req.params

    try {
      const _products = await Product.findAll({
        where: {
          article
        }
      })
      // return _products Array
      return res.status(200).json({
        ok: 1,
        data: _products
      })
      
    } catch (error) {
      return next(createError(401, 'Get product fail'))
    }
  }
}

module.exports = ProductsController