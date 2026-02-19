import './App.css'
import User from './components/User'
import WithAbortController from './components/WithAbortController'
import WithoutAbortController from './components/WithoutAbortController'

function App() {

  return (
    <div className='bg-black min-h-screen'>

      {/* <User /> */}
      {/* <WithoutAbortController /> */}

      <WithAbortController />


    </div>
  )
}

export default App
