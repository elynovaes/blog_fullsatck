const routes = require('express').Router()

const Post = require('../models/Post')

routes.get('/', async (req, res) => {
  const posts = await Post.find({})
  res.json(posts)
})

routes.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id)

  res.json(post)
})

routes.post('/', async (req, res) => {
  const body = req.body

  const post = new Post({
    title: body.title,
    slug: body.slug,
    excerpt: body.excerpt,
    content: body.content,
    featuredImage: body.featuredImage,
  })

  const savedPost = await post.save()
  res.status(201).json(savedPost)
})

routes.put('/:id', async (req, res) => {
  const post = req.body

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, post, { new: true })
  res.json(updatedPost.toJSON())
})

routes.delete('/:id', async (req, res) => {
  const postToDelete = await Post.findById(req.params.id)
  if (!postToDelete) {
    return res.status(204).end()
  }

  await Post.findByIdAndRemove(req.params.id)

  res.status(204).end()
})

module.exports = routes