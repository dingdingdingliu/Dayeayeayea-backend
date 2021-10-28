const db = require('../models')
const { Product, Product_img } = db
const { Op } = require("sequelize")
const createError = require('http-errors')
const perPageProducts = Number(process.env.PER_PAGE_PRODUCTS) || 5


const ProductsController = {
  getAll: async (req, res, next) => {
    const { search } = req.query
    const where = { isDeleted: 0 }

    if (search) {
      const searchList = search.split('+').reduce((obj, str) => {
        if (str) obj.push({ [Op.like]: `%${str}%` })
        return obj
      }, [])
      where.name = { [Op.and]: searchList }
    }

    try {
      const data = await Product.findAll({
        where,
        include : [
          {
            model: Product_img,
            attributes: ['id','imgUrlSm', 'imgUrlMd', 'imgUrlLg']
          }
        ]
      })
  
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
    const { search } = req.query
    const where = { isDeleted: 0 }

    if (search) {
      const searchList = search.split('+').reduce((obj, str) => {
        if (str) obj.push({ [Op.like]: `%${str}%` })
        return obj
      }, [])
      where.name = { [Op.and]: searchList }
    }

    try {
      const _products = await Product.findAll({
        where,
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
        isDeleted: 0,
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
        where: { id }
      })

      await _product.update({
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
      })

      if (imgsData && imgsData.length > 0) {
        imgsData.map(async ({ id, imgUrlSm = '', imgUrlMd = '', imgUrlLg = '' }) => {
          const _imgs = await Product_img.findByPk(id)
          if (!_imgs) return next(createError(401, 'Update product fail'))
  
          await _imgs.update({
            imgUrlSm,
            imgUrlMd,
            imgUrlLg
          })
        })
      }

      return res.status(200).json({
        ok: 1,
        message: 'Update product success'
      })

    } catch (error) {
      console.log(error)
      return next(createError(401, 'Update product fail'))
    }
    
  },
  addImgs: async (req, res, next) => {
    const {
      productId, 
      imgUrlSm,
      imgUrlMd,
      imgUrlLg
    } = req.body

    const _product = await Product_img.findByPk(productId)
    if (!_product) {
      return next(createError(401, 'Not found product'))
    }
    try {
      const _product_img = await Product_img.create({
        productId,
        imgUrlSm,
        imgUrlMd,
        imgUrlLg
      })

      return res.status(200).json({
        ok: 1,
        message: 'Add product_imgs success',
        data: {
          id: _product_img.id,
          productId: _product_img.productId
        }
      })

    } catch (error) {
      return next(createError(401, 'Add product_imgs fail'))
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
      if (!_product_img) return next(createError(401, 'Update product_imgs fail'))

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