const BenefitsSectionPreview = ({ field }) => {
  return (
    <section className="w-full px-6 pb-12 md:pb-28">
      
      <div className="flex flex-col lg:flex-row-reverse max-w-screen-xl justify-center items-center gap-8 lg:gap-16 mx-auto">

        <div className="w-full lg:w-1/2">
          
          <h1 className="font-genty text-primary text-3xl md:text-5xl mb-5">{field.title}</h1>
          
          <div className="ml-4 space-y-4 mb-8">
            <ul className="list-disc space-y-2">
              <li>{field.item1}</li>
              <li>{field.item2}</li>
              <li>{field.item3}</li>
              <li>{field.item4}</li>
              <li>{field.item5}</li>
            </ul>
          </div>
        </div>

        <div className="w-9/12 lg:w-4/12">
          <img className="" src={field.image} alt="asdfasdfasdf" />
        </div>
        
      </div>

    </section>
  )
}

export default BenefitsSectionPreview