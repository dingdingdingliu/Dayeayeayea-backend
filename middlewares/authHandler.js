const { verifyToken, getUserByToken } = require('../utils/auth')
const createError = require('http-errors')


const checkAuth = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization === undefined || authorization.split(' ')[0] !== 'Bearer') {
    return next(createError(401, 'Error in authorization format'))
  }
  const token = authorization.split(' ')[1]
  try {
    const verifyTokenResult = verifyToken(token)
    if (verifyTokenResult instanceof Error) {
      return next(createError(401, 'Access token not provided'))
    }
    const { id, username, email } = getUserByToken(authorization.split(' ')[1])
    req.auth = {
      memberId: id,
      username,
      email,
    }

  } catch (err) {
    return next(createError(401, 'Error token is revoked'))
  }
  next()
}


const checkAdmin = (req, res, next) => {
  const { authorization } = req.headers
  if (authorization === undefined || authorization.split(' ')[0] !== 'Bearer') throw Error

  const token = authorization.split(' ')[1]
  try {
    const verifyTokenResult = verifyToken(token)
    if (verifyTokenResult instanceof Error) throw Error
    const { username, role } = getUserByToken(authorization.split(' ')[1])

    if (!username || role !== 'supervisor') throw Error
    req.auth = {
      username,
      role
    }
  } catch (err) {
    return next(createError(401, 'Permission not granted'))
  }
  next()
}


module.exports = {
  checkAuth,
  checkAdmin
}
