import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor'

import postService from '../../../services/post'

import WindowImages from '../WindowImages'
import Notification from './Notification'

const UpdatePost = ({ data4, image, setData4 }) => {
  const { id } = useParams()
  const post = data4.find(n => n.id === id)
  
  const [newTitle, setNewTitle] = useState(post.title)
  const [newSlug, setNewSlug] = useState(post.slug)
  const [newExcerpt, setNewExcerpt] = useState(post.excerpt)
  const [newContent, setNewContent] = useState(post.content)
  const [newFeaturedImage, setNewFeaturedImage] = useState(post.featuredImage)
  
  const [open1, setOpen1] = useState(false)
  const [selected1, setSelected1] = useState(newFeaturedImage)
  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)
  
  const navigate = useNavigate()

  const updatePost = (e) => {
    e.preventDefault()
    const updatedPost = {
      ...post, 
      featuredImage: selected1,
      title: newTitle,
      slug: newSlug,
      excerpt: newExcerpt,
      content: newContent,      
    }
    postService.update(updatedPost)
      .then(result => {
        setData4(data4.map(p => p.id !== post.id ? p : updatedPost ))
        setMessage(['Success' ,'Updated with success!'])
        setTimeAnimation(!timeAnimation)
        setTimeout(() => {
          setTimeAnimation(false)
        }, 2500)
        setTimeout(() => {
          setMessage([null])
          navigate('/admin/edit-posts')
        }, 3000)
      })
      .catch(error => {
        setMessage(['ERROR', 'An error occurred!'])
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
      <Notification message={message} timeAnimation={timeAnimation}/>
      <div className='bg-white col-span-1 h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
        <div className='flex justify-between cursor-pointer bg-indigo-900 hover:bg-indigo-500 rounded-lg w-24 py-2 px-2 mt-2 ml-2 text-white' onClick={() => navigate('/admin/edit-posts')}>
          <span className='tranform rotate-180'>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
              <defs>
                <path id="right-a" d="M2.29289322,0.292893219 C2.68341751,-0.0976310729 3.31658249,-0.0976310729 3.70710678,0.292893219 C4.09763107,0.683417511 4.09763107,1.31658249 3.70710678,1.70710678 L1.70710678,3.70710678 C1.31658249,4.09763107 0.683417511,4.09763107 0.292893219,3.70710678 C-0.0976310729,3.31658249 -0.0976310729,2.68341751 0.292893219,2.29289322 L2.29289322,0.292893219 Z"/>
                <path id="right-c" d="M3.41421356,4 L13.0014708,4 C13.5529433,4 14,4.44771525 14,5 C14,5.55228475 13.5529433,6 13.0014708,6 L3.41421356,6 L5.70710678,8.29289322 C6.09763107,8.68341751 6.09763107,9.31658249 5.70710678,9.70710678 C5.31658249,10.0976311 4.68341751,10.0976311 4.29289322,9.70710678 L0.292893219,5.70710678 C-0.0976310729,5.31658249 -0.0976310729,4.68341751 0.292893219,4.29289322 L4.29289322,0.292893219 C4.68341751,-0.0976310729 5.31658249,-0.0976310729 5.70710678,0.292893219 C6.09763107,0.683417511 6.09763107,1.31658249 5.70710678,1.70710678 L3.41421356,4 Z"/>
              </defs>
              <g fill="none" fillRule="evenodd" transform="matrix(-1 0 0 1 19 7)">
                <g transform="translate(3 1)">
                  <mask id="right-b" fill="#fff">
                    <use xlinkHref="#right-a"/>
                  </mask>
                  <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#right-a"/>
                  <g fill="#FFA0A0" mask="url(#right-b)">
                    <rect width="24" height="24" transform="translate(-8 -8)"/>
                  </g>
                </g>
                <mask id="right-d" fill="#fff">
                  <use xlinkHref="#right-c"/>
                </mask>
                <use fill="#000" fillRule="nonzero" xlinkHref="#right-c"/>
                <g fill="#7600FF" mask="url(#right-d)">
                  <rect width="24" height="24" transform="translate(-5 -7)"/>
                </g>
              </g>
            </svg>
          </span>
          <div>voltar</div>
        </div>
        <hr className='border-2 my-2' />
        <form onSubmit={updatePost} className='flex flex-col space-y-6 border-r-2 pb-5'>
          <h2 className='pl-2 text-xl text-blue-800'>Editar Post</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem:</label>
            <img className='bg-gray-500 p-2 rounded-md' src={`${selected1}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              type='hidden'
              onChange={(target) => setNewFeaturedImage(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700'
              onClick={() => setOpen1(!open1)}
            >Selecionar</button>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewTitle(target.value)
              }}
              value={newTitle}
              rows='2'
            />
            <label className='font-bold'>Slug</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewSlug(target.value)
              }}
              value={newSlug}
              rows='2'
            />
            <label className='font-bold'>Resumo</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              onChange={({ target }) => {
                return setNewExcerpt(target.value)
              }}
              value={newExcerpt}
              rows='2'
            />
            <label className='font-bold'>Conteúdo</label>
            <CKEditor
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              editor={Editor}
              data={newContent}
              onChange={(e, editor) => {handleChange(e, editor)}}
              config={{
                toolbar: [ 'heading', '|', 'bold', 'italic', 'fontColor', 'fontFamily', 'bulletedList', 'numberedList' ],
              }}
            />
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-5' type='submit'>atualizar</button>
        </form>
      </div>
      <WindowImages images={image} open={open1} setOpen={setOpen1} setSelected={setSelected1} changeSelected={updateUriImage}/>
    </div>
  )
}

export default UpdatePost
