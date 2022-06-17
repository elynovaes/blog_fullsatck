import React, { useState } from 'react'

import guideService from '../../../services/guide'

import Previews from '../Previews/PlanSectionPreview'
import Notification from './Notification'

const PlanSectionForm = ({ data3, returned }) => {
  const [newPln1PlanSection, setNewPln1PlanSection] = useState(data3.pln1PlanSection)
  const [newPln1vPlanSection, setNewPln1vPlanSection] = useState(data3.pln1vPlanSection)
  const [newPln1i1PlanSection, setNewPln1i1PlanSection] = useState(data3.pln1i1PlanSection)
  const [newPln1i2PlanSection, setNewPln1i2PlanSection] = useState(data3.pln1i2PlanSection)
  const [newPln1i3PlanSection, setNewPln1i3PlanSection] = useState(data3.pln1i3PlanSection)
  const [newPln1btnPlanSection, setNewPln1btnPlanSection] = useState(data3.pln1btnPlanSection)
  const [newPln1btnPlanSectionLink, setNewPln1btnPlanSectionLink] = useState(data3.pln1btnPlanSectionLink)
  const [newPln2PlanSection, setNewPln2PlanSection] = useState(data3.pln2PlanSection)
  const [newPln2vPlanSection, setNewPln2vPlanSection] = useState(data3.pln2vPlanSection)
  const [newPln2i1PlanSection, setNewPln2i1PlanSection] = useState(data3.pln2i1PlanSection)
  const [newPln2i2PlanSection, setNewPln2i2PlanSection] = useState(data3.pln2i2PlanSection)
  const [newPln2i3PlanSection, setNewPln2i3PlanSection] = useState(data3.pln2i3PlanSection)
  const [newPln2i4PlanSection, setNewPln2i4PlanSection] = useState(data3.pln2i4PlanSection)
  const [newPln2btnPlanSection, setNewPln2btnPlanSection] = useState(data3.pln2btnPlanSection)
  const [newPln2btnPlanSectionLink, setNewPln2btnPlanSectionLink] = useState(data3.pln2btnPlanSectionLink)
  const [newPln3PlanSection, setNewPln3PlanSection] = useState(data3.pln3PlanSection)
  const [newPln3vPlanSection, setNewPln3vPlanSection] = useState(data3.pln3vPlanSection)
  const [newPln3i1PlanSection, setNewPln3i1PlanSection] = useState(data3.pln3i1PlanSection)
  const [newPln3i2PlanSection, setNewPln3i2PlanSection] = useState(data3.pln3i2PlanSection)
  const [newPln3i3PlanSection, setNewPln3i3PlanSection] = useState(data3.pln3i3PlanSection)
  const [newPln3i4PlanSection, setNewPln3i4PlanSection] = useState(data3.pln3i4PlanSection)
  const [newPln3i5PlanSection, setNewPln3i5PlanSection] = useState(data3.pln3i5PlanSection)
  const [newPln3i6PlanSection, setNewPln3i6PlanSection] = useState(data3.pln3i6PlanSection)
  const [newPln3btnPlanSection, setNewPln3btnPlanSection] = useState(data3.pln3btnPlanSection)
  const [newPln3btnPlanSectionLink, setNewPln3btnPlanSectionLink] = useState(data3.pln3btnPlanSectionLink)

  const [message, setMessage] = useState([])
  const [timeAnimation, setTimeAnimation] = useState(false)

  const updateGuide = (event) => {
    event.preventDefault()
    const updatedGuide = {
      id: data3.id, 
      pln1PlanSection: newPln1PlanSection,
      pln1vPlanSection: newPln1vPlanSection,
      pln1i1PlanSection: newPln1i1PlanSection,
      pln1i2PlanSection: newPln1i2PlanSection,
      pln1i3PlanSection: newPln1i3PlanSection,
      pln1btnPlanSection: newPln1btnPlanSection,
      pln1btnPlanSectionLink: newPln1btnPlanSectionLink,
      pln2PlanSection: newPln2PlanSection,
      pln2vPlanSection: newPln2vPlanSection,
      pln2i1PlanSection: newPln2i1PlanSection,
      pln2i2PlanSection: newPln2i2PlanSection,
      pln2i3PlanSection: newPln2i3PlanSection,
      pln2i4PlanSection: newPln2i4PlanSection,
      pln2btnPlanSection: newPln2btnPlanSection,
      pln2btnPlanSectionLink: newPln2btnPlanSectionLink,
      pln3PlanSection: newPln3PlanSection,
      pln3vPlanSection: newPln3vPlanSection,
      pln3i1PlanSection: newPln3i1PlanSection,
      pln3i2PlanSection: newPln3i2PlanSection,
      pln3i3PlanSection: newPln3i3PlanSection,
      pln3i4PlanSection: newPln3i4PlanSection,
      pln3i5PlanSection: newPln3i5PlanSection,
      pln3i6PlanSection: newPln3i6PlanSection,
      pln3btnPlanSection: newPln3btnPlanSection,
      pln3btnPlanSectionLink: newPln3btnPlanSectionLink,      
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

  const fields = {
    pln1: newPln1PlanSection,
    pln1v: newPln1vPlanSection,
    pln1i1: newPln1i1PlanSection,
    pln1i2: newPln1i2PlanSection,
    pln1i3: newPln1i3PlanSection,
    pln1btn: newPln1btnPlanSection,
    pln2: newPln2PlanSection,
    pln2v: newPln2vPlanSection,
    pln2i1: newPln2i1PlanSection,
    pln2i2: newPln2i2PlanSection,
    pln2i3: newPln2i3PlanSection,
    pln2i4: newPln2i4PlanSection,
    pln2btn: newPln2btnPlanSection,
    pln3: newPln3PlanSection,
    pln3v: newPln3vPlanSection,
    pln3i1: newPln3i1PlanSection,
    pln3i2: newPln3i2PlanSection,
    pln3i3: newPln3i3PlanSection,
    pln3i4: newPln3i4PlanSection,
    pln3i5: newPln3i5PlanSection,
    pln3i6: newPln3i6PlanSection,
    pln3btn: newPln3btnPlanSection,
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
          <h2 className='pl-2 text-xl text-blue-800'>Edição da Seção de Planos</h2>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Plano 1:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPln1PlanSection'
              value={newPln1PlanSection}
              onChange={({ target }) => {
                return setNewPln1PlanSection(target.value)
              }}
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Valor: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1vPlanSection'
                value={newPln1vPlanSection}
                onChange={({ target }) => setNewPln1vPlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Itens: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1i1PlanSection'
                value={newPln1i1PlanSection}
                onChange={({ target }) => setNewPln1i1PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1i2PlanSection'
                value={newPln1i2PlanSection}
                onChange={({ target }) => setNewPln1i2PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1i3PlanSection'
                value={newPln1i3PlanSection}
                onChange={({ target }) => setNewPln1i3PlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1btnPlanSection'
                value={newPln1btnPlanSection}
                onChange={({ target }) => setNewPln1btnPlanSection(target.value)}
              />
              <label className='block'>Link do Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln1btnPlanSectionLink'
                value={newPln1btnPlanSectionLink}
                onChange={({ target }) => setNewPln1btnPlanSectionLink(target.value)}
              />
            </div>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Plano 2:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPln2PlanSection'
              value={newPln2PlanSection}
              onChange={({ target }) => {
                return setNewPln2PlanSection(target.value)
              }}
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Valor: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2vPlanSection'
                value={newPln2vPlanSection}
                onChange={({ target }) => setNewPln2vPlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Itens: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2i1PlanSection'
                value={newPln2i1PlanSection}
                onChange={({ target }) => setNewPln2i1PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2i2PlanSection'
                value={newPln2i2PlanSection}
                onChange={({ target }) => setNewPln2i2PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2i3PlanSection'
                value={newPln2i3PlanSection}
                onChange={({ target }) => setNewPln2i3PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2i4PlanSection'
                value={newPln2i4PlanSection}
                onChange={({ target }) => setNewPln2i4PlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2btnPlanSection'
                value={newPln2btnPlanSection}
                onChange={({ target }) => setNewPln2btnPlanSection(target.value)}
              />
              <label>Link do Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln2btnPlanSectionLink'
                value={newPln2btnPlanSectionLink}
                onChange={({ target }) => setNewPln2btnPlanSectionLink(target.value)}
              />
            </div>
          </div>
          <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
            <label className='font-bold'>Plano 3:</label>
            <input
              className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
              id='newPln3PlanSection'
              value={newPln3PlanSection}
              onChange={({ target }) => {
                return setNewPln3PlanSection(target.value)
              }}
            />
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Valor: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3vPlanSection'
                value={newPln3vPlanSection}
                onChange={({ target }) => setNewPln3vPlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label className='font-bold'>Itens: </label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i1PlanSection'
                value={newPln3i1PlanSection}
                onChange={({ target }) => setNewPln3i1PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i2PlanSection'
                value={newPln3i2PlanSection}
                onChange={({ target }) => setNewPln3i2PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i3PlanSection'
                value={newPln3i3PlanSection}
                onChange={({ target }) => setNewPln3i3PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i4PlanSection'
                value={newPln3i4PlanSection}
                onChange={({ target }) => setNewPln3i4PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i5PlanSection'
                value={newPln3i5PlanSection}
                onChange={({ target }) => setNewPln3i5PlanSection(target.value)}
              />
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3i6PlanSection'
                value={newPln3i6PlanSection}
                onChange={({ target }) => setNewPln3i6PlanSection(target.value)}
              />
            </div>
            <div className='border-gray-200 border-2 rounded-xl p-2 mx-2 space-y-2'>
              <label>Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3btnPlanSection'
                value={newPln3btnPlanSection}
                onChange={({ target }) => setNewPln3btnPlanSection(target.value)}
              />
              <label className='block'>Link do Botão:</label>
              <input
                className='bg-gray-100 border-2 w-full rounded-lg py-2 px-1'
                id='newPln3btnPlanSectionLink'
                value={newPln3btnPlanSectionLink}
                onChange={({ target }) => setNewPln3btnPlanSectionLink(target.value)}
              />
            </div>
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

export default PlanSectionForm
