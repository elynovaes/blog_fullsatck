import React, { useState } from 'react'

import guideService from '../../../services/guide'

import Previews from '../Previews/WlthetahealingSectionPreview'
import Notification from './Notification'

const WlthetahealingSectionForm = ({ data3, returned }) => {
  const [newTitleWlthetahealingSection, setNewTitleWlthetahealingSection] = useState(data3.titleWlthetahealingSection)
  const [newItem1WlthetahealingSection, setNewItem1WlthetahealingSection] = useState(data3.item1WlthetahealingSection)
  const [newItem2WlthetahealingSection, setNewItem2WlthetahealingSection] = useState(data3.item2WlthetahealingSection)
  const [newItem3WlthetahealingSection, setNewItem3WlthetahealingSection] = useState(data3.item3WlthetahealingSection)
  const [newItem4WlthetahealingSection, setNewItem4WlthetahealingSection] = useState(data3.item4WlthetahealingSection)
  const [newBtnWlthetahealingSection, setNewBtnWlthetahealingSection] = useState(data3.btnWlthetahealingSection)
  const [newBtnWlthetahealingSectionLink, setNewBtnWlthetahealingSectionLink] = useState(data3.btnWlthetahealingSectionLink)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateGuide = (event) => {
    event.preventDefault()
    const updatedGuide = {
      id: data3.id, 
      titleWthetahelaingSection: newTitleWlthetahealingSection,
      item1WlthetahealingSection: newItem1WlthetahealingSection,
      item2WlthetahealingSection: newItem2WlthetahealingSection,
      item3WlthetahealingSection: newItem3WlthetahealingSection,
      item4WlthetahealingSection: newItem4WlthetahealingSection,
      btnWlthetahealingSection: newBtnWlthetahealingSection,
      btnWlthetahealingSectionLink: newBtnWlthetahealingSectionLink
    }
    guideService.updateGuide(updatedGuide)
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

  const fields = {
    title: newTitleWlthetahealingSection,
    item1: newItem1WlthetahealingSection,
    item2: newItem2WlthetahealingSection,
    item3: newItem3WlthetahealingSection,
    item4: newItem4WlthetahealingSection,
    btn: newBtnWlthetahealingSection
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
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Seção Por que Aprender</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Título:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleWlthetahealingSection'
              value={newTitleWlthetahealingSection}
              onChange={({ target }) => {
                return setNewTitleWlthetahealingSection(target.value)
              }}
              rows='2'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Itens: </label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newItem1WlthetahealingSection'
              value={newItem1WlthetahealingSection}
              onChange={({ target }) => setNewItem1WlthetahealingSection(target.value)}
            />
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newItem2WlthetahealingSection'
              value={newItem2WlthetahealingSection}
              onChange={({ target }) => setNewItem2WlthetahealingSection(target.value)}
            />
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newItem3WlthetahealingSection'
              value={newItem3WlthetahealingSection}
              onChange={({ target }) => setNewItem3WlthetahealingSection(target.value)}
            />
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newItem4WlthetahealingSection'
              value={newItem4WlthetahealingSection}
              onChange={({ target }) => setNewItem4WlthetahealingSection(target.value)}
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Botão:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newBtnWlthetahealingSection'
              value={newBtnWlthetahealingSection}
              onChange={({ target }) => setNewBtnWlthetahealingSection(target.value)}
            />
            <label className='block'>Link do botão:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newBtnWlthetahealingSectionLink'
              value={newBtnWlthetahealingSectionLink}
              onChange={({ target }) => setNewBtnWlthetahealingSectionLink(target.value)}
            />
          </div>
          <button className='bg-tertiary w-max hover:bg-pink-300 text-white font-bold py-2 px-4 rounded ml-56' type='submit'>atualizar</button>
        </form>
      </div>
      <div className='col-span-3 h-screen overflow-x-hidden'>
        <Previews field={fields}/>
      </div>
    </div>
  )
}

export default WlthetahealingSectionForm
