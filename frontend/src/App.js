import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import homeService from './services/home'
import whoiamService from './services/whoiam'
import meditationService from './services/meditation'
import guideService from './services/guide'
import imagesService from './services/images'
import postService from './services/post'
import loginService from './services/login'

import ScrollToTop from './components/ScrollToTop';

import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Blog from './pages/Blog';
import Post from './pages/Post';
import Home from "./pages/Home"
import WhoIAm from './pages/WhoIAm';
import Meditations from './pages/Metitations';
import Guide from './pages/Guide';

import FormLogin from './dashboard/components/FormLogin';
import AdminPage from './dashboard/pages/AdminPage';
import EditPages from './dashboard/pages/EditPages';
import EditPosts from './dashboard/pages/EditPosts';
import UpdatePost from './dashboard/components/Forms/UpdatePost';
import EditImages from './dashboard/pages/EditImages';
import HomeForm from './dashboard/pages/HomeForm';
import WhoIAMForm from './dashboard/pages/WhoIAmForm';
import MeditationsForm from './dashboard/pages/MeditationsForm';
import GuideForm from './dashboard/pages/GuideForm';

function App() {
  const [data, setData] = useState([])
  const [data1, setData1] = useState(null)
  const [data2, setData2] = useState(null)
  const [data3, setData3] = useState(null)
  const [data4, setData4] = useState(null)
  const [images, setImages] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const [message, setMessage] = useState([null])
  const [timeAnimation, setTimeAnimation] = useState(false)

  useEffect(() => {
    homeService
      .getAll()
      .then(response => {
        setData(response[0])
      })
    whoiamService
      .getAll()
      .then(response => {
        setData1(response[0])
      })
    meditationService
      .getAll()
      .then(response => {
        setData2(response[0])
      })
    guideService
      .getAll()
      .then(response => {
        setData3(response[0])
      })
    imagesService
      .getAll()
      .then(response => {
        setImages(response)
      })
    postService
      .getAll()
      .then(response => {
        setData4(response)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if(loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const userToLogin = await loginService.login({
        username, password
      })

      window.localStorage.setItem(
        'loggedAppUser', JSON.stringify(userToLogin)
      )
      setUser(userToLogin)
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log('wrong credentials')
      setMessage(['ERROR', 'Nome de usuário e/ou senha incorretos'])
      setTimeAnimation(!timeAnimation)
      setTimeout(() => {
        setTimeAnimation(false)
      }, 4000)
      setTimeout(() => {
        setMessage([null])
      }, 5000)
    }
  }

  const removeImage = (id) => {
    const img = images.find(n => n.id === id)
    if(window.confirm(`Delete ${img.name}`)){
      imagesService
      .deleteImage(img.id)
      .then(() => {
        setImages(images.filter(n => n.id !== img.id))
      })
      .catch(error => {
        console.log([
          `Information of ${img.name} has already been removed from server`, 'ERROR'
        ])
      })
    }
  }

  const datasCond = data === null && data1 === null && data2 === null && data3 === null && data4 === null && images === null

  if(datasCond) {
    return (
      <div className="flex justify-center items-center h-screen w-screen gap-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-purple-600 rounded-full" role="status">
        </div>
        <span className='text-xl'>Loading...</span>
      </div>
    )
  }

  if(data4 === null) {
    return (
      <div className="flex justify-center items-center h-screen w-screen gap-4">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 text-purple-600 rounded-full" role="status">
        </div>
        <span className='text-xl'>Loading...</span>
      </div>
    )
  }

  const onChangeUsername = ({ target }) => setUsername(target.value)
  const onChangePassword = ({ target }) => setPassword(target.value)

  const currentUrl = window.location.href

  if(currentUrl.includes('admin')) {
    if(!user) {
      return (
        <FormLogin 
          handleLogin={handleLogin}
          username={username}
          password={password}
          onChangeUsername={onChangeUsername}
          onChangePassword={onChangePassword}
          message={message}
          timeAnimation={timeAnimation}
        />
      )
    }
  }

  return (
    <div className="">
      {currentUrl.includes('admin')
        ? null
        : <Menu />
      }
      <main className={currentUrl.includes('admin') ? null : 'mt-14'}>
        <ScrollToTop>
          <Routes>
            <Route path='/admin/edit-posts/:id' element={<UpdatePost data4={data4} image={images} setData4={setData4}/>} />
            <Route path='/admin/edit-posts' element={<EditPosts data4={data4} images={images} />} />
            <Route path='/admin/edit-images' element={<EditImages images={images} setImages={setImages} removeImage={removeImage}/>} />
            <Route path='/admin/setting-pages' element={<EditPages />} />
            <Route path='/admin/setting-pages/homeForm' element={<HomeForm data={data} image={images}/>} />
            <Route path='/admin/setting-pages/whoiamForm' element={<WhoIAMForm data1={data1} image={images} />} />
            <Route path='/admin/setting-pages/meditationsForm' element={<MeditationsForm data2={data2} image={images} />} />
            <Route path='/admin/setting-pages/guideForm' element={<GuideForm data3={data3} image={images} />} />
            <Route path='/admin' element={<AdminPage setUser={setUser}/>} />

            <Route path='/blog' element={<Blog posts={data4} />}/>
            <Route path='/blog/:slug' element={<Post posts={data4} />}/>
            <Route path='/guide' element={<Guide data3={data3}/>} />
            <Route path='/meditations' element={<Meditations data2={data2} />} />
            <Route path='/whoiam' element={<WhoIAm data1={data1} />}/>
            <Route path='/' element={<Home data={data}/>}/>
          </Routes>
        </ScrollToTop>
      </main>
      {currentUrl.includes('admin')
        ? null
        : <Footer />
      }
    </div>
  );
}

export default App;
