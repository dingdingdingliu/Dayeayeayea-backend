const db = require('../models')
const { Product } = db
const { Op } = require("sequelize");

const ProductsController = {
  getAll: async (req, res) => {
    const { search } = req.query;
    
    let data = null
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
  },
  getOne: async (req, res) => {
    const { id } = req.params
    const data = await Product.findByPk(id)
    return res.status(200).json({
      ok: 1,
      data
    })
  },
  addOne: async (req, res) => {
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

    await Product.create({
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
      message: 'success',
    })

  },
  updateOne: async (req, res) => {
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

    res.status(200).json({
      ok: 1,
      data: _product
    })
  },
  deleteOne: async (req, res) => {
    const { id } = req.params
    const _product = await Product.findByPk(id)
    _product.destroy()

    res.status(200).json({
      ok: 1,
      message: 'success',
    })
  },
}


module.exports = ProductsController