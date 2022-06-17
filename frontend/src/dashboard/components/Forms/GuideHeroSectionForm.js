import React, { useState } from 'react'

import guideService from '../../../services/guide'

import Previews from '../Previews/GuideHeroSectionPreview'
import Notification from './Notification'
import WindowImages from '../WindowImages'

const GuideHeroSectionForm = ({ data3, image, returned }) => {
  const [newImgLogoHeroSection, setNewImgLogoHeroSection] = useState(data3.imgLogoHeroSection)
  const [newImgProfileHeroSection, setNewImgProfileHeroSection] = useState(data3.imgProfileHeroSection)
  const [newBgHeroSection, setNewBgHeroSection] = useState(data3.bgHeroSection)
  const [newTitleHeroSection, setNewTitleHeroSection] = useState(data3.titleHeroSection)
  const [newParagraphHeroSection, setNewParagraphHeroSection] = useState(data3.paragraphHeroSection)
  const [newBtnHeroSection, setNewBtnHeroSection] = useState(data3.btnHeroSection)
  const [newBtnHeroSectionLink, setNewBtnHeroSectionLink] = useState(data3.btnHeroSectionLink)

  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [selected1, setSelected1] = useState(newImgLogoHeroSection)
  const [selected2, setSelected2] = useState(newImgProfileHeroSection)
  const [selected3, setSelected3] = useState(newBgHeroSection)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateGuide = (event) => {
    event.preventDefault()
    const updatedGuide = {
      id: data3.id, 
      imgLogoHeroSection: selected1,
      imgProfileHeroSection: selected2,
      bgHeroSection: selected3,
      titleHeroSection: newTitleHeroSection,
      paragraphHeroSection: newParagraphHeroSection,
      btnHeroSection: newBtnHeroSection,
      btnHeroSectionLink: newBtnHeroSectionLink,   
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
    imgLogo: selected1,
    imgProfile: selected2,
    bg: selected3,
    title: newTitleHeroSection,
    paragraph: newParagraphHeroSection,
    btn: newBtnHeroSection,
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
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Seção do Herói</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Sua logo:</label>
            <img className='bg-gray-500 p-2 rounded-md' src={`${selected1}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImageHeroSection'
              value={selected1}
              type='hidden'
              onChange={(target) => setNewImgLogoHeroSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen1(!open1)}
            >Selecionar</button>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem de Perfil:</label>
            <img src={`${selected2}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImageHeroSection'
              value={selected2}
              type='hidden'
              onChange={(target) => setNewImgProfileHeroSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen2(!open2)}
            >Selecionar</button>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem de fundo:</label>
            <img src={`${selected3}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImageHeroSection'
              value={selected3}
              type='hidden'
              onChange={(target) => setNewBgHeroSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen3(!open3)}
            >Selecionar</button>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleHeroSection'
              value={newTitleHeroSection}
              onChange={({ target }) => {
                return setNewTitleHeroSection(target.value)
              }}
              rows='2'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Parágrafo: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newParagraph1HeroSection'
              value={newParagraphHeroSection}
              onChange={({ target }) => setNewParagraphHeroSection(target.value)}
              rows="5"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label><strong>Botão:</strong></label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newBtnHeroSection'
              value={newBtnHeroSection}
              onChange={({ target }) => setNewBtnHeroSection(target.value)}
            />
            <label className='block'><strong>Link do Botão:</strong></label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newBtnHeroSectionLink'
              value={newBtnHeroSectionLink}
              onChange={({ target }) => setNewBtnHeroSectionLink(target.value)}
            />
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-56' type='submit'>atualizar</button>
        </form>
      </div>
      <div className='col-span-3'>
        <Previews field={fields}/>
      </div>
      <WindowImages images={image} open={open1} setOpen={setOpen1} setSelected={setSelected1} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open2} setOpen={setOpen2} setSelected={setSelected2} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open3} setOpen={setOpen3} setSelected={setSelected3} changeSelected={updateUriImage}/>
    </div>
  )
}

export default GuideHeroSectionForm
