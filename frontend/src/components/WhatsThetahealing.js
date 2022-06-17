const WhatsThetahealing = ({ data3 }) => {
  return (
    <section className="w-full px-6 py-12 md:pb-28">
      
      <div className="flex flex-col lg:flex-row flex-nowrap max-w-screen-xl justify-center items-center gap-8 lg:gap-16 mx-auto">

        <div className="w-full lg:w-1/2">
          
          <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{data3.titleWthetahealingSection}</h1>
          
          <div className="space-y-4 mb-8">
            <p>{data3.paragraph1WthetahealingSection}</p>
            <p>{data3.paragraph2WthetahealingSection}</p>
          </div>
        </div>

        <div className="w-9/12 lg:w-4/12">
          <img className="mx-auto" src={data3.imgWthetahealingSection} alt="alog" />
        </div>
        
      </div>

    </section>
  )
}

export default WhatsThetahealing