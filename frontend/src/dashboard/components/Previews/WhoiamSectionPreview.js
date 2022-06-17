const WhoiamSectionPreview = ({ field }) => {
  return (
    <section className="w-full bg-quemSou bg-cover bg-no-repeat px-6 py-12 pb-12 md:pb-28 bg-bottom">
      
      <div className="flex flex-col lg:flex-row max-w-screen-xl justify-center items-center gap-16 mx-auto">

        <div className="max-w-xl">
          
          <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{field.title}</h1>
          
          <div className="space-y-4 mb-8">
            <p>{field.paragraph1}</p>
            <p>{field.paragraph2}</p>
          </div>

          <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            <a className="block" href="asdfasdfasdf">{field.btn}</a>
          </div>
        </div>

        <div className="relative w-64 h-72  sm:w-96 sm:h-108 mt-10">
          <img className="w-full h-full rounded-3xl absolute z-10" src={field.image} alt="" />
          <div className="bg-primary h-full w-full mr-12 absolute rounded-3xl -top-10 right-1 z-0 "></div>
        </div>
        
      </div>

    </section>
  )
}

export default WhoiamSectionPreview