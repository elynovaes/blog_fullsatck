import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Form = ({ images, setImages }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault() 

    const data = new FormData()
    data.append('file', selectedFile)
    try {
      if(selectedFile === null) {
        return window.alert('Choose an image')
       }
      await axios.post('http://localhost:3002/api/images', data, {
        headers: { "Content-Type": "multipart/form-data; boundary=testImage" }
      }).then(result => {
        const img = {
          name: result.data.fileName,
          url: `https://drive.google.com/uc?export=view&id=${result.data.fileId}`,
          id: result.data.fileId
        }

        setImages(images.concat(img))
        setSelectedFile(null)
        console.log(images)
      })
    } catch(error) {
      console.log(error)
    }
  }

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit} className='text-black bg-gray-500 w-fit mx-auto absolute bottom-10 rounded-lg px-5 py-5 space-x-5 bg-opacity-70 transform translate-x-1/2 right-1/2 z-50'>
      <label htmlFor='fileImage' className='bg-indigo-500 hover:bg-indigo-900 space-x-6 rounded-lg text-white px-4 py-4 cursor-pointer'>
        <span className='bg-white border-2 border-gray-400 text-black px-6 py-1 rounded-lg'>{selectedFile ? selectedFile.name : '..........'}</span>
        <span className=''>Escolha a imagem</span>
      </label>
      <input type="file" name='file' hidden id='fileImage' onChange={handleFileSelect} className='cursor-pointer'/>
      <input type="submit" value="Carregar imagem" className='bg-indigo-300 px-4 py-3 hover:bg-indigo-700 hover:text-white cursor-pointer rounded-lg'/>
    </form>
  )
};


const EditImages = ({ images, removeImage, setImages }) => {
  const navigate = useNavigate()

  if(images === null) {
    return (
      <div className="flex justify-center items-center h-screen w-screen gap-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-purple-600 rounded-full" role="status">
        </div>
        <span className='text-xl'>Carregando...</span>
      </div>
    )
  }

  return (
    <div className='w-screen h-screen text-white bg-gradient-to-b from-indigo-500 to-indigo-900 overflow-x-hidden'>
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

      <div className={`bg-indigo-300 overflow-y-scroll border-2 rounded-xl overflow-x-hidden absolute top-1/2 left-1/2 z-50 transform -translate-y-1/2 -translate-x-1/2 scroll-smooth p-4 transition ease-in-out space-y-5 w-5/6 h-4/5 mt-10`}>
        <div className='grid grid-cols-5 gap-2 justify-items-center mb-40'>
          {images.map(i => {
            return (
              <div key={i.url} className='flex flex-col gap-1 border-2 border-white p-4 rounded-xl'>
                <div className='border-gray-400 bg-gray-300 border-2 w-32 h-32 flex justify-center items-center rounded-lg p-4'>
                  <img src={i.url} alt={i.name}  className="max-w-96 max-h-28 box-content"/>
                </div>
                <button className='bg-gray-700 hover:bg-gray-400 px-5 py-1 text-white rounded-xl' onClick={() => removeImage(i.id)}>deletar</button>
              </div>
            )
          })}
        </div>
      </div>
      <Form images={images} setImages={setImages} />
    </div>
  )
}

export default EditImages