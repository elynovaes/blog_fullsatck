import React, { useState } from 'react'

import whoiamService from '../../../services/whoiam'

import Previews from '../Previews/WhoiamSectionPreview'
import Notification from './Notification'
import WindowImages from '../WindowImages'

const WhoiamSectionForm = ({ data1, image, returned }) => {
  const [newTitleWhoiamSection, setNewTitleWhoiamSection] = useState(data1.titleWhoiamSection)
  const [newParagraph1WhoiamSection, setNewParagraph1WhoiamSection] = useState(data1.paragraph1WhoiamSection)
  const [newParagraph2WhoiamSection, setNewParagraph2WhoiamSection] = useState(data1.paragraph2WhoiamSection)
  const [newImageWhoiamSection, setNewImageWhoiamSection] = useState(data1.imageWhoiamSection)
  const [newBtnWhoiamSection, setNewBtnWhoiamSection] = useState(data1.btnWhoiamSection)

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(newImageWhoiamSection)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateWhoiam = (event) => {
    event.preventDefault()
    const updatedWhoiam = {id: data1.id, 
      titleWhoiamSection: newTitleWhoiamSection,
      paragraph1WhoiamSection: newParagraph1WhoiamSection,
      paragraph2WhoiamSection: newParagraph2WhoiamSection,
      imageWhoiamSection: selected,
      btnWhoiamSection: newBtnWhoiamSection
      
    }
    whoiamService.updateWhoiam(updatedWhoiam)
      .then(result => {
        setMessage(['Success' ,'Updated with success!'])
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

  const updateUriImage = (event) => {
    event.preventDefault()
  }

  const fields = {
    title: newTitleWhoiamSection,
    paragraph1: newParagraph1WhoiamSection,
    paragraph2: newParagraph2WhoiamSection,
    btn: newBtnWhoiamSection,
    image: selected
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
        <form onSubmit={updateWhoiam} className='flex flex-col space-y-6 border-r-2 mt-10 pb-5'>
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Página Quem sou eu</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleWhoiamSection'
              value={newTitleWhoiamSection}
              onChange={({ target }) => {
                return setNewTitleWhoiamSection(target.value)
              }}
              rows='2'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Parágrafo 1: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newParagraph1WhoiamSection'
              value={newParagraph1WhoiamSection}
              onChange={({ target }) => setNewParagraph1WhoiamSection(target.value)}
              rows="5"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Parágrafo 2:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newParagraph2WhoiamSection'
              value={newParagraph2WhoiamSection}
              onChange={({ target }) => setNewParagraph2WhoiamSection(target.value)}
              rows="3"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Botão:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newBtnWhoiamSection'
              value={newBtnWhoiamSection}
              onChange={({ target }) => setNewBtnWhoiamSection(target.value)}
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem:</label>
            <img src={`${selected}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImageWhoiamSection'
              value={selected}
              type='hidden'
              onChange={(target) => setNewImageWhoiamSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen(!open)}
            >Selecionar</button>
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-56' type='submit'>atualizar</button>
        </form>
      </div>
      <div className='col-span-3 h-screen overflow-x-hidden'>
        <Previews field={fields}/>
      </div>
      <WindowImages images={image} open={open} setOpen={setOpen} setSelected={setSelected} changeSelected={updateUriImage}/>
    </div>
  )
}

export default WhoiamSectionForm
