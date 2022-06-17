import React, { useState } from 'react'

import guideService from '../../../services/guide'

import Previews from '../Previews/TestimonialSectionPreview'
import Notification from './Notification'
import WindowImages from '../WindowImages'

const GuideHeroSectionForm = ({ data3, image, returned }) => {
  const [newTitleTestimonialSection, setNewTitleTestimonialSection] = useState(data3.titleTestimonialSection)
  const [newT1p1TestimonialSection, setNewT1p1TestimonialSection] = useState(data3.t1p1TestimonialSection)
  const [newT1p2TestimonialSection, setNewT1p2TestimonialSection] = useState(data3.t1p2TestimonialSection)
  const [newT1p3TestimonialSection, setNewT1p3TestimonialSection] = useState(data3.t1p3TestimonialSection)
  const [newT2p1TestimonialSection, setNewT2p1TestimonialSection] = useState(data3.t2p1TestimonialSection)
  const [newT2p2TestimonialSection, setNewT2p2TestimonialSection] = useState(data3.t2p2TestimonialSection)
  const [newT2p3TestimonialSection, setNewT2p3TestimonialSection] = useState(data3.t2p3TestimonialSection)
  const [newT3p1TestimonialSection, setNewT3p1TestimonialSection] = useState(data3.t3p1TestimonialSection)
  const [newT3p2TestimonialSection, setNewT3p2TestimonialSection] = useState(data3.t3p2TestimonialSection)
  const [newT3p3TestimonialSection, setNewT3p3TestimonialSection] = useState(data3.t3p3TestimonialSection)
  const [newImgTestimonialSection, setNewImgTestimonialSection] = useState(data3.imgTestimonialSection)

  const [open1, setOpen1] = useState(false)
  const [selected1, setSelected1] = useState(newImgTestimonialSection)

  const [message, setMessage] = useState(['', 'alsdfajsdlfjsaid'])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateGuide = (event) => {
    event.preventDefault()
    const updatedGuide = {
      id: data3.id, 
      titleTestimonialSection: newTitleTestimonialSection,
      t1p1TestimonialSection: newT1p1TestimonialSection,
      t1p2TestimonialSection: newT1p2TestimonialSection,
      t1p3TestimonialSection: newT1p3TestimonialSection,
      t2p1TestimonialSection: newT2p1TestimonialSection,
      t2p2TestimonialSection: newT2p2TestimonialSection,
      t2p3TestimonialSection: newT2p3TestimonialSection,
      t3p1TestimonialSection: newT3p1TestimonialSection,
      t3p2TestimonialSection: newT3p2TestimonialSection,
      t3p3TestimonialSection: newT3p3TestimonialSection,
      imgTestimonialSection: selected1,      
    }
    guideService.updateGuide(updatedGuide)
      .then(result => {
        setMessage(['Success' ,'Atualizado com sucesso!'])
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

  const fields = {
    title: newTitleTestimonialSection,
    t1p1: newT1p1TestimonialSection,
    t1p2: newT1p2TestimonialSection,
    t1p3: newT1p3TestimonialSection,
    t2p1: newT2p1TestimonialSection,
    t2p2: newT2p2TestimonialSection,
    t2p3: newT2p3TestimonialSection,
    t3p1: newT3p1TestimonialSection,
    t3p2: newT3p2TestimonialSection,
    t3p3: newT3p3TestimonialSection,
    img: selected1,
  }

  return (
    <div className='grid grid-cols-4'>
      <Notification message={message} timeAnimation={timeAnimation}/>
      <div className='bg-white col-span-1 h-screen overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
        <div onClick={returned} className='flex justify-between cursor-pointer bg-indigo-900 hover:bg-indigo-500 rounded-lg w-24 py-2 px-2 mt-2 ml-2 text-white'>
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
        <form onSubmit={updateGuide} className='flex flex-col space-y-6 border-r-2 pb-5'>
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Seção de Testemunhas</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleTestimonialSection'
              value={newTitleTestimonialSection}
              onChange={({ target }) => {
                return setNewTitleTestimonialSection(target.value)
              }}
              rows='2'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Testemunho 1: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT1p1TestimonialSection'
              value={newT1p1TestimonialSection}
              onChange={({ target }) => setNewT1p1TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT1p2TestimonialSection'
              value={newT1p2TestimonialSection}
              onChange={({ target }) => setNewT1p2TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT1p3TestimonialSection'
              value={newT1p3TestimonialSection}
              onChange={({ target }) => setNewT1p3TestimonialSection(target.value)}
              rows="2"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Testemunho 2: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT2p1TestimonialSection'
              value={newT2p1TestimonialSection}
              onChange={({ target }) => setNewT2p1TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT2p2TestimonialSection'
              value={newT2p2TestimonialSection}
              onChange={({ target }) => setNewT2p2TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT2p3TestimonialSection'
              value={newT2p3TestimonialSection}
              onChange={({ target }) => setNewT2p3TestimonialSection(target.value)}
              rows="2"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Testemunho 3: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT3p1TestimonialSection'
              value={newT3p1TestimonialSection}
              onChange={({ target }) => setNewT3p1TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT3p2TestimonialSection'
              value={newT3p2TestimonialSection}
              onChange={({ target }) => setNewT3p2TestimonialSection(target.value)}
              rows="2"
            />
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newT3p3TestimonialSection'
              value={newT3p3TestimonialSection}
              onChange={({ target }) => setNewT3p3TestimonialSection(target.value)}
              rows="2"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem:</label>
            <img className='bg-gray-500 p-2 rounded-md' src={`${selected1}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImgTestimonialSection'
              value={selected1}
              type='hidden'
              onChange={(target) => setNewImgTestimonialSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen1(!open1)}
            >Selecionar</button>
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-56' type='submit'>atualizar</button>
        </form>
      </div>
      <div className='col-span-3 h-screen overflow-x-hidden'>
        <Previews field={fields}/>
      </div>
      <WindowImages images={image} open={open1} setOpen={setOpen1} setSelected={setSelected1} changeSelected={updateUriImage}/>
    </div>
  )
}

export default GuideHeroSectionForm
