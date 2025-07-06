import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsPractice from './Components/Props/PropsPractice'
import ParentProps from './Components/ChilderProp/ParentProps'
import DefaultProps from './Components/DefaultProps/DefaultProps'
import ParentComp from './Components/PropsDrilling/ParentComp'
import ParentCompContext from './Components/ContextApi/ParentCompContext'
import LiftStateParent from './Components/LiftingStateUp/LiftStateParent'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/ReactRouterDom/Home'
import About from './Components/ReactRouterDom/About'
import Contact from './Components/ReactRouterDom/Contact'
import Navbar from './Components/ReactRouterDom/Navbar'

function App() {

  const routePath = [
    { path: '/', element: < Home /> },
    { path: '/about', element: < About /> },
    { path: '/contact', element: <Contact /> },
  ]

  return (
    <>
      {/* <PropsPractice /> */}
      {/* <ParentProps /> */}
      {/* <DefaultProps /> */}
      {/* <ParentComp /> */}
      {/* <ParentCompContext /> */}
      {/* <LiftStateParent /> */}
      <Navbar />
      <Routes>
        {
          routePath.map(({ path, element }, ind) => (
            <Route key={ind} path={path} element={element} />
          ))
        }

      </Routes>





    </>
  )
}

export default App
