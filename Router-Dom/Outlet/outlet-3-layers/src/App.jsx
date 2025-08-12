import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Pages/Home'
import Profile from './Components/Pages/Profile/Profile'
import ProfileA from './Components/Pages/Profile/ProfileA'
import ProfileB from './Components/Pages/Profile/ProfileB'
import ProfileC from './Components/Pages/Profile/ProfileC'
import ProfileD from './Components/Pages/Profile/ProfileD'
import ProfileE from './Components/Pages/Profile/ProfileE'
import NotFound from './Components/Pages/NotFound'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import SidebarLayout from './Components/Layout/SidebarLayout'
import ProfileLayout from './Components/Layout/ProfileLayout'

function App() {

  const SidebarRoutes = [
    { id: 1, index: true, element: <Home /> },
    { id: 2, path: 'about', element: <About /> },
    { id: 3, path: 'contact', element: <Contact /> },
  ]

  const ProfileRoutes = [
    { id: 2, path: 'profilea', element: <ProfileA /> },
    { id: 3, path: 'profileb', element: <ProfileB /> },
    { id: 4, path: 'profilec', element: <ProfileC /> },
    { id: 5, path: 'profiled', element: <ProfileD /> },
    { id: 6, path: 'profilee', element: <ProfileE /> },
  ]

  return (
    <div className='w-full h-screen bg-black text-amber-100'>
      <Routes>
        <Route path='/' element={<SidebarLayout />} >
          {
            SidebarRoutes.map(({ id, index, path, element }) => (
              <Route key={id} index={index} path={path} element={element} />
            ))
          }

          <Route path='profile' element={<ProfileLayout />}>
            <Route index element={<Navigate to="profilea" />} />
            {
              ProfileRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))
            }
          </Route>

        </Route>
        <Route path='/home' element={<Navigate to={'/'} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div >
  )
}

export default App
