const MeditationsSectionPreview = ({ field }) => {
  return (
    <section className="bg-gradient-to-b from-secondary to-white px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 max-w-screen-xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 text-white font-bold text-2xl w-full md:w-7/12 text-center">

          <div className="bg-pink-400 h-32 hover:bg-purple-600 ease-in-out duration-300">
            <a href="asdfasd" className="flex w-full h-full justify-center items-center py-10 transform hover:scale-110 ease-in-out duration-300">
              {field.titleImg1}
            </a>
          </div>

          <div className="bg-tertiary h-32 hover:bg-purple-600 ease-in-out duration-300">
            <a href="asdfasd" className="flex w-full h-full justify-center items-center py-10 transform hover:scale-110 ease-in-out duration-300">
              {field.titleImg2}
            </a>
          </div>

          <div className="bg-pink-900 col-span-1 sm:col-span-2 h-32 hover:bg-purple-600 ease-in-out duration-300">
            <a href="asdfasd" className="flex w-full h-full justify-center items-center py-10 transform hover:scale-110 ease-in-out duration-300">
              {field.titleImg3}
            </a>
          </div>
        </div>

        <div className="w-full md:w-5/12">
          <h1 className="font-genty text-primary text-4xl mb-5">{field.title}</h1>
          <p>{field.paragraph1}</p>
          <br />
          <p>{field.paragraph2}</p>
        </div>

      </div>
    </section>
  )
}

export default MeditationsSectionPreview