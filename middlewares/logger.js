const morgan = require('morgan')
const moment = require('moment-timezone')
const rt = require("file-stream-rotator")


morgan.token('date', (req, res, tz) => moment().tz(tz).format('HH:mm:ss'))
morgan.token('access', (req, res) => req.auth ? `${req.auth.username}` : 'Guest')
// :remote-addr
morgan.format('ozne', ':date[Asia/Taipei] -- :status - :access - :method :url :response-time ms :res[content-length] \t\t :user-agent')

const logStream = rt.getStream({
  filename:"./log/access.log",
  frequency:"daily",
  utc: false,
  verbose: true
})

module.exports = morgan('ozne', { stream: logStream })
