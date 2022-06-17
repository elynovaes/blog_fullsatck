const Plans = ({ data3 }) => {
  return (
    <section className="bg-ondas2 bg-cover bg-center px-6 py-60">

      <div className="max-w-screen-xl mx-auto relative">

        <div className="flex flex-row flex-wrap justify-center items-end gap-4 text-white font-bold">

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{data3.pln1PlanSection}</h2>
            <p className="text-center font-light mb-16">R$ {data3.pln1vPlanSection}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {data3.pln1i1PlanSection}</li>
              <li>&#10003; {data3.pln1i2PlanSection}</li>
              <li>&#10003; {data3.pln1i3PlanSection}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href={data3.pln1btnPlanSectionLink}>{data3.pln1btnPlanSection}</a>
            </div>

          </div>

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md md:mb-16">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{data3.pln3PlanSection}</h2>
            <p className="text-center font-light mb-16">R$ {data3.pln3vPlanSection}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {data3.pln3i1PlanSection}</li>
              <li>&#10003; {data3.pln3i2PlanSection}</li>
              <li>&#10003; {data3.pln3i3PlanSection}</li>
              <li>&#10003; {data3.pln3i4PlanSection}</li>
              <li>&#10003; {data3.pln3i5PlanSection}</li>
              <li>&#10003; {data3.pln3i6PlanSection}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href={data3.pln3btnPlanSectionLink}>{data3.pln3btnPlanSection}</a>
            </div>

          </div>

          <div className="bg-txtColor px-6 sm:px-20 py-12 sm:py-20 sm:pb-12 rounded-3xl max-w-md">
            <p className="text-center font-light">plano</p>
            <h2 className="text-center text-4xl">{data3.pln2PlanSection}</h2>
            <p className="text-center font-light mb-16">R$ {data3.pln2vPlanSection}</p>
            <ul className="space-y-2 font-light text-xl mb-16">
              <li>&#10003; {data3.pln2i1PlanSection}</li>
              <li>&#10003; {data3.pln2i2PlanSection}</li>
              <li>&#10003; {data3.pln2i3PlanSection}</li>
              <li>&#10003; {data3.pln2i4PlanSection}</li>
            </ul>

            <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mx-auto">
              <a className="block" href={data3.pln2btnPlanSectionLink}>{data3.pln2btnPlanSection}</a>
            </div>

          </div>
          
        </div>

      </div>

    </section>
  )
}

export default Plans