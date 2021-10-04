const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');

const articlesRouter = require('./routes/articles');
const membersRouter = require('./routes/members');
const ordersRouter = require('./routes/orders');
const productsRouter = require('./routes/products');

const app = express();
const port = process.env.PORT || 3001;

// view engine setup 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/articles', articlesRouter);
app.use('/members', membersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/', (req, res) => {
  const status = 200
  const message = 'Hello Welcome DAYEAYEAYEA'
  return res.status(status).json({status, message})
});

app.use('*', function(req, res, next) {
  next(createError(500));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
