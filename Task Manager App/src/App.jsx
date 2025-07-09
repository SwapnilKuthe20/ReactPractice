import React from 'react'
import './App.css'
import TaskFilterBar from './Components/TaskFilterBar'
import TaskForm from './Components/TaskForm'
import TaskItems from './Components/TaskItems'
function App() {

  return (
    <>
      <div className='container'>

        <h3 className='tittle'> Task Manager App </h3>

        <TaskForm />
        <TaskFilterBar />
      </div>

    </>
  )
}

export default App
