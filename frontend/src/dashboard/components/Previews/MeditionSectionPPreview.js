const MeditationSectionPPreview = ({ field }) => {
  return (
    <section className="w-full bg-quemSou bg-cover bg-no-repeat px-6 py-12 pb-12 md:pb-28 bg-bottom">
      
      <div className="max-w-screen-xl justify-center items-center gap-16 mx-auto">
        
        <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{field.title}</h1>
  
        <div className="flex flex-col md:flex-row mx-auto">
          
          <div className="w-full md:w-1/3">
            <div className="bg-pink-400 w-full h-44 relative flex justify-center items-center">
              <p className="text-white font-bold text-2xl">{field.titlemed1}</p>
              <svg className="absolute bottom-0 left-1/2  transform -translate-x-1/2 translate-y-3/4" width="50" height="50" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M177.463 354.24C275.198 354.24 354.429 275.01 354.429 177.274C354.429 79.5383 275.198 0.307983 177.463 0.307983C79.7273 0.307983 0.496826 79.5383 0.496826 177.274C0.496826 275.01 79.7273 354.24 177.463 354.24ZM80.05 121.032L177.463 289.757L274.876 121.033L80.05 121.032Z" fill="#8F9227"/>
              </svg>
            </div>
            <div className="py-10 w-full px-4">
              <p>
                {field.med1p1}
                <br />
                {field.med1p2}
              </p>
            </div>
              
          </div>
  
          <div className="w-full md:w-1/3">
            <div className="bg-tertiary w-full h-44 relative flex justify-center items-center">
              <p className="text-white font-bold text-2xl">{field.titlemed2}</p>
              <svg className="absolute bottom-0 left-1/2  transform -translate-x-1/2 translate-y-3/4" width="50" height="50" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M177.463 354.24C275.198 354.24 354.429 275.01 354.429 177.274C354.429 79.5383 275.198 0.307983 177.463 0.307983C79.7273 0.307983 0.496826 79.5383 0.496826 177.274C0.496826 275.01 79.7273 354.24 177.463 354.24ZM80.05 121.032L177.463 289.757L274.876 121.033L80.05 121.032Z" fill="#8F9227"/>
              </svg>
            </div>
            <div className="py-10 w-full px-4">
              <p>
                {field.med2p1}
                <br />
                {field.med2p2}
              </p>
            </div>
              
          </div>
  
          <div className="w-full md:w-1/3">
            <div className="bg-pink-900 w-full h-44 relative flex justify-center items-center">
              <p className="text-white font-bold text-2xl">{field.titlemed3}</p>
              <svg className="absolute bottom-0 left-1/2  transform -translate-x-1/2 translate-y-3/4" width="50" height="50" viewBox="0 0 355 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M177.463 354.24C275.198 354.24 354.429 275.01 354.429 177.274C354.429 79.5383 275.198 0.307983 177.463 0.307983C79.7273 0.307983 0.496826 79.5383 0.496826 177.274C0.496826 275.01 79.7273 354.24 177.463 354.24ZM80.05 121.032L177.463 289.757L274.876 121.033L80.05 121.032Z" fill="#8F9227"/>
              </svg>
            </div>
            <div className="py-10 w-full px-4">
              <p>
                {field.med3p1}
                <br />
                {field.med3p2}
              </p>
            </div>
              
          </div>
  
        </div>

      </div>

    </section>
  )
}

export default MeditationSectionPPreview