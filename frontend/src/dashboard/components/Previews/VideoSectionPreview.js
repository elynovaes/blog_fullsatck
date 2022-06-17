const VideoSectionPreview = ({ field }) => {
  return (
    <section className="bg-meditar bg-cover bg-center mt-0 md:mt-10  px-6 py-8">

      <div className="text-center max-w-screen-xl mx-auto">
        <h1 className="font-genty text-primary text-2xl md:text-4xl mb-5">{field.title}</h1>
        <div className="space-y-4 max-w-screen-lg mx-auto mb-8">
          <p>{field.paragraph1}</p>
          <p>{field.paragraph2}</p>
        </div>

        <div className="mb-5">
          <iframe className="mx-auto w-full md:w-3/4 h-64 sm:h-80 md:h-96" src={`${field.urlVideo}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
          <a className="block" href="asdfasdfasfasdfd">{field.btn}</a>
        </div>
        
      </div>
      
    </section>
  )
}

export default VideoSectionPreview