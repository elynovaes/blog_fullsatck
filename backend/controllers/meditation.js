const routes = require('express').Router()
const config = require('../utils/config')
const multer = require('multer')
const multerConfig = require('../utils/multer')

const Meditation = require('../models/Meditation')

routes.get('/', async (req, res) => {
  const meditation = await Meditation.find({})
  res.json(meditation)
})

routes.post('/', async (req, res) => {
  const body = req.body

  const meditation = new Meditation({
    titleMeditationSection: body.titleMeditationSection,
    titlemed1MeditationSection: body.titlemed1MeditationSection,
    med1p1MeditationSection: body.med1p1MeditationSection,
    med1p2MeditationSection: body.med1p2MeditationSection,
    titlemed2MeditationSection: body.titlemed2MeditationSection,
    med2p1MeditationSection: body.med2p1MeditationSection,
    med2p2MeditationSection: body.med2p2MeditationSection,
    titlemed3MeditationSection: body.titlemed3MeditationSection,
    med3p1MeditationSection: body.med3p1MeditationSection,
    med3p2MeditationSection: body.med3p2MeditationSection,
  })

  const savedMeditation = await meditation.save()
  res.status(201).json(savedMeditation)
})

routes.put('/:id', async (req, res) => {
  const meditation = req.body

  const updatedMeditation = await Meditation.findByIdAndUpdate(req.params.id, meditation, { new: true })
  res.json(updatedMeditation.toJSON())
})

module.exports = routes