const db = require('../models')
const { Order, Order_item, Member, Product, Product_img, Message, Admin } = db
const createError = require('http-errors')


const orderController = {
  getAll: async (req, res, next) => {
    try {
      const data = await Order.findAll({
        include: [
          {
            model: Member,
            attributes: ['fullname', 'username', 'email', 'address', 'phone']
          },
          {
            model: Order_item,
            attributes: ['productId', 'quantity'],
            include: [
              {
                model: Product,
                include: [
                  {
                    model: Product_img,
                    attributes: ['id','imgUrlSm', 'imgUrlMd', 'imgUrlLg']
                  }
                ]
              }
            ]
          },
          {
            model: Message,
            include: [
              {
                model: Member,
                attributes: ['fullname', 'username', 'email', 'address', 'phone']
              },
              {
                model: Admin,
                attributes: ['username']
              }
            ]
          }
        ]
      })
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
    const { memberId, role } = req.auth
    const where = role ? { id } : { id, memberId }

    try {
      const data = await Order.findOne({ 
        where,
        include: [
          {
            model: Member,
            attributes: ['fullname', 'username', 'email', 'address', 'phone']
          },
          {
            model: Order_item,
            attributes: ['productId', 'quantity'],
            include: [
              {
                model: Product,
                include: [
                  {
                    model: Product_img,
                    attributes: ['id','imgUrlSm', 'imgUrlMd', 'imgUrlLg']
                  }
                ]
              }
            ]
          },
          {
            model: Message,
            include: [
              {
                model: Member,
                attributes: ['fullname', 'username', 'email', 'address', 'phone']
              },
              {
                model: Admin,
                attributes: ['username']
              }
            ]
          }
        ]
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
    console.log('Hi ', memberId);

    try {
      const data = await Order.findAll({
        where: {
          memberId
        },
        include: [
          {
            model: Member,
            attributes: ['fullname', 'username', 'email', 'address', 'phone']
          },
          {
            model: Order_item,
            attributes: ['productId', 'quantity'],
            include: [
              {
                model: Product,
                include: [
                  {
                    model: Product_img,
                    attributes: ['id','imgUrlSm', 'imgUrlMd', 'imgUrlLg']
                  }
                ]
              }
            ]
          },
          {
            model: Message,
            include: [
              {
                model: Member,
                attributes: ['fullname', 'username', 'email', 'address', 'phone']
              },
              {
                model: Admin,
                attributes: ['username']
              }
            ]
          }
        ]
      })
      
      if (data) {
        return res.status(200).json({
          ok: 1,
          data
        })
      }
      return next(createError(401, 'Get order fail'))

    } catch (error) {
      console.log(error)
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
    const { memberId, role } = req.auth
    const where = role ? { id } : { id, memberId }

    const { 
      status,
      isDeleted
    } = req.body

    try {
      const _order = await Order.findOne({ where })
      await _order.update({
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
    const { memberId, role } = req.auth
    const where = role ? { id } : { id, memberId }

    const orderAction = {
      normal: '處理中',
      cancel: '已取消',
      ship: '已出貨',
      complete: '已出貨',
    }

    try {
      const _order = await Order.findOne({ where })
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
    const { memberId, role } = req.auth
    const where = role ? { id } : { id, memberId }

    try {
      const _order = await Order.findOne({ where })
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
