const express = require('express')
const createError = require('http-errors')
const logger = require('./middlewares/logger')
const corsHandler = require('./middlewares/corsHandler')
const errorHandler = require('./middlewares/errorHandler')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./config/swagger.yaml')

const articlesRouter = require('./routes/articles')
const membersRouter = require('./routes/members')
const ordersRouter = require('./routes/orders')
const productsRouter = require('./routes/products')
const adminRouter = require('./routes/admin')
const faqController = require('./controller/faq')


const app = express()
const port = process.env.PORT || 5000

app.use(logger)
app.use(corsHandler)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/articles', articlesRouter)
app.use('/members', membersRouter)
app.use('/orders', ordersRouter)
app.use('/products', productsRouter)
app.use('/faq', faqController.getAll)
app.use('/admin', adminRouter)

if (process.env.NODE_ENV === 'development') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

app.use(/\//, (req, res) => res.json({ ok: 1, message: 'Welcome DAYEAYEAYEA' }))
app.use('/*', (req, res, next) => next(createError(404)))
app.use(errorHandler)

app.listen(port, () => console.log(`DAYEAYEAYEA app listening on port ${port}!`))
