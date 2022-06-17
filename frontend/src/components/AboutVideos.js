const AboutVideos = ({ data3 }) => {
  return (
    <section className="bg-gradient-to-b from-gray-300 md:from-white to-pink-900 w-full px-6 pt-12 pb-44 lg:pb-0 relative z-0">
      
      <div className="max-w-screen-xl mx-auto text-center relative">
        
        <h1 className="font-genty text-primary text-3xl md:text-5xl mb-5">{data3.titleAvideoSection}</h1>

        <p className="max-w-lg mx-auto">{data3.paragraphAvideoSection}</p>
        
        <svg className="hidden lg:block absolute bottom-0 right-1/2 transform translate-x-1/2"  width="400" height="1294" viewBox="0 0 465 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M220 7.5C220 3.35785 216.642 0 212.5 0C208.358 0 205 3.35785 205 7.5V152.5H141C136.858 152.5 133.5 155.858 133.5 160V212.098C122.797 215.317 115 225.248 115 237C115 248.752 122.797 258.683 133.5 261.902V322C133.5 326.142 136.858 329.5 141 329.5H431.5V396.098C420.797 399.317 413 409.248 413 421C413 432.752 420.797 442.683 431.5 445.902V509.5H26C21.8578 509.5 18.5 512.858 18.5 517V572.098C7.79691 575.317 0 585.248 0 597C0 608.752 7.79691 618.683 18.5 621.902V679C18.5 683.142 21.8578 686.5 26 686.5H334V762.254C323.555 765.628 316 775.432 316 787C316 798.568 323.555 808.372 334 811.746V881.5H141C136.858 881.5 133.5 884.858 133.5 889V959.098C122.797 962.317 115 972.248 115 984C115 995.752 122.797 1005.68 133.5 1008.9V1045C133.5 1049.14 136.858 1052.5 141 1052.5H260.5V1286C260.5 1290.14 263.858 1293.5 268 1293.5C272.142 1293.5 275.5 1290.14 275.5 1286V1045C275.5 1040.86 272.142 1037.5 268 1037.5H148.5V1008.9C159.203 1005.68 167 995.752 167 984C167 972.248 159.203 962.317 148.5 959.098V896.5H341.5C345.642 896.5 349 893.142 349 889V812.047C359.959 808.99 368 798.934 368 787C368 775.066 359.959 765.01 349 761.953V679C349 674.858 345.642 671.5 341.5 671.5H33.5V621.902C44.2031 618.683 52 608.752 52 597C52 585.248 44.2031 575.317 33.5 572.098V524.5H439C443.142 524.5 446.5 521.142 446.5 517V445.902C457.203 442.683 465 432.752 465 421C465 409.248 457.203 399.317 446.5 396.098V322C446.5 317.858 443.142 314.5 439 314.5H148.5V261.902C159.203 258.683 167 248.752 167 237C167 225.248 159.203 215.317 148.5 212.098V167.5H212.5C216.642 167.5 220 164.142 220 160V7.5Z" fill="url(#paint0_linear_105_755)"/>
          <defs>
          <linearGradient id="paint0_linear_105_755" x1="250.5" y1="285.5" x2="232.5" y2="1293.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AE508E" stopOpacity="0.54"/>
          <stop offset="1" stopColor="#4A1F37"/>
          </linearGradient>
          </defs>
        </svg>

        <img className="hidden lg:block absolute top-52 right-52" src={data3.imgAvideoSection} alt="asdfasdfsa" />

        <div className="mt-10 lg:mt-28 pb-10 relative h-auto lg:h-576px grid grid-cols-1 md:grid-cols-2 lg:block justify-items-center gap-10">

          <div className="text-white flex flex-col justify-center w-80 gap-2 static lg:absolute top-12 left-5">
            <h3 className="font-bold text-2xl">{data3.titlev1AvideoSection}</h3>
            <img className="w-3/4 mx-auto" src={data3.imgv1AvideoSection} alt="dadfasdf" />
            <p>{data3.pv1AvideoSection}</p>
          </div>

          <div className="text-white flex flex-col justify-center w-80 gap-2 static lg:absolute top-48 right-0">
            <h3 className="font-bold text-2xl">{data3.titlev2AvideoSection}</h3>
            <img className="w-3/4 mx-auto" src={data3.imgv2AvideoSection} alt="asdfasdfasdf" />
            <p>{data3.pv2AvideoSection}</p>
          </div>

          <div className="text-white flex flex-col justify-center w-80 gap-2 static lg:absolute top-96 left-0">
            <h3 className="font-bold text-2xl">{data3.titlev3AvideoSection}</h3>
            <img className="w-3/4 mx-auto" src={data3.imgv3AvideoSection} alt="asdfasdfsa" />
            <p>{data3.pv3AvideoSection}</p>
          </div>

          <div className="text-white flex flex-col justify-center w-80 gap-2 static lg:absolute bottom-96 right-20">
            <h3 className="font-bold text-2xl">{data3.titlev4AvideoSection}</h3>
            <img className="w-3/4 mx-auto" src={data3.imgv4AvideoSection} alt="asdfasdfsa" />
            <p>{data3.pv4AvideoSection}</p>
          </div>

          <div className="text-white flex flex-col justify-center w-80 gap-2 static lg:absolute bottom-48 left-20">
            <h3 className="font-bold text-2xl">{data3.titlev5AvideoSection}</h3>
            <img className="w-3/4 mx-auto" src={data3.imgv5AvideoSection} alt="asdfasdfsa" />
            <p>{data3.pv5AvideoSection}</p>
          </div>
        </div>

      </div>


    </section>
  )
}

export default AboutVideos