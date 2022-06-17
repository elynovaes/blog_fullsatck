import { Link } from "react-router-dom"

const Hero = ({ data }) => {

  return (
    <section className="w-full bg-hero bg-cover bg-no-repeat px-6 py-8 pb-12 md:pb-28 bg-bottom">
      <div className="flex flex-col lg:flex-row max-w-screen-xl justify-center items-center gap-16 mx-auto">

        <div className="max-w-2xl">
          
          <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{data.titleHeroSection}</h1>
          
          <div className="space-y-4 mb-8">
            <p>{data.paragraph1HeroSection}</p>
            <p>{data.paragraph2HeroSection}</p>
          </div>

          <Link to={'/guide'} className='block w-fit'>
            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
              {data.btnHeroSection}
            </div>  
          </Link>
        </div>

        <div>
          <img className="w-96" src={data.imageHeroSection} alt="" />
        </div>
        
      </div>
    </section>
  )
}

export default Hero