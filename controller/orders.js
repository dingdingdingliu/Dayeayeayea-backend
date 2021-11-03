const db = require('../models')
const { Order, Order_item, Member, Product, Product_img, Message, Admin } = db
const { serialNumber } = require('../utils/helper')
const createError = require('http-errors')


const orderController = {
  getAll: async (req, res, next) => {
    const { condition = 'active' } = req.params

    const option = {
      all: {},
      active: { isDeleted: 0 },
      archive: { isDeleted: 1 }
    }
    const where = option[condition]


    try {
      const data = await Order.findAll({
        where,
        include: [
          {
            model: Member,
            attributes: ['fullname', 'username', 'email', 'address', 'phone']
          },
          {
            model: Order_item,
            attributes: ['id', 'productId', 'quantity'],
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
  getOneById: async (req, res, next) => {
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
            attributes: ['id', 'productId', 'quantity'],
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
  getOneByTicket: async (req, res, next) => {
    const { ticket } = req.params
    const { memberId, role } = req.auth
    const where = role ? { ticketNo: ticket } : { ticketNo: ticket, memberId }

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
            attributes: ['id', 'productId', 'quantity'],
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
  getAllByUser: async (req, res, next) => {
    const { memberId } = req.auth

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
            attributes: ['id', 'productId', 'quantity'],
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
    const ticketNo = serialNumber()

    const { 
      status,
      isDeleted,
      subTotal,
      orderAddress,
      orderName,
      orderEmail,
      orderPhone,
      payment,
      shipping,
      orderItem
    } = req.body

    const productIdList = orderItem.map((item) => item.productId);
    const productsData = await Product.findAll({
      where: { id: { [Op.in]: productIdList } },
      include: User,
    }).then((products) =>
      products.map((product) => {
        let currentItem = sortedCartItems.find(
          (item) => item.ProductId === product.id
        );
        return {
          ProductId: product.id,
          product_name: product.name,
          product_category_id: product.ProductCategoryId,
          product_picture_url: product.picture_url,
          product_info: product.info,
          productOriginQuantity: product.quantity, // 商品數量
          product_quantity: currentItem.product_quantity, // 要買的數量
          product_price: product.price,
          product_delivery: product.delivery,
          seller_name: product.User.nickname,
          seller_email: product.User.email,
          seller_address: product.User.address,
        };
      })
    );

    try {
      await sequelize.transaction(async (t) => {
        const _order = await Order.create({
          memberId,
          ticketNo,
          status,
          isDeleted,
          subTotal,
          orderAddress,
          orderName,
          orderEmail,
          orderPhone,
          payment,
          shipping,
          Order_items: orderItem
        }, {
          include: Order_item
        }, { 
          transaction: t 
        })

        if (_order) {
          return res.status(201).json({
            ok: 1,
            ticketNo,
            message: 'Add order success',
          })
        }

        

        // 計算商品數量足夠否
        await Promise.all(
          productsData.map((productData) => {
            let stockQuantity = productData.productOriginQuantity; // 賣家的庫存數量
            let cartQuantity = productData.product_quantity; // 準備要買的數量
            console.log("商品 id:", productData.ProductId);
            console.log("賣家的庫存數量:", stockQuantity);
            console.log("準備要買的數量:", cartQuantity);

            // 數量不夠賣，就回傳錯誤跳出 transaction
            if (stockQuantity - cartQuantity < 0) {
              console.log("超賣錯誤:");
              throw new Error();
            }
            // 把要買的商品數量從賣家商品的數量中減去
            Product.update(
              { quantity: stockQuantity - cartQuantity },
              { where: { id: productData.ProductId } },
              { transaction: t }
            );
          })
        );

        return next(createError(401, 'Add order fail'))

      })
      

      
  
    } catch (error) {
      return next(createError(401, 'Add order fail'))
    }
  },
  updateOne: async (req, res, next) => {
    const { ticket } = req.params
    const { memberId, role } = req.auth
    const where = role ? { ticketNo: ticket } : { ticketNo: ticket, memberId }

    const { 
      status,
      isDeleted,
      orderAddress,
      orderName,
      orderEmail,
      orderPhone,
      payment,
      shipping,
      orderItem
    } = req.body

    try {
      const _order = await Order.findOne({ where })
      await _order.update({
        status,
        isDeleted,
        orderAddress,
        orderName,
        orderEmail,
        orderPhone,
        payment,
        shipping,
        Order_items: orderItem
      })

      if (orderItem && orderItem.length > 0) {
        orderItem.map(async ({ id, productId, quantity }) => {
          const _order_item = await Order_item.findByPk(id)
          if (!_order_item) return next(createError(401, 'Update order fail'))

          await _order_item.update({
            productId,
            quantity
          })
        })
      }

      return res.status(200).json({
        ok: 1,
        message: 'Update order success'
      })

    } catch (error) {
      return next(createError(401, 'Update order fail'))
    }
    
  },
  updateStatus: async (req, res, next) => {
    const { ticket, action } = req.params
    const { memberId, role } = req.auth
    const where = role ? { ticketNo: ticket } : { ticketNo: ticket, memberId }

    const orderAction = {
      normal: '處理中',
      cancel: '已取消',
      ship: '已出貨',
      complete: '已完成',
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
    const { ticket } = req.params
    const { memberId, role } = req.auth
    const where = role ? { ticketNo: ticket } : { ticketNo: ticket, memberId }

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
