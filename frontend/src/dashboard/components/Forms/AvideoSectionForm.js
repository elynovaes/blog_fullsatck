import React, { useState } from 'react'

import guideService from '../../../services/guide'

import Previews from '../Previews/AvideoSectionPreview'
import Notification from './Notification'
import WindowImages from '../WindowImages'

const GuideHeroSectionForm = ({ data3, image, returned }) => {
  const [newTitleAvideoSection, setNewTitleAvideoSection] = useState(data3.titleAvideoSection)
  const [newParagraphAvideoSection, setNewParagraphAvideoSection] = useState(data3.paragraphAvideoSection)
  const [newImgAvideoSection, setNewImgAvideoSection] = useState(data3.imgAvideoSection)
  const [newTitlev1AvideoSection, setNewTitlev1AvideoSection] = useState(data3.titlev1AvideoSection)
  const [newImgv1AvideoSection, setNewImgv1AvideoSection] = useState(data3.imgv1AvideoSection)
  const [newPv1AvideoSection, setNewPv1AvideoSection] = useState(data3.pv1AvideoSection)
  const [newTitlev2AvideoSection, setNewTitlev2AvideoSection] = useState(data3.titlev2AvideoSection)
  const [newImgv2AvideoSection, setNewImgv2AvideoSection] = useState(data3.imgv2AvideoSection)
  const [newPv2AvideoSection, setNewPv2AvideoSection] = useState(data3.pv2AvideoSection)
  const [newTitlev3AvideoSection, setNewTitlev3AvideoSection] = useState(data3.titlev3AvideoSection)
  const [newImgv3AvideoSection, setNewImgv3AvideoSection] = useState(data3.imgv3AvideoSection)
  const [newPv3AvideoSection, setNewPv3AvideoSection] = useState(data3.pv3AvideoSection)
  const [newTitlev4AvideoSection, setNewTitlev4AvideoSection] = useState(data3.titlev4AvideoSection)
  const [newImgv4AvideoSection, setNewImgv4AvideoSection] = useState(data3.imgv4AvideoSection)
  const [newPv4AvideoSection, setNewPv4AvideoSection] = useState(data3.pv4AvideoSection)
  const [newTitlev5AvideoSection, setNewTitlev5AvideoSection] = useState(data3.titlev5AvideoSection)
  const [newImgv5AvideoSection, setNewImgv5AvideoSection] = useState(data3.imgv5AvideoSection)
  const [newPv5AvideoSection, setNewPv5AvideoSection] = useState(data3.pv5AvideoSection)
  
  const [open1, setOpen1] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [open5, setOpen5] = useState(false)
  const [open6, setOpen6] = useState(false)
  const [selected1, setSelected1] = useState(newImgAvideoSection)
  const [selected2, setSelected2] = useState(newImgv1AvideoSection)
  const [selected3, setSelected3] = useState(newImgv2AvideoSection)
  const [selected4, setSelected4] = useState(newImgv3AvideoSection)
  const [selected5, setSelected5] = useState(newImgv4AvideoSection)
  const [selected6, setSelected6] = useState(newImgv5AvideoSection)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateGuide = (event) => {
    event.preventDefault()
    const updatedGuide = {
      id: data3.id,
      titleAvideoSection: newTitleAvideoSection,
      imgAvideoSection: selected1,
      titlev1AvideoSection: newTitlev1AvideoSection,
      imgv1AvideoSection: selected2,
      pv1AvideoSection: newPv1AvideoSection,
      titlev2AvideoSection: newTitlev2AvideoSection,
      imgv2AvideoSection: selected3,
      pv2AvideoSection: newPv2AvideoSection,
      titlev3AvideoSection: newTitlev3AvideoSection,
      imgv3AvideoSection: selected4,
      pv3AvideoSection: newPv3AvideoSection,
      titlev4AvideoSection: newTitlev4AvideoSection,
      imgv4AvideoSection: selected5,
      pv4AvideoSection: newPv4AvideoSection,
      titlev5AvideoSection: newTitlev5AvideoSection,
      imgv5AvideoSection: selected6,
      pv5AvideoSection: newPv5AvideoSection,      
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
    title: newTitleAvideoSection,
    paragraph: newParagraphAvideoSection,
    img: selected1,
    titlev1: newTitlev1AvideoSection,
    imgv1: selected2,
    pv1: newPv1AvideoSection,
    titlev2: newTitlev2AvideoSection,
    imgv2: selected3,
    pv2: newPv2AvideoSection,
    titlev3: newTitlev3AvideoSection,
    imgv3: selected4,
    pv3: newPv3AvideoSection,
    titlev4: newTitlev4AvideoSection,
    imgv4: selected5,
    pv4: newPv4AvideoSection,
    titlev5: newTitlev5AvideoSection,
    imgv5: selected6,
    pv5: newPv5AvideoSection,
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
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Seçõa Sobre os Videos</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleAvideoSection'
              value={newTitleAvideoSection}
              onChange={({ target }) => {
                return setNewTitleAvideoSection(target.value)
              }}
              rows='2'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Parágrafo:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newParagraphAvideoSection'
              value={newParagraphAvideoSection}
              onChange={({ target }) => {
                return setNewParagraphAvideoSection(target.value)
              }}
              rows='4'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label>Imagem:</label>
            <img src={`${selected1}`} alt='' width='200px'/>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newImgAvideoSection'
              value={selected1}
              type='hidden'
              onChange={(target) => setNewImgAvideoSection(target.value)}
            />
            <button 
              type='button'
              className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-48'
              onClick={() => setOpen1(!open1)}
            >Selecionar</button>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Vídeo 1:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitlev1AvideoSection'
              value={newTitlev1AvideoSection}
              onChange={({ target }) => {
                return setNewTitlev1AvideoSection(target.value)
              }}
              placeholder='Title'
              rows='1'
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Imagem:</label>
              <img src={`${selected2}`} alt='' width='200px'/>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newImgv1AvideoSection'
                value={selected2}
                type='hidden'
                onChange={(target) => setNewImgv1AvideoSection(target.value)}
              />
              <button 
                type='button'
                className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-40'
                onClick={() => setOpen2(!open2)}
              >Selecionar</button>
            </div>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPv1AvideoSection'
              value={newPv1AvideoSection}
              onChange={({ target }) => {
                return setNewPv1AvideoSection(target.value)
              }}
              placeholder='aoout video'
              rows='3'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Vídeo 2:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitlev2AvideoSection'
              value={newTitlev2AvideoSection}
              onChange={({ target }) => {
                return setNewTitlev2AvideoSection(target.value)
              }}
              placeholder='Title'
              rows='1'
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Imagem:</label>
              <img src={`${selected3}`} alt='' width='200px'/>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newImgv1AvideoSection'
                value={selected3}
                type='hidden'
                onChange={(target) => setNewImgv2AvideoSection(target.value)}
              />
              <button 
                type='button'
                className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-40'
                onClick={() => setOpen3(!open3)}
              >Selecionar</button>
            </div>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPv2AvideoSection'
              value={newPv2AvideoSection}
              onChange={({ target }) => {
                return setNewPv2AvideoSection(target.value)
              }}
              placeholder='aoout video'
              rows='3'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Vídeo 3:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitlev3AvideoSection'
              value={newTitlev3AvideoSection}
              onChange={({ target }) => {
                return setNewTitlev3AvideoSection(target.value)
              }}
              placeholder='Title'
              rows='1'
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Imagem:</label>
              <img src={`${selected4}`} alt='' width='200px'/>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newImgv3AvideoSection'
                value={selected4}
                type='hidden'
                onChange={(target) => setNewImgv3AvideoSection(target.value)}
              />
              <button 
                type='button'
                className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-40'
                onClick={() => setOpen4(!open4)}
              >Selecionar</button>
            </div>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPv3AvideoSection'
              value={newPv3AvideoSection}
              onChange={({ target }) => {
                return setNewPv3AvideoSection(target.value)
              }}
              placeholder='aoout video'
              rows='3'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Vídeo 4:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitlev4AvideoSection'
              value={newTitlev4AvideoSection}
              onChange={({ target }) => {
                return setNewTitlev4AvideoSection(target.value)
              }}
              placeholder='Title'
              rows='1'
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Imagem:</label>
              <img src={`${selected5}`} alt='' width='200px'/>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newImgv4AvideoSection'
                value={selected5}
                type='hidden'
                onChange={(target) => setNewImgv4AvideoSection(target.value)}
              />
              <button 
                type='button'
                className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-40'
                onClick={() => setOpen5(!open5)}
              >Selecionar</button>
            </div>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPv4AvideoSection'
              value={newPv4AvideoSection}
              onChange={({ target }) => {
                return setNewPv4AvideoSection(target.value)
              }}
              placeholder='aoout video'
              rows='3'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Vídeo 5:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitlev5AvideoSection'
              value={newTitlev5AvideoSection}
              onChange={({ target }) => {
                return setNewTitlev5AvideoSection(target.value)
              }}
              placeholder='Title'
              rows='1'
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Imagem:</label>
              <img src={`${selected6}`} alt='' width='200px'/>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newImgv5AvideoSection'
                value={selected6}
                type='hidden'
                onChange={(target) => setNewImgv5AvideoSection(target.value)}
              />
              <button 
                type='button'
                className='bg-green-400 px-4 py-1 rounded-xl hover:bg-green-700 ml-40'
                onClick={() => setOpen6(!open6)}
              >Selecionar</button>
            </div>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPv5AvideoSection'
              value={newPv5AvideoSection}
              onChange={({ target }) => {
                return setNewPv5AvideoSection(target.value)
              }}
              placeholder='aoout video'
              rows='3'
            />
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-56' type='submit'>atualizar</button>
        </form>
      </div>
      <div className='col-span-3 h-screen overflow-x-hidden'>
        <Previews field={fields}/>
      </div>
      <WindowImages images={image} open={open1} setOpen={setOpen1} setSelected={setSelected1} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open2} setOpen={setOpen2} setSelected={setSelected2} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open3} setOpen={setOpen3} setSelected={setSelected3} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open4} setOpen={setOpen4} setSelected={setSelected4} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open5} setOpen={setOpen5} setSelected={setSelected5} changeSelected={updateUriImage}/>
      <WindowImages images={image} open={open6} setOpen={setOpen6} setSelected={setSelected6} changeSelected={updateUriImage}/>
    </div>
  )
}

export default GuideHeroSectionForm
