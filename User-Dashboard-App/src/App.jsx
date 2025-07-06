import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import LogIn from './Components/Pages/LogIn'
import User from './User'
import UserDetails from './Components/Pages/UserDetails'
import Search from './Components/Pages/Search'
import NotFound from './Components/Pages/NotFound'
import Dashboard from './Components/Pages/Dashboard'
import PrivateRoute from './Components/PrivateRoute'

function App() {

  const routePaths = [
    { id: '1', path: "/", element: <Home />, label: "Home" },
    { id: '2', path: "/about", element: <About />, label: "About" },
    { id: '3', path: "/dashboard", element: (<PrivateRoute> <Dashboard /></PrivateRoute>), label: "Dashboard" },
    { id: '4', path: "/user", element: <User />, label: "User" },
    { id: '5', path: "/search", element: <Search />, label: "Search" },
    { id: '6', path: "/login", element: <LogIn />, label: "LogIn" },
    { id: '7', path: "/user/:id", element: <UserDetails />, label: "UserDetails" }
  ]

  return (
    <>
      <Navbar routePaths={routePaths} />
      <Routes>
        {
          routePaths.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))
        }
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
