const PlanSectionPreview = ({ field }) => {
  return (
    <section className="bg-ondas2 bg-cover bg-center px-6 py-60">

      <div className="max-w-screen-xl mx-auto relative">

        <div className="flex flex-row flex-wrap justify-center items-end gap-4 text-white font-bold">

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{field.pln1}</h2>
            <p className="text-center font-light mb-16">R$ {field.pln1v}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {field.pln1i1}</li>
              <li>&#10003; {field.pln1i2}</li>
              <li>&#10003; {field.pln1i3}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href="asdfasdf">{field.pln1btn}</a>
            </div>

          </div>

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md md:mb-16">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{field.pln3}</h2>
            <p className="text-center font-light mb-16">R$ {field.pln3v}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {field.pln3i1}</li>
              <li>&#10003; {field.pln3i2}</li>
              <li>&#10003; {field.pln3i3}</li>
              <li>&#10003; {field.pln3i4}</li>
              <li>&#10003; {field.pln3i5}</li>
              <li>&#10003; {field.pln3i6}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href="asdasdf">{field.pln3btn}</a>
            </div>

          </div>

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{field.pln2}</h2>
            <p className="text-center font-light mb-16">R$ {field.pln2v}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {field.pln2i1}</li>
              <li>&#10003; {field.pln2i2}</li>
              <li>&#10003; {field.pln2i3}</li>
              <li>&#10003; {field.pln2i4}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href="asdfasdf">{field.pln2btn}</a>
            </div>

          </div>
          
        </div>

      </div>

    </section>
  )
}

export default PlanSectionPreview