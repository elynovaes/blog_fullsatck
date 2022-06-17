import { Link } from "react-router-dom"

const VideoSection = ({ data }) => {
  return (
    <section className="bg-meditar bg-cover bg-center mt-0 md:mt-10  px-6 py-8">

      <div className="text-center max-w-screen-xl mx-auto">
        <h1 className="font-genty text-primary text-2xl md:text-4xl mb-5">{data.titleVideoSection}</h1>
        <div className="space-y-4 max-w-screen-lg mx-auto mb-8">
          <p>{data.paragraph1VideoSection}</p>
          <p>{data.paragraph2VideoSection}</p>
        </div>

        <div className="mb-5">
          <iframe className="mx-auto w-full md:w-3/4 h-64 sm:h-80 md:h-96" src={data.videoVideoSection} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <Link to={'/guide'} className='block w-fit mx-auto'>
          <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            {data.btnVideoSection}
          </div>
        </Link>
        
      </div>
    </section>
  )
}

export default VideoSection