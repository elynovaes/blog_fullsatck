import { Link } from 'react-router-dom'

const AdminPage = ({ setUser }) => {

  const handleLogout = () => {
    setUser(null)
    return window.localStorage.clear()
  }

  return (
    <div className='flex justify-center items-center gap-20 w-screen h-screen text-white bg-gradient-to-b from-indigo-500 to-indigo-900'>
      <button onClick={handleLogout} className='flex justify-between cursor-pointer bg-orange-300 hover:bg-orange-500 rounded-lg py-2 px-10 absolute top-10 left-10'>
        <div>Sair</div>
      </button>
      <Link to={'/admin/setting-pages'} className='flex justify-center items-center w-80 h-56 border-4 border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-500 p-4 text-3xl font-bold'>
        Editar páginas
      </Link>
      <Link to={'/admin/edit-posts'} className='flex justify-center items-center w-80 h-56 border-4 border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-500 p-4 text-3xl font-bold'>
        Editar posts
      </Link>
      <Link to={'/admin/edit-images'} className='flex justify-center items-center w-80 h-56 border-4 border-gray-200 rounded-xl cursor-pointer hover:bg-indigo-500 p-4 text-3xl font-bold'>
        Editar imagens
      </Link>
    </div>
  )
}

export default AdminPage
