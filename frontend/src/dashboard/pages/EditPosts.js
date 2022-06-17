import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PostForm from '../components/Forms/PostForm'
import Notification from '../components/Forms/Notification'

import postService from '../../services/post'

const EditPosts = ({ data4, images }) => {
  const [ posts, setPosts ] = useState(data4)
  const [ open, setOpen ] = useState(false)
  const navigate = useNavigate()

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const openCreate = open === false ? 'scale-0' : 'scale-100'

  const deletePost = (id) => {
    const post = posts.find(n => n.id === id)
    postService
      .remove(id)
      .then(result => {
        setPosts(posts.filter(n => n.id !== post.id))
        setMessage(['Success' ,'Post deletado com sucesso!'])
        setTimeAnimation(!timeAnimation)
        setTimeout(() => {
          setTimeAnimation(false)
        }, 2500)
        setTimeout(() => {
          setMessage([null])
        }, 3000)
      })
      .catch(error => {
        console.log(error.message)
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

  return (
    <div className='pt-24'>
      <Notification message={message} timeAnimation={timeAnimation}/>
      <div className={`absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-50 h-108 w-2/3 overflow-y-scroll border-gray-500 border-4 rounded-2xl overflow-x-hidden scrollbar-thin scrollbar-thumb-slate-700 ${openCreate} transition duration-100 ease-linear`}>
        <PostForm data4={data4} images={images} open={open} setOpen={setOpen} timeAnimation={timeAnimation} setTimeAnimation={setTimeAnimation} setMessage={setMessage} setPosts={setPosts} posts={posts}/>
      </div>
      <div onClick={() => navigate('/admin')} className='flex gap-4 absolute top-10 left-10 bg-gradient-to-r from-blue-500 to-blue-900 tranform hover:scale-110 transition duration-300 ease-in-out text-white rounded-lg py-2 px-6 w-fit cursor-pointer'>
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
      <div className='absolute top-10 right-10 tranform -translate-1/2'>
        <button type='button' className='bg-gradient-to-r from-blue-500 to-blue-900 tranform hover:scale-110 transition duration-300 ease-in-out text-white rounded-lg py-2 px-6 w-fit cursor-pointer' onClick={() => setOpen(!open)}>Criar novo post</button>
      </div>
      <div className='grid grid-cols-4 gap-5 m-4'>
        {posts.map(post => {
          return (
            <div key={post.slug} className='w-full'>
              <div className='w-80 border-2 border-black rounded-lg p-4 pb-20 relative overflow-x-hidden'>
                <div className=''><img src={post.featuredImage} alt='algo' className='h-32 mx-auto'/></div>
                <p className='w-full'>{post.title}</p>
                <div className='absolute bottom-2 left-2'>
                  <Link to={`/admin/edit-posts/${post.id}`}>
                    <button type='button' className='bg-gradient-to-r from-blue-500 to-blue-900 tranform hover:scale-110 transition duration-300 ease-in-out text-white rounded-lg py-2 px-6 w-fit cursor-pointer'>
                      editar
                    </button>
                  </Link>
                </div>
                <div className='absolute bottom-2 right-2'>
                  <button type='button' className='bg-gradient-to-r from-red-500 to-red-900 tranform hover:scale-110 transition duration-300 ease-in-out text-white rounded-lg py-2 px-6 w-fit cursor-pointer' onClick={() => deletePost(post.id)}>
                    deletar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )  
}

export default EditPosts