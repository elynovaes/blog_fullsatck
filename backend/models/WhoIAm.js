const mongoose = require('mongoose')

const whoiamSchema = new mongoose.Schema({
  titleWhoiamSection: String,
  paragraph1WhoiamSection: String,
  paragraph2WhoiamSection: String,
  btnWhoiamSection: String,
  imageWhoiamSection: String,
})

whoiamSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Whoiam', whoiamSchema)