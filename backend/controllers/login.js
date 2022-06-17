const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const routes = require('express').Router()
const User = require('../models/User')

routes.post('/', async (req, res) => {
  const { username, password } = req.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)
  
  if (!(user && passwordCorrect)) {
    return res.status(401).json({
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    name: user.name,
    username: user.username,
    id: user._id
  }

  const token = jwt.sign(userForToken, 'secret')

  res.status(200).send({ token, username: user.username, name: user.name })
})

module.exports = routes