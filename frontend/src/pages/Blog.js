import { Link } from "react-router-dom"
import moment from "moment"
import 'moment/min/locales.min'
moment.locale('pt-br')

const Blog = ({ posts }) => {

  const compare = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }
  
  posts.sort(compare)

  const currentBlogs = posts.slice(0,3)

  return (
    <section className="w-full bg-cover bg-no-repeat px-6 py-12 bg-bottom bg-quemSou">
      
      <div className="flex flex-col max-w-screen-xl">

        <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">Blog</h1>

        <div className="relative lg:grid grid-cols-12 gap-12">
          <div className="max-w-screen-lg sm:px-5 space-y-7 col-span-8">
            {posts.map(post => {
              return (
                <div className="flex flex-col md:flex-row gap-6 justify-center items-start bg-secondary rounded-3xl p-10" key={post.id}>
                  <div className="relative rounded-3xl overflow-hidden w-full md:w-1/2 h-48 sm:h-full">
                    <div className="bg-gray-500 w-full h-96"></div>
                    <img className="absolute top-0 left-0 block w-full h-full sm:h-full tranform scale-125" src={post.featuredImage} alt="aasdfasdf" />
                  </div>

                  <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold text-primary" >{post.title}</h2>
                    <div className="flex flex-nowrap items-center">
                      <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3 9.35184C11.8336 8.88997 12.2616 8.31872 12.5549 7.67686C12.8482 7.035 13 6.33755 13 5.63184C13 4.30575 12.4732 3.03398 11.5355 2.0963C10.5979 1.15862 9.32608 0.631836 8 0.631836C6.67392 0.631836 5.40215 1.15862 4.46447 2.0963C3.52678 3.03398 3 4.30575 3 5.63184C2.99999 6.33755 3.1518 7.035 3.44513 7.67686C3.73845 8.31872 4.16642 8.88997 4.7 9.35184C3.30014 9.98572 2.11247 11.0094 1.27898 12.3004C0.445495 13.5914 0.00147185 15.0951 0 16.6318C0 16.8971 0.105357 17.1514 0.292893 17.3389C0.48043 17.5265 0.734784 17.6318 1 17.6318C1.26522 17.6318 1.51957 17.5265 1.70711 17.3389C1.89464 17.1514 2 16.8971 2 16.6318C2 15.0405 2.63214 13.5144 3.75736 12.3892C4.88258 11.264 6.4087 10.6318 8 10.6318C9.5913 10.6318 11.1174 11.264 12.2426 12.3892C13.3679 13.5144 14 15.0405 14 16.6318C14 16.8971 14.1054 17.1514 14.2929 17.3389C14.4804 17.5265 14.7348 17.6318 15 17.6318C15.2652 17.6318 15.5196 17.5265 15.7071 17.3389C15.8946 17.1514 16 16.8971 16 16.6318C15.9985 15.0951 15.5545 13.5914 14.721 12.3004C13.8875 11.0094 12.6999 9.98572 11.3 9.35184V9.35184ZM8 8.63184C7.40666 8.63184 6.82664 8.45589 6.33329 8.12624C5.83994 7.7966 5.45542 7.32806 5.22836 6.77989C5.0013 6.23171 4.94189 5.62851 5.05764 5.04657C5.1734 4.46462 5.45912 3.93007 5.87868 3.51052C6.29824 3.09096 6.83279 2.80524 7.41473 2.68948C7.99667 2.57372 8.59987 2.63313 9.14805 2.8602C9.69623 3.08726 10.1648 3.47178 10.4944 3.96513C10.8241 4.45847 11 5.03849 11 5.63184C11 6.42749 10.6839 7.19055 10.1213 7.75316C9.55871 8.31577 8.79565 8.63184 8 8.63184ZM17.74 8.95184C18.38 8.23117 18.798 7.34089 18.9438 6.38818C19.0896 5.43546 18.9569 4.46091 18.5618 3.58184C18.1666 2.70276 17.5258 1.95663 16.7165 1.43326C15.9071 0.909886 14.9638 0.631578 14 0.631836C13.7348 0.631836 13.4804 0.737193 13.2929 0.924729C13.1054 1.11227 13 1.36662 13 1.63184C13 1.89705 13.1054 2.15141 13.2929 2.33894C13.4804 2.52648 13.7348 2.63184 14 2.63184C14.7956 2.63184 15.5587 2.94791 16.1213 3.51052C16.6839 4.07313 17 4.83619 17 5.63184C16.9986 6.15708 16.8593 6.67274 16.5961 7.12726C16.3328 7.58178 15.9549 7.95922 15.5 8.22184C15.3517 8.30736 15.2279 8.4295 15.1404 8.57658C15.0528 8.72365 15.0045 8.89074 15 9.06184C14.9958 9.2316 15.0349 9.39963 15.1137 9.55009C15.1924 9.70056 15.3081 9.82849 15.45 9.92184L15.84 10.1818L15.97 10.2518C17.1754 10.8236 18.1923 11.7278 18.901 12.8582C19.6096 13.9885 19.9805 15.2978 19.97 16.6318C19.97 16.8971 20.0754 17.1514 20.2629 17.3389C20.4504 17.5265 20.7048 17.6318 20.97 17.6318C21.2352 17.6318 21.4896 17.5265 21.6771 17.3389C21.8646 17.1514 21.97 16.8971 21.97 16.6318C21.9782 15.0973 21.5938 13.5861 20.8535 12.2419C20.1131 10.8977 19.0413 9.76515 17.74 8.95184V8.95184Z" fill="#4A0056"/>
                      </svg>
                      <p className="ml-2">Xênia</p>
                      <p className="ml-4">{moment(post.createdAt).format('DD MMMM, YYYY')}</p>
                    </div>

                    <div className="space-y-4 my-8">
                      <p>{post.excerpt}</p>
                    </div>
          
                    <div className="bg-tertiary w-max hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">
                      <Link to={`/blog/${post.slug}`}>Ler mais</Link>
                    </div>
                  </div>
                </div>
              )
            })}
            
          </div>
          
          <div className="hidden lg:block sticky top-20 col-span-4 h-fit bg-secondary p-5 rounded-3xl">           
            <h2 className="font-bold text-2xl mb-4 text-primary break-before-all">Post recentes</h2>
            <div className="space-y-5">
              {currentBlogs.map(p => {
                return (
                  <Link key={p.id} to={`/blog/${p.slug}`} className="flex gap-5 transform hover:scale-105 transition duration-100 ease-linear">
                    <div className="w-60 h-20 rounded-3xl overflow-hidden"><img src={p.featuredImage} alt='' className="abosolute top-0 left-0 transform scale-150"/></div>
                    <h4 className="w-96">{p.title}</h4>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Blog