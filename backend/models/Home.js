const mongoose = require('mongoose')

const homeSchema = new mongoose.Schema({
  titleHeroSection: String,
  paragraph1HeroSection: String,
  paragraph2HeroSection: String,
  btnHeroSection: String,
  imageHeroSection: String,
  titleVideoSection: String,
  paragraph1VideoSection: String,
  paragraph2VideoSection: String,
  videoVideoSection: String,
  btnVideoSection: String,
  titleimg1MeditationSection: String,
  titleimg2MeditationSection: String,
  titleimg3MeditationSection: String,
  titleMeditationSection: String,
  paragraph1MeditationSection: String,
  paragraph2MeditationSection: String,
  titlePlaylistSection: String,
  paragraphPlaylistSection: String,
  music1PlaylistSection: String,
  music2PlaylistSection: String,
  music3PlaylistSection: String,
  music4PlaylistSection: String,
  music5PlaylistSection: String,
  btnPlaylistSection: String,
})

homeSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Home', homeSchema)