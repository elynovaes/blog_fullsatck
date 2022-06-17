const bcrypt = require('bcrypt')
const routes = require('express').Router()
const User = require('../models/User')

routes.post('/', async (req, res) => {
  const { name, username, password } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name,
    username,
    passwordHash,
  })

  const savedUser = await user.save()
  res.status(201).json(savedUser)
})

module.exports = routes