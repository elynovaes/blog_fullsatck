import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'

import postService from '../../../services/post'

import WindowImages from '../WindowImages'

const PostForm = ({ 
  data4,
  images,
  open,
  setOpen,
  timeAnimation,
  setTimeAnimation,
  setMessage,
  setPosts,
  posts
}) => {
  const [newTitle, setNewTitle] = useState('')
  const [newSlug, setNewSlug] = useState('')
  const [newExcerpt, setNewExcerpt] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newFeaturedImage, setNewFeaturedImage] = useState('')

  const [open1, setOpen1] = useState(false)
  const [selected1, setSelected1] = useState(newFeaturedImage)

  const createPost = (event) => {
    event.preventDefault()
    const newPost = {
      featuredImage: selected1,
      title: newTitle,
      slug: newSlug,
      excerpt: newExcerpt,
      content: newContent,      
    }
    postService.create(newPost)
      .then(result => {
        setPosts(posts.concat(newPost))
        setMessage(['Success' ,'Post atuailzado com sucesso!'])
        setTimeAnimation(!timeAnimation)
        setTimeout(() => {
          setTimeAnimation(false)
        }, 2500)
        setTimeout(() => {
          setMessage([null])
        }, 3000)
        setSelected1('')
        setNewContent('')
        setNewExcerpt('')
        setNewSlug('')
        setNewTitle('')
        setOpen(!open)
      })
      .catch(error => {
        console.log(error.message)
        setMessage(['ERROR', 'Houve um problema!'])
        setTimeAnimation(!timeAnimation)
        setTimeout(() => {
          setTimeAnimation(false)
        }, 2500)
        setTimeout(() => {
          setMessage([null])
        }, 3000)
      })
  }

  const updateUriImage = (event) => {
    event.preventDefault()
  }

  const handleChange = (e, editor) => {
    setNewContent(editor.getData())
  }

  return (
    <div className=''>
      <div className='bg-blue-100 col-span-1'>
      <div className="sticky top-0 left-full w-fit -mb-5 pt-1 pr-2 z-30">
            <button type='buttom' className='bg-red-900 px-3 py-1 rounded-full text-white hover:bg-red-500 transform hover:scale-110 transition duration-100 ease-linear' onClick={() => setOpen(!open)}>x</button>
        </div>
        <form onSubmit={createPost} className='flex flex-col space-y-3 border-r-2 py-5 px-2'>
          <h2 className='pl-2 text-2xl font-bold text-blue-900 ml-2 mb-5'>Criar nova postagem</h2>

          <div className='border-gray-500 border-2 rounded-xl p-2 mx-2 ml-4 space-y-2 w-fit'>
            <label>Escolha a imagem:</label>
            <img className='bg-gray-500 p-2 rounded-md' src={`${selected1}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              type='hidden'
              onChange={(target) => setNewFeaturedImage(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-52'
              onClick={() => setOpen1(!open1)}
            >Selecionar</button>
          </div>

          <div className='p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 border-gray-400 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewTitle(target.value)
              }}
              rows='2'
            />
          </div>

          <div className='p-2 mx-2 space-y-2'>
            <label className='font-bold'>Slug</label>
            <input
              className='bg-gray-100 border-2 border-gray-400 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewSlug(target.value)
              }}
            />
          </div>

          <div className='p-2 mx-2 space-y-2'>
            <label className='font-bold'>Resumo:</label>
            <textarea
              className='bg-gray-100 border-2 border-gray-400 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewExcerpt(target.value)
              }}
              rows='2'
            />
          </div>

          <div className='p-2 mx-2 space-y-2'>
            <label className='font-bold'>Conteúdo</label>
            <CKEditor
              editor={Editor}
              onChange={(e, editor) => {handleChange(e, editor)}}
              config={{
                toolbar: [ 'heading', '|', 'bold', 'italic', 'fontColor', 'fontFamily', 'bulletedList', 'numberedList' ],
              }}
            />
          </div>
          <div className='flex w-full justify-end pr-4'>
            <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded' type='submit'>Criar</button>
          </div>
        </form>
      </div>
      <div className='w-full'>
        <WindowImages images={images} open={open1} setOpen={setOpen1} setSelected={setSelected1} changeSelected={updateUriImage}/>
      </div>
    </div>
  )
}

export default PostForm
