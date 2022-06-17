const HomeSectionPreview = ({ field }) => {
  return (
    <section className="w-full bg-hero bg-cover bg-no-repeat px-6 py-8 pb-12 md:pb-28 bg-bottom">
      <div className="flex flex-col lg:flex-row max-w-screen-xl justify-center items-center gap-16 mx-auto">

        <div className="max-w-2xl">
          
          <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{field.title}</h1>
          
          <div className="space-y-4 mb-8">
            <p>{field.paragraph1}</p>
            <p>{field.paragraph2}</p>
          </div>

          <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
            <a className="block" href="adsfasdfasdasdf">{field.btn}</a>
          </div>
        </div>

        <div>
          <img className="w-96" src={field.image} alt="" />
        </div>
        
      </div>
    </section>
  )
}

export default HomeSectionPreview