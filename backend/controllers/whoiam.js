const routes = require('express').Router()

const Whoiam = require('../models/WhoIAm')

routes.get('/', async (req, res) => {
  const whoiam = await Whoiam.find({})
  res.json(whoiam)
})

routes.post('/', async (req, res) => {
  const body = req.body

  const whoiam = new Whoiam({
    titleWhoiamSection: body.titleWhoiamSection,
    paragraph1WhoiamSection: body.paragraph1WhoiamSection,
    paragraph2WhoiamSection: body.paragraph2WhoiamSection,
    imageWhoiamSection: body.imageWhoiamSection,
    btnWhoiamSection: body.btnWhoiamSection,
  })

  const savedWhoiam = await whoiam.save()
  res.status(201).json(savedWhoiam)
})

routes.put('/:id', async (req, res) => {
  const whoiam = req.body

  const updatedWhoiam = await Whoiam.findByIdAndUpdate(req.params.id, whoiam, { new: true })
  res.json(updatedWhoiam.toJSON())
})

module.exports = routes