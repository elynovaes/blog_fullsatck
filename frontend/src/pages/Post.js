import { useParams, Link } from "react-router-dom"
import parse from 'html-react-parser'

const Post = ({ posts }) => {
  const { slug } = useParams()
  
  const post = posts.find(b => b.slug === slug)

  const compare = (a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }
  
  posts.sort(compare)

  const currentBlogs = posts.slice(0,3)

  return (
    <section className="w-full bg-quemSou bg-cover bg-no-repeat px-6 py-12 bg-bottom">
      
      <div className="relative block lg:grid grid-cols-12 gap-12">
        <div className="flex flex-col max-w-screen-lg sm:px-5 space-y-7 col-span-8">
          <h1 className="font-genty text-primary text-4xl md:text-5xl mb-5">{post.title}</h1>
          
          <div className="my-8">
            <img className="mx-auto w-full" src={post.featuredImage} alt="" />
          </div>

          <div className="">
            {parse(post.content)}
          </div>
        </div>

        <div className="hidden lg:block sticky top-20 col-span-4 h-fit bg-secondary p-5 rounded-3xl">           
          <h2 className="font-bold text-2xl mb-4 text-primary">Post recentes</h2>
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

    </section>
  )
}

export default Post