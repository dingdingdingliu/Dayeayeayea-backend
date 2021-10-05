/**
request headers --> Authorization
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJuaWNrbmFtZSI6ImFkbWluIiwidHlwZSI6MSwiZW1haWwiOiJhZG1pbkAxNjMuY29tIiwiaWF0IjoxNTcyNzU3MjAzLCJleHAiOjE1NzI3NjA4MDN9
.f4hfN1IjU4E23Lo44N-2VLzc1qoyNu1oZg2iQreZTfU
*/
const { verifyToken, getUserId } = require('../utils/auth')


const checkAuth = (req, res, next) => {
  const { authorization } = req.headers
  if ( authorization === undefined || authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    return res.status(status).json({ status, message })
  }
  try {
    const verifyTokenResult = verifyToken(authorization.split(' ')[1])
    if (verifyTokenResult instanceof Error) {
      const status = 401
      const message = 'Access token not provided'
      return res.status(status).json({ status, message })
    }
    next()
  } catch (err) {
    const status = 401
    const message = 'Error token is revoked'
    res.status(status).json({ status, message })
  }
}


const checkUserId = (req, res, next) => {
  const { id } = req.params
  const { authorization } = req.headers
  const token = authorization.split(' ')[1]
  if (Number(id) !== getUserId(token)) {
    const status = 401
    const message = 'User don\'t have access'
    return res.status(status).json({ status, message })
  } 
  next()
}

module.exports = {
  checkAuth,
  checkUserId
}
