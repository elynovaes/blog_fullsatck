const routes = require('express').Router()

const Home = require('../models/Home')

routes.get('/', async (req, res) => {
  const home = await Home.find({})
  res.json(home)
})

routes.post('/', async (req, res) => {
  const body = req.body

  const home = new Home({
    titleHeroSection: body.titleHeroSection,
    paragraph1HeroSection: body.paragraph1HeroSection,
    paragraph2HeroSection: body.paragraph2HeroSection,
    btnHeroSection: body.btnHeroSection,
    imageHeroSection: body.imageHeroSection,
    titleVideoSection: body.titleVideoSection,
    paragraph1VideoSection: body.paragraph1VideoSection,
    paragraph2VideoSection: body.paragraph1HeroSection,
    videoVideoSection: body.videoVideoSection,
    btnVideoSection: body.btnVideoSection,
    titleimg1MeditationSection: body.titleimg1MeditationSection,
    titleimg2MeditationSection: body.titleimg2MeditationSection,
    titleimg3MeditationSection: body.titleimg3MeditationSection,
    titleMeditationSection: body.titleMeditationSection,
    paragraph1MeditationSection: body.paragraph1MeditationSection,
    paragraph2MeditationSection: body.paragraph2MeditationSection,
    titlePlaylistSection: body.titlePlaylistSection,
    paragraphPlaylistSection: body.paragraphPlaylistSection,
    music1PlaylistSection: body.music1PlaylistSection,
    music2PlaylistSection: body.music2PlaylistSection,
    music3PlaylistSection: body.music3PlaylistSection,
    music4PlaylistSection: body.music4PlaylistSection,
    music5PlaylistSection: body.music5PlaylistSection,
    btnPlaylistSection: body.btnPlaylistSection,
  })

  const savedHome = await home.save()
  res.status(201).json(savedHome)
})

routes.put('/:id', async (req, res) => {
  const home = req.body

  const updatedHome = await Home.findByIdAndUpdate(req.params.id, home, { new: true })
  res.json(updatedHome.toJSON())
})

module.exports = routes