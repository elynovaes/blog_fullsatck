const WlthetathealingSectionPreview = ({ field }) => {
  return (
    <section className="bg-meditando bg-cover bg-center w-full px-6 py-12">
      
      <div className="flex flex-col md:flex-row max-w-screen-xl justify-center items-center sm:items-end gap-8 mx-auto">

        <div className="w-full lg:w-1/2">
          
          <h1 className="font-genty mb-5"><mark className="bg-primary text-white text-4xl sm:text-5xl sm:leading-tight">{field.title}</mark></h1>
          
          <div className="flex space-y-4 mb-8 gap-6">
            <svg className="hidden sm:block" width="123" height="343" viewBox="0 0 123 343" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path e="evenodd" clipRule="evenodd" d="M0.5 3C0.5 1.61938 1.61929 0.5 3 0.5H110.5C111.881 0.5 113 1.61938 113 3V34.25C118.706 35.4082 123 40.4526 123 46.5C123 52.5474 118.706 57.5918 113 58.75V110.25C118.706 111.408 123 116.453 123 122.5C123 128.547 118.706 133.592 113 134.75V192.25C118.706 193.408 123 198.453 123 204.5C123 210.547 118.706 215.592 113 216.75V271.25C118.706 272.408 123 277.453 123 283.5C123 289.547 118.706 294.592 113 295.75V340C113 341.381 111.881 342.5 110.5 342.5C109.119 342.5 108 341.381 108 340V295.75C102.294 294.592 98 289.547 98 283.5C98 277.453 102.294 272.408 108 271.25V216.75C102.294 215.592 98 210.547 98 204.5C98 198.453 102.294 193.408 108 192.25V134.75C102.294 133.592 98 128.547 98 122.5C98 116.453 102.294 111.408 108 110.25V58.75C102.294 57.5918 98 52.5474 98 46.5C98 40.4526 102.294 35.4082 108 34.25V5.5H3C1.61929 5.5 0.5 4.38062 0.5 3Z" fill="#AE508E"/>
            </svg>
            <div className="pt-2">
              <ul className="text-white text-2xl sm:text-3xl space-y-11">
                <li>{field.item1}</li>
                <li>{field.item2}</li>
                <li>{field.item3}</li>
                <li>{field.item4}</li>
              </ul>
            </div>              
          </div>
        </div>

        <div className="w-full lg:w-4/12">
          <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-12 sm:px-20 rounded mx-auto">
            <a className="block" href="asdfasdfasdf">{field.btn}</a>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default WlthetathealingSectionPreview