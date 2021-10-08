const morgan = require('morgan')
const moment = require('moment-timezone')
const rt = require("file-stream-rotator")


morgan.token('date', (req, res, tz) => moment().tz(tz).format('HH:mm:ss'))
morgan.token('access', (req, res) => {
  if (req.auth) {
    const { memberId, username } = req.auth
    return `[{ member: ${memberId} username: ${username} }]`
  }
  return '[{ member: Guest }]'
})
morgan.format('ozne', ':date[Asia/Taipei] -- :remote-addr :method :url => :status :access :response-time ms - :res[content-length] - :user-agent')

const logStream = rt.getStream({
  filename:"./log/access.log",
  frequency:"daily",
  verbose: true
})

module.exports = morgan('ozne', { stream: logStream })
