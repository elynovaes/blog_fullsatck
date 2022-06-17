const Testimonials = ({ data3 }) => {
  return (
    <section className="px-6 pt-20">
      
      <div className="max-w-screen-xl mx-auto relative">
        
        <h1 className="font-genty text-primary text-3xl md:text-5xl text-center max-w-4xl mx-auto">{data3.titleTestimonialSection}</h1>

        <div className="flex flex-row flex-wrap justify-center items-start gap-4 my-12 text-white font-bold">

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{data3.t1p1TestimonialSection}
              <br/>
              <br/>
              {data3.t1p2TestimonialSection}
              <br/>
              <br/>
              {data3.t1p3TestimonialSection}”</p>
          </div>

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{data3.t2p1TestimonialSection}
              <br/>
              <br/>
              {data3.t2p2TestimonialSection}
              <br/>
              <br/>             
              {data3.t2p3TestimonialSection}”</p>
          </div>

          <div className="bg-testimonial bg-cover bg-center px-6 sm:px-12 py-12 sm:py-20 rounded-3xl max-w-md">
            <p>“{data3.t3p1TestimonialSection} 
              <br/>
              <br/>
              {data3.t3p2TestimonialSection}
              <br/>
              <br/>
              {data3.t3p3TestimonialSection}”</p>
          </div>

        </div>

        <img className="hidden lg:block absolute bottom-0 right-12 w-60" src={data3.imgTestimonialSection} alt="asdfasdf"/>

      </div>


    </section>
  )
}

export default Testimonials