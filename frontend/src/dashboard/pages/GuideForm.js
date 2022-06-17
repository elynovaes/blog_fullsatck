import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import GuideHeroSectionForm from '../components/Forms/GuideHeroSectionForm'
import WthetahealingSectionForm from '../components/Forms/WthetahealingSectionForm'
import BenefitsSectionForm from '../components/Forms/BenefitsSectionForm'
import WlthetahealingSectionForm from '../components/Forms/WlthetahealingSectionForm'
import AvideoSectionForm from '../components/Forms/AvideoSectionForm'
import AboutAuthorSectionForm from '../components/Forms/AboutAuthorSectionForm'
import TestimonialSectionForm from '../components/Forms/TestimonialSectionForm'
import PlanSectionForm from '../components/Forms/PlanSectionForm'
import FaqSectionForm from '../components/Forms/FaqSectionForm'
import ContactSectionForm from '../components/Forms/ContactSectionForm'

const GuideForm = ({ data3, image }) => {
  const [section, setSection] = useState(null)
  const navigate = useNavigate()
  
  const returned = () => setSection(null)

  if(section === null) {
    return (
      <div className='w-screen h-screen overflow-x-hidden text-center px-10 py-4 bg-gradient-to-b from-indigo-500 to-indigo-900'>
        <div onClick={() => navigate('/admin/setting-pages')} className='flex cursor-pointer bg-gradient-to-r from-blue-500 to-blue-900 tranform hover:scale-110 transition duration-300 ease-in-out text-white rounded-lg py-2 px-6 gap-6 w-fit'>
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
        <h1 className='mb-10 text-4xl text-white underline underline-offset-4'>Página Guia</h1>
        <ul className='flex flex-col w-fit mx-auto gap-3 text-white'>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('HeroSection')}>
            <div>Seção Herói</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('WthetahealingSection')}>
            <div>Seção O que é Thetahealing</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('BenefitsSection')}>
            <div>Seção Benefícios</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('WlthetahealingSection')}>
            <div>Seção Por que Aprender</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('AvideoSection')}>
            <div>Seção Sobre os Vídeos</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('AuthorSection')}>
            <div>Seção Sobre o Autor</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('TestimonialSection')}>
            <div>Seção Testemunhos</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('PlanSection')}>
            <div>Seção Planos</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('FaqSection')}>
            <div>Seção Perguntas Frequentes</div>
            <span className=''>
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
          </li>
          <li className='flex items-center justify-center cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-900 transform hover:bg-gradient-to-l hover:scale-110 transition-all duration-300 ease-linear rounded-lg w-96 py-6 px-2 gap-10 text-lg' onClick={() => setSection('ContactSection')}>
            <div>Seção Contato</div>
            <span className=''>
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
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      {section === 'HeroSection' && <GuideHeroSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'WthetahealingSection' && <WthetahealingSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'BenefitsSection' && <BenefitsSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'WlthetahealingSection' && <WlthetahealingSectionForm data3={data3} returned={returned}/>}
      {section === 'AvideoSection' && <AvideoSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'AuthorSection' && <AboutAuthorSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'TestimonialSection' && <TestimonialSectionForm data3={data3} image={image} returned={returned}/>}
      {section === 'PlanSection' && <PlanSectionForm data3={data3} returned={returned}/>}
      {section === 'FaqSection' && <FaqSectionForm data3={data3} returned={returned}/>}
      {section === 'ContactSection' && <ContactSectionForm data3={data3} returned={returned}/>}
    </div>
  )
}

export default GuideForm