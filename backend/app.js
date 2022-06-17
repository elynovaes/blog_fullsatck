require('express-async-errors')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
// const morgan = require('morgan')

const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')

const homeRouter = require('./controllers/home')
const whoiamRouter = require('./controllers/whoiam')
const meditationRouter = require('./controllers/meditation')
const guideRouter = require('./controllers/guide')
const imagesRouter = require('./controllers/images')
const postRouter = require('./controllers/post')
const usersRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')

const app = express()

/* ******************** Setup Database *************************** */
logger.info('connecting to MongoDB', config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch(error => {
    logger.error('error at connecting to MongoDB', error.message)
  })
/* *************************************************************** */

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static('build'))

app.get('/:id', function (req, res) {
  const urlParams = req.params.id
  if(urlParams !== 'api') {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }
});

// app.use(morgan('dev'))

app.use('/api/images', imagesRouter)
app.use('/api/home', homeRouter)
app.use('/api/whoiam', whoiamRouter)
app.use('/api/meditation', meditationRouter)
app.use('/api/guide', guideRouter)
app.use('/api/posts', postRouter)
app.use('/api/user', usersRouter)
app.use('/api/login', loginRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app