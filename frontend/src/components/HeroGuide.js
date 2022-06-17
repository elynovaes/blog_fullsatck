const HeroGuide = ({ data3 }) => {
  return (
    <section className="w-full bg-cover bg-no-repeat px-6 pt-10" style={{ backgroundImage: `url(${data3.bgHeroSection})` }}>
      
      <div className="flex flex-col text-white lg:flex-row max-w-screen-xl justify-center items-center lg:items-start gap-16 mx-auto">

        <div className="max-w-2xl">

          <div className="w-80 mb-11">
            <img src={data3.imgLogoHeroSection} alt="asdfasdfasdfasd" />
          </div>
          
          <h1 className="font-genty text-4xl md:text-5xl mb-8 max-w-xl">{data3.titleHeroSection}</h1>
          
          
          <p className="mb-12 max-w-lg"><mark className="bg-primary text-white leading-3 text-xl">{data3.paragraphHeroSection}</mark></p>

          <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            <a className="block" href={data3.btnHeroSectionLink}>{data3.btnHeroSection}</a>
          </div>

        </div>

        <div>
          <img className="w-96" src={data3.imgProfileHeroSection} alt="asdfasdfasdf"/>
        </div>
        
      </div>

    </section>
  )
}

export default HeroGuide