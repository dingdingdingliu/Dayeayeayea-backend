const { verifyToken, getUserId } = require('../utils/auth')
const createError = require('http-errors')


const checkAuth = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization === undefined || authorization.split(' ')[0] !== 'Bearer') {
    return next(createError(401, 'Error in authorization format'))
  }
  try {
    const verifyTokenResult = verifyToken(authorization.split(' ')[1])
    if (verifyTokenResult instanceof Error) {
      return next(createError(401, 'Access token not provided'))
    }
  } catch (err) {
    return next(createError(401, 'Error token is revoked'))
  }
  next()
}


const checkUserId = (req, res, next) => {
  const { id } = req.params
  const { authorization } = req.headers
  const token = authorization.split(' ')[1]

  if (Number(id) !== getUserId(token)) {
    return next(createError(401, 'User don\'t have access'))
  } 
  next()
}

module.exports = {
  checkAuth,
  checkUserId
}
