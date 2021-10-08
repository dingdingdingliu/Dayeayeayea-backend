const cors = require('cors')

const corsOptions = {
  origin: process.env.FOLLOW_DOMAIN,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports =  process.env.FOLLOW_DOMAIN ? cors(corsOptions) : cors()
