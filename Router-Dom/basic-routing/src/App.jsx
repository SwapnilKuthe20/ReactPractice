import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Profile from './Components/Profile/Profile'
import Navbar from './Components/Navbar'
import Notification from './Components/Notification'
import MyProfile from './Components/Profile/MyProfile'
import ProfileDashboard from './Components/Profile/ProfileDashboard'
import ProfileSeg from './Components/Profile/ProfileSeg'
import ProfileCreate from './Components/Profile/ProfileCreate'
import ProfileUpdate from './Components/Profile/ProfileUpdate'
import Users from './Components/Users'
import UserDetails from './Components/UserDetails'
import NotFound from './Components/NotFound'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>

          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<UserDetails />} />

          <Route path='profile' element={<Profile />} >
            <Route index element={<MyProfile />} />
            <Route path='profileDash' element={<ProfileDashboard />} />
            <Route path='profSeg' element={<ProfileSeg />} />
            <Route path='profileCreate' element={<ProfileCreate />} />
            <Route path='profileUpdate' element={<ProfileUpdate />} />
          </Route>

          <Route path='notification' element={<Notification />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
