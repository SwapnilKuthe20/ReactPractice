import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PropsPractice from './Components/Props/PropsPractice'
import ParentProps from './Components/ChilderProp/ParentProps'
import DefaultProps from './Components/DefaultProps/DefaultProps'
import ParentComp from './Components/PropsDrilling/ParentComp'
import ParentCompContext from './Components/ContextApi/ParentCompContext'

function App() {

  return (
    <>
      {/* <PropsPractice /> */}
      {/* <ParentProps /> */}
      {/* <DefaultProps /> */}
      {/* <ParentComp /> */}
      <ParentCompContext />

    </>
  )
}

export default App
