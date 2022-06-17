const routes = require('express').Router()
const config = require('../utils/config')
const multer = require('multer')
const multerConfig = require('../utils/multer')

routes.get('/', async (req, res) => {
  const images = await config.drive.files.list({
    fields: 'files(name, id, size)',
    orderBy: 'createdTime'
  });

  const arrayUrl = images.data.files.map(r => {
    return {
      name: r.name,
      url: `https://drive.google.com/uc?export=view&id=${r.id}`,
      id: r.id
    }
  }).filter(item => item.name !== 'uploads')
  res.json(arrayUrl)
})

routes.post('/', multer(multerConfig).single('file'), async (req, res) => {
  console.log(req.file)

  return res.json(req.file)
})

routes.delete('/:id', async (req, res) => {
  const id = req.params.id
  await config.drive.files.delete({
    'fileId': id
  })
  return res.json({ image: "deleted" })
})

module.exports = routes