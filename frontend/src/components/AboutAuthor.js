const AboutAuthor = ({ data3 }) => {
  const bgSize = {
    backgroundSize: '130% 100%'
  }

  return (
    <section className="w-full bg-ondas bg- bg-no-repeat -mt-44 lg:-mt-44 px-6 py-60 sm:py-44 bg-bottom relative z-10" style={bgSize}>
      
      <div className="flex flex-col-reverse lg:flex-row-reverse max-w-screen-xl justify-center items-center gap-16 mx-auto">

        <div className="max-w-xl">
          
          <svg  className="ml-0 sm:-ml-8 mb-6 text-pink-900 w-12 sm:w-24" width="106" height="77" viewBox="0 0 106 77" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 54.8575C0 50.8922 6.16407 34.7009 18.4922 6.28355C20.0332 2.7589 22.8951 0.996582 27.0779 0.996582C30.6002 0.996582 33.7923 2.09804 36.6542 4.30095C39.7362 6.28354 41.2773 8.92702 41.2773 12.2314C41.2773 13.3328 40.947 14.8749 40.2866 16.8575L32.3614 34.3705C40.5067 38.7763 44.5794 45.4951 44.5794 54.527C44.5794 60.6951 42.378 65.9821 37.9751 70.3879C33.7923 74.7937 28.6189 76.9966 22.4548 76.9966C16.2908 76.9966 11.0073 74.7937 6.60436 70.3879C2.20145 65.9821 0 60.8053 0 54.8575ZM61.4206 54.8575C61.4206 50.8922 67.5846 34.7009 79.9128 6.28355C81.4538 2.7589 84.3157 0.996582 88.4984 0.996582C91.8006 0.996582 94.9927 2.09804 98.0748 4.30095C101.157 6.28354 102.698 8.92702 102.698 12.2314C102.698 13.5531 102.258 15.0951 101.377 16.8575L93.7819 34.3705C101.927 38.7763 106 45.4951 106 54.527C106 60.6951 103.799 65.9821 99.3956 70.3879C95.2129 74.7937 90.0395 76.9966 83.8754 76.9966C77.7113 76.9966 72.4278 74.7937 68.0249 70.3879C63.622 65.9821 61.4206 60.8053 61.4206 54.8575Z" fill="#883563"/>
            </svg>
          
          <div className="space-y-4 mb-8 text-white">
            <p>{data3.p1AuthorSection}</p>
            <p>{data3.p2AuthorSection}</p>
            <p>{data3.p3AuthorSection}</p>
            <p>{data3.p4AuthorSection}</p>
          </div>

          <div className="space-y-2 mb-10">
            <p className="font-extrabold text-3xl text-pink-900">{data3.nameAuthorSection}</p>
            <p><mark className="bg-pink-900 text-white p-2">{data3.propAuthorSection}</mark></p>
          </div>

          <div className="bg-tertiary w-full hover:bg-pink-600 text-white font-bold rounded">
            <a className="block w-full py-2 px-10 text-center" href={data3.btnAuthorSectionLink}>{data3.btnAuthorSection}</a>
          </div>
        </div>

        <div className="relative w-64 h-72  sm:w-96 sm:h-108 mt-10">
          <img className="w-full h-full rounded-3xl absolute z-10" src={data3.imgAuthorSection} alt="asdfasdf" />
          <div className="bg-primary h-full w-full mr-12 absolute rounded-3xl -top-10 right-1 z-0 "></div>
        </div>
        
      </div>

    </section>
  )
}

export default AboutAuthor