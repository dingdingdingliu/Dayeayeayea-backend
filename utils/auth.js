const jwt = require('jsonwebtoken')

const SECRET = process.env.JWT_SECRET
const expiresIn = process.env.JWT_EXPIRES

const createToken = (payload) =>  {
  return jwt.sign(payload, SECRET, { expiresIn })
}

const verifyToken = (token) => {
  return jwt.verify(token, SECRET, (err, decode) => {
      return decode !== undefined ? decode : err
    }
  )
}

const getUserByToken = (token) => {
  const user = jwt.verify(token, SECRET)
  return user
}


module.exports = {
  createToken,
  verifyToken,
  getUserByToken
}