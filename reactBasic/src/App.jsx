import { useState } from 'react'
import Massage from './Components/massage'
import Student from './Components/Student'
import Counter from './Components/Counter'
import CounterPrev from './Components/CounterPrev'
import LikeButton from './Components/LikeButton'
import ShowHide from './Components/ShowHideText'
import DarkLight from './Components/DarkLight'
import LogIn from './Components/LogIn'
import StudentList from './Components/StudentList'

function App() {

  return (
    <>
      {/* <h1>Hello world from React !!</h1>
      <h2>Welcome to your first React App..!!</h2>
      <Massage name="Swapnil" profile="Webdev" />
      <Massage name="Prasad" profile="Reactjs" />

      <Student name="Swap" age={30} course="reactJs" />
      <Student name="Neel" age={28} course="Javascript" /> */}

      {/* <Counter /> */}
      {/* <CounterPrev /> */}
      {/* <LikeButton /> */}
      {/* <ShowHide /> */}
      {/* <DarkLight /> */}
      {/* <LogIn /> */}
        <StudentList/>


    </>
  )
}

export default App
