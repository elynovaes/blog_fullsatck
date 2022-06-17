const TestimonialSectionPreview = ({ field }) => {
  return (
    <section className="px-6 pt-20">
      
      <div className="max-w-screen-xl mx-auto relative">
        
        <h1 className="font-genty text-primary text-3xl md:text-5xl text-center max-w-4xl mx-auto">{field.title}</h1>

        <div className="flex flex-row flex-wrap justify-center items-start gap-4 my-12 text-white font-bold">

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{field.t1p1}
              <br/>
              <br/>
              {field.t1p2}
              <br/>
              <br/>
              {field.t1p3}”</p>
          </div>

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{field.t2p1}
              <br/>
              <br/>
              {field.t2p2}
              <br/>
              <br/>             
              {field.t2p3}”</p>
          </div>

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{field.t3p1} 
              <br/>
              <br/>
              {field.t3p2}
              <br/>
              <br/>
              {field.t3p3}”</p>
          </div>

        </div>

        <img className="hidden lg:block absolute bottom-0 right-12 w-60" src={field.img} alt="asdfasdf"/>

      </div>


    </section>
  )
}

export default TestimonialSectionPreview