import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Login from './Components/Login'
import Contact from './Components/Contact'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Layout from './Components/Layout'
import ProtectedRoute from './ProtectedRoute'
import Logout from './Components/Logout'
import Admin from './Components/Admin'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<Home />} /> */}

          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='contact' element={<Contact />} />

          <Route element={<ProtectedRoute />}>
            <Route path='about' element={<About />} />
            <Route path='dashboard' element={<Dashboard />} />

            <Route path='admin' element={<Admin />} />

          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App
