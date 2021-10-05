const express = require('express')
const logger = require('morgan')
const createError = require('http-errors')
const errorHandler = require('./middlewares/errorHandler')

const articlesRouter = require('./routes/articles')
const membersRouter = require('./routes/members')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')

const app = express()
const port = process.env.PORT || 5000


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/articles', articlesRouter)
app.use('/members', membersRouter)
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)
app.use(/\//, (req, res, next) => {
  res.status(200).json({
    ok: 1,
    message: 'Hello Welcome DAYEAYEAYEA'
  })
})
app.use('/*', (req, res, next) => {
  next(createError(404))
})
app.use(errorHandler)

app.listen(port, () => {
  console.log(`DAYEAYEAYEA app listening on port ${port}!`)
})
