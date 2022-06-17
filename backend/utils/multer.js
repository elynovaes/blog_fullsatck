require('dotenv').config()
const multer = require('multer')
const path = require('path')
const multerGoogleDrive = require('multer-google-drive')
const config = require('./config')

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname
      cb(null, fileName)
    }
  }),
  googleDrive: multerGoogleDrive({
    drive: config.drive,
    parents: process.env.GOOGLE_API_FOLDER_ID,
    filename: (req, file, cb) => {
      const fileName = file.originalname
      cb(null, fileName)
    }
  })
}

module.exports = {
  dest: path.resolve(__dirname, '..', 'tmp', 'uploads'),
  storage: storageTypes['googleDrive'],
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpg',
      'image/jpeg',
      'image/png',
      'image/gif',
    ]

    if(allowedMimes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error("Invalid file type."))
    }
  }
}
