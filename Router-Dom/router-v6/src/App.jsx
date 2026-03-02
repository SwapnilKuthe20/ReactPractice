import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Component/About'
import Home from './Component/Home'
import Contact from './Component/Contact'
import Profile from './Component/Profile'
import MyProfile from './Component/MyProfile'
import ProfileDashboard from './Component/ProfileDashboard'
import NotFound from './Component/NotFound'
import Login from './Component/Login'

function App() {

  return (
    <div className='bg-black text-white min-h-screen'>

      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} >
            <Route index element={<MyProfile />} />
            <Route path='profiledashboard' element={<ProfileDashboard />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
