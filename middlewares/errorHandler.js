const errorHandler = (err, req, res, next) => {
  err.response = {
    ok: 0,
    message: err.message || 'Internal Server Error',
  };
  return res.status(err.status || 500).json(err.response);
}

module.exports = errorHandler
