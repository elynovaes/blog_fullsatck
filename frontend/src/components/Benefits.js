const Benefits = ({ data3 }) => {
  return (
    <section className="w-full px-6 pb-12 md:pb-28">
      
      <div className="flex flex-col lg:flex-row-reverse max-w-screen-xl justify-center items-center gap-8 lg:gap-16 mx-auto">

        <div className="w-full lg:w-1/2">
          
          <h1 className="font-genty text-primary text-3xl md:text-5xl mb-5">{data3.titleBenefictSection}</h1>
          
          <div className="ml-4 space-y-4 mb-8">
            <ul className="list-disc space-y-2">
              <li>{data3.item1BenefictSection}</li>
              <li>{data3.item2BenefictSection}</li>
              <li>{data3.item3BenefictSection}</li>
              <li>{data3.item4BenefictSection}</li>
              <li>{data3.item5BenefictSection}</li>
            </ul>
          </div>
        </div>

        <div className="w-9/12 lg:w-4/12">
          <img className="" src={data3.imgBenefictSection} alt="asdfasdfasdf" />
        </div>
        
      </div>

    </section>
  )
}

export default Benefits