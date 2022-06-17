const mongoose = require('mongoose')

const meditationSchema = new mongoose.Schema({
  titleMeditationSection: String,
  titlemed1MeditationSection: String,
  med1p1MeditationSection: String,
  med1p2MeditationSection: String,
  titlemed2MeditationSection: String,
  med2p1MeditationSection: String,
  med2p2MeditationSection: String,
  titlemed3MeditationSection: String,
  med3p1MeditationSection: String,
  med3p2MeditationSection: String,
})

meditationSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Meditation', meditationSchema)