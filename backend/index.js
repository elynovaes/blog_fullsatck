require('dotenv').config()
const config = require('./utils/config')
const logger = require('./utils/logger')
const http = require('http')

const app = require('./app')

const server = http.createServer(app)

server.listen(config.PORT, () => {
  logger.info(`Server running in the port ${config.PORT}`)
})