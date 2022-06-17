const WindowImages = ({ images, open, setSelected, setOpen, changeSelected }) => {
  const scale = open === false ? 'scale-0' : 'scale-100'

  if(images === null) {
    return (
      <div className="flex justify-center items-center h-screen w-screen gap-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-purple-600 rounded-full" role="status">
        </div>
        <span className='text-xl'>Loading...</span>
      </div>
    )
  }

  return (
    <div className={`bg-gray-100 w-5/6 h-3/4 overflow-y-scroll border-8 rounded-xl overflow-x-hidden border-gray-400 absolute top-1/2 left-1/2 z-50 transform -translate-y-1/2 -translate-x-1/2 scroll-smooth p-4 ${scale} transition ease-in-out space-y-5 scrollbar-thin scrollbar-thumb-gray-600 scroll-m-2`}>
      <div className="relative">
        <div className="sticky top-0 left-full w-fit transform translate-x-1 -translate-y-2 -mb-5 z-30">
            <button type='buttom' className='bg-red-900 px-3 py-1 rounded-full text-white hover:bg-red-500 transform hover:scale-110 transition duration-100 ease-linear' onClick={() => setOpen(false)}>x</button>
        </div>
        <form onSubmit={changeSelected} className=''>
          <div className='flex flex-row flex-wrap justify-between'>
            {images.map(i => {
              return (
                <div key={i.url} className='w-44 h-44 m-4 border-gray-400 border-2 rounded-xl bg-gray-300 relative overflow-y-hidden p-2'>
                  <img src={i.url} alt={i.name} className='w-fit h-fit' />
                  <input type='radio' value={i.url} name='images' id={i.url} onChange={(e) => setSelected(e.target.value)} className='absolute bottom-2 right-2 transform scale-150'/>
                  <label className='hidden' htmlFor={i.url}>{i.url}</label>
                </div>
              )
            })}
          </div>
          <div className="sticky bottom-0 left-full w-fit">
            <button type='submit' className='bg-green-900 px-10 py-1 rounded-lg text-white hover:bg-green-500 transform hover:scale-110 transition duration-100 ease-linear' onClick={() => setOpen(false)}>Ok</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default WindowImages