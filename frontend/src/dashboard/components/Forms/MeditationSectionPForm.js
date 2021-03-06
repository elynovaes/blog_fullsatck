import React, { useState } from 'react'

import meditationService from '../../../services/meditation'

import Previews from '../Previews/MeditionSectionPPreview'
import Notification from './Notification'

const MeditationSectionPForm = ({ data2, returned }) => {
  const [newTitleMeditationSection, setNewTitleMeditationSection] = useState(data2.titleMeditationSection)
  const [newTitleMed1MeditationSection, setNewTitleMed1MeditationSection] = useState(data2.titlemed1MeditationSection)
  const [newMed1P1MeditationSection, setNewMed1P1MeditationSection] = useState(data2.med1p1MeditationSection)
  const [newMed1P2MeditationSection, setNewMed1P2MeditationSection] = useState(data2.med1p2MeditationSection)
  const [newTitleMed2MeditationSection, setNewTitleMed2MeditationSection] = useState(data2.titlemed2MeditationSection)
  const [newMed2P1MeditationSection, setNewMed2P1MeditationSection] = useState(data2.med2p1MeditationSection)
  const [newMed2P2MeditationSection, setNewMed2P2MeditationSection] = useState(data2.med2p2MeditationSection)
  const [newTitleMed3MeditationSection, setNewTitleMed3MeditationSection] = useState(data2.titlemed3MeditationSection)
  const [newMed3P1MeditationSection, setNewMed3P1MeditationSection] = useState(data2.med3p1MeditationSection)
  const [newMed3P2MeditationSection, setNewMed3P2MeditationSection] = useState(data2.med3p2MeditationSection)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateMeditation = (event) => {
    event.preventDefault()
    const updatedMeditation = {
      id: data2.id, 
      titleMeditationSection: newTitleMeditationSection,
      titlemed1MeditationSection: newTitleMed1MeditationSection,
      med1p1MeditationSection: newMed1P1MeditationSection,
      med1p2MeditationSection: newMed1P2MeditationSection,
      titlemed2MeditationSection: newTitleMed2MeditationSection,
      med2p1MeditationSection: newMed2P1MeditationSection,
      med2p2MeditationSection: newMed2P2MeditationSection,
      titlemed3MeditationSection: newTitleMed3MeditationSection,
      med3p1MeditationSection: newMed3P1MeditationSection,
      med3p2MeditationSection: newMed3P2MeditationSection,
    }
    meditationService.updateMeditation(updatedMeditation)
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

  const fields = {
    title: newTitleMeditationSection,
    titlemed1: newTitleMed1MeditationSection,
    med1p1: newMed1P1MeditationSection,
    med1p2: newMed1P2MeditationSection,
    titlemed2: newTitleMed2MeditationSection,
    med2p1: newMed2P1MeditationSection,
    med2p2: newMed2P2MeditationSection,
    titlemed3: newTitleMed3MeditationSection,
    med3p1: newMed3P1MeditationSection,
    med3p2: newMed3P2MeditationSection,
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
        <form onSubmit={updateMeditation} className='flex flex-col space-y-6 border-r-2 mt-10 pb-5'>
          <h2 className='pl-2 text-xl text-blue-800'>Edi????o da P??gina de Medita????o</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>T??tulo:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleMeditationSection'
              value={newTitleMeditationSection}
              onChange={({ target }) => {
                return setNewTitleMeditationSection(target.value)
              }}
              rows='1'
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>T??tulo Medita????o 1: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleMed1MeditationSection'
              value={newTitleMed1MeditationSection}
              onChange={({ target }) => setNewTitleMed1MeditationSection(target.value)}
              rows="1"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 1 Medita????o 1:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed1P1MeditationSection'
              value={newMed1P1MeditationSection}
              onChange={({ target }) => setNewMed1P1MeditationSection(target.value)}
              rows="9"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 2 Medita????o 1 1:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed1P2MeditationSection'
              value={newMed1P2MeditationSection}
              onChange={({ target }) => setNewMed1P2MeditationSection(target.value)}
              rows="4"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>T??tulo Medita????o 2: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleMed2MeditationSection'
              value={newTitleMed2MeditationSection}
              onChange={({ target }) => setNewTitleMed2MeditationSection(target.value)}
              rows="1"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 1 Medita????o 2:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed2P1MeditationSection'
              value={newMed2P1MeditationSection}
              onChange={({ target }) => setNewMed2P1MeditationSection(target.value)}
              rows="9"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 2 Medita????o 2:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed2P2MeditationSection'
              value={newMed2P2MeditationSection}
              onChange={({ target }) => setNewMed2P2MeditationSection(target.value)}
              rows="4"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>T??tulo Medita????o 3: </label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newTitleMed3MeditationSection'
              value={newTitleMed3MeditationSection}
              onChange={({ target }) => setNewTitleMed3MeditationSection(target.value)}
              rows="1"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 1 Medita????o 3:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed3P1MeditationSection'
              value={newMed3P1MeditationSection}
              onChange={({ target }) => setNewMed3P1MeditationSection(target.value)}
              rows="9"
            />
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Par??grafo 2 Medita????o 3:</label>
            <textarea
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newMed3P2MeditationSection'
              value={newMed3P2MeditationSection}
              onChange={({ target }) => setNewMed3P2MeditationSection(target.value)}
              rows="4"
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

export default MeditationSectionPForm
