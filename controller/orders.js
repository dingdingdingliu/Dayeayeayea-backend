const db = require('../models')
const { Order } = db
const createError = require('http-errors')


const orderController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Order.findAll()
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get orders fail'))
    }
  },
  getOne: async (req, res, next) => {
    const { id } = req.params
    const { memberId } = req.auth

    try {
      const data = await Order.findOne({
        where: {
          id,
          memberId
        }
      })
      if (data) {
        return res.status(200).json({
          ok: 1,
          data
        })
      }
      return next(createError(401, 'Get order fail'))

    } catch (error) {
      return next(createError(401, 'Get order fail'))
    }
  },
  getOneByUser: async (req, res, next) => {
    const { memberId } = req.auth

    try {
      const data = await Order.findAll({
        where: {
          memberId
        }
      })
  
      return res.status(200).json({
        ok: 1,
        data
      })

    } catch (error) {
      return next(createError(401, 'Get order fail'))
    }
  },
  addOne: async (req, res, next) => {
    const { memberId } = req.auth

    const { 
      status,
      isDeleted
    } = req.body

    try {
      const _order = await Order.create({
        memberId,
        status,
        isDeleted
      })

      if (_order) {
        return res.status(201).json({
          ok: 1,
          message: 'Add order success',
        })
      }
      return next(createError(401, 'Add order fail'))
  
    } catch (error) {
      return next(createError(401, 'Add order fail'))
    }
  },
  updateOne: async (req, res, next) => {
    const { id } = req.params
    const { memberId } = req.auth
    const { 
      status,
      isDeleted
    } = req.body

    try {
      const _order = await Order.findOne({
        where: {
          id,
          memberId
        }
      })
      await _order.update({
        memberId,
        status,
        isDeleted
      })
      return res.status(200).json({
        ok: 1,
        message: 'Update order success'
      })

    } catch (error) {
      return next(createError(401, 'Update order fail'))
    }
    
  },
  updateStatus: async (req, res, next) => {
    const { id, action } = req.params
    const { memberId } = req.auth
    const orderAction = {
      normal: '處理中',
      cancel: '已取消',
      ship: '已出貨',
      complete: '已出貨',
    }

    try {
      const _order = await Order.findOne({
        where: {
          id,
          memberId
        }
      })
      if (!_order) return next(createError(401, 'Update order status fail'))
      console.log(_order)

      await _order.update({
        status: orderAction[action]
      })

      return res.status(200).json({
        ok: 1,
        message: `Update order status to ${action}`
      })

    } catch (error) {
      return next(createError(401, 'Update order status fail'))
    }
    
  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params
    const { memberId } = req.auth

    try {
      const _order = await Order.findOne({
        where: {
          id,
          memberId
        }
      })
      await _order.update({
        isDeleted: true
      })
      return res.status(200).json({
        ok: 1,
        message: 'Update order success'
      })

    } catch (error) {
      return next(createError(401, 'Delete order fail'))
    }
  }
}

module.exports = orderController