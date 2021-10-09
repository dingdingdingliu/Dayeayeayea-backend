const db = require('../models')
const { Product, Product_img } = db
const { Op } = require("sequelize")
const createError = require('http-errors')
const perPageProducts = Number(process.env.PER_PAGE_PRODUCTS) || 5


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
            },
            isDeleted: 0
          },
          include : Product_img
        })
      } else {
        data = await Product.findAll({
          where: {
            isDeleted: 0
          },
          include : Product_img,
        })
      }
  
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      console.log(error)
      return next(createError(401, 'Get products fail'))
    }
  },
  getByPage: async (req, res, next) => { 
    const page = Number(req.params.page)

    try {
      const _products = await Product.findAll({
        where: {
          isDeleted: 0
        },
        include : Product_img
      })
      const totalPage = Math.ceil(_products.length / perPageProducts)
      if (page > totalPage) return next(createError(401, 'Exceeded the maximum number of pages'))

      const data = _products.slice((page - 1) * perPageProducts, (page - 1) * perPageProducts + perPageProducts)

      return res.status(200).json({
        ok: 1,
        type: 'All',
        currentPage: page,
        totalPage,
        perPageProducts,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get products fail'))
    }
  },
  getByCategory: async (req, res, next) => {
    const { category, page } = req.params

    try {
      const _products = await Product.findAll({
        where: {
          category,
          isDeleted: 0
        },
        include : Product_img
      })
      if (!page) {
        return res.status(200).json({
          ok: 1,
          data: _products,
        })
      }

      const _page = Number(page)
      const totalPage = Math.ceil(_products.length / perPageProducts)
      if (_page > totalPage) return next(createError(401, 'Exceeded the maximum number of pages'))

      const _data = _products.slice((_page - 1) * perPageProducts, (_page - 1) * perPageProducts + perPageProducts)

      return res.status(200).json({
        ok: 1,
        type: 'category',
        currentPage: _page,
        totalPage,
        perPageProducts,
        data: _data
      })

    } catch (error) {
      return next(createError(401, 'Get product fail'))
    }
  },
  getByArticle: async (req, res, next) => {
    const { article, page } = req.params

    try {
      const _products = await Product.findAll({
        where: {
          article,
          isDeleted: 0
        },
        include : Product_img
      })
      if (!page) {
        return res.status(200).json({
          ok: 1,
          data: _products,
        })
      }

      const _page = Number(page)
      const totalPage = Math.ceil(_products.length / perPageProducts)
      if (_page > totalPage) return next(createError(401, 'Exceeded the maximum number of pages'))

      const _data = _products.slice((_page - 1) * perPageProducts, (_page - 1) * perPageProducts + perPageProducts)

      return res.status(200).json({
        ok: 1,
        type: 'category',
        currentPage: _page,
        totalPage,
        perPageProducts,
        data: _data
      })
      
    } catch (error) {
      return next(createError(401, 'Get product fail'))
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params
    console.log(id)

    try {
      const data = await Product.findOne({
        where: { id },
        include : Product_img
      })
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
      imgsData
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
        Product_imgs: imgsData
      }, {
        include : Product_img
      })


      if (_product) {
        return res.status(201).json({
          ok: 1,
          message: 'Add product success',
        })
      }
      return next(createError(401, 'Add product fail'))
  
    } catch (error) {
      console.log(error)
      return next(createError(401, 'Add product fail'))
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
      imgsData
    } = req.body

    try {
      const _product = await Product.findOne({
        where: { id },
        include : Product_img
      })

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
        Product_imgs: imgsData
      }, {
        include : Product_img
      })

      return res.status(200).json({
        ok: 1,
        message: 'Update product success'
      })

    } catch (error) {
      return next(createError(401, 'Update product fail'))
    }
    
  },
  updateImgs: async (req, res, next) => {
    const { id } = req.params
    const {
      productId, 
      imgUrlSm,
      imgUrlMd,
      imgUrlLg
    } = req.body

    try {
      const _product_img = await Product_img.findByPk(id)

      await _product_img.update({
        id,
        productId,
        imgUrlSm,
        imgUrlMd,
        imgUrlLg
      })

      return res.status(200).json({
        ok: 1,
        message: 'Update product_imgs success'
      })

    } catch (error) {
      return next(createError(401, 'Update product_imgs fail'))
    }
  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params
    try {
      const _product = await Product.findByPk(id)
      await _product.update({
        isDeleted: true
      })
  
      return res.status(200).json({
        ok: 1,
        message: 'Delete product success',
      })

    } catch (error) {
      return next(createError(401, 'Delete product fail'))
    }
  },
  deleteImgs: async (req, res, next) => {
    const { id } = req.params
    try {
      const _product_img = await Product_img.findByPk(id)
      await _product_img.destroy()
  
      return res.status(200).json({
        ok: 1,
        message: 'Delete product_imgs success',
      })

    } catch (error) {
      return next(createError(401, 'Delete product_imgs fail'))
    }
  }
}

module.exports = ProductsController