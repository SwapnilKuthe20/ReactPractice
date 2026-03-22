import { Route, Routes } from 'react-router-dom'
import './App.css'
import Debouncing from './Components/Debouncing'
import InfinteScrolling from './Components/InfinteScrolling'
import Dashboard from './Layout/Dashboard'
import Home from './Components/Home'
import InstaFeed from './Components/InstaFeed'

function App() {

  return (
    <div className='bg-black text-white min-h-screen'>
      <Routes>
        <Route path='/' element={<Dashboard />} >
          <Route index element={<Home />} />
          <Route path='debouncing' element={<Debouncing />} />
          <Route path='infinteSrcolling' element={<InfinteScrolling />} />
          <Route path='instafeed' element={<InstaFeed />} />
        </Route>
      </Routes>


    </div>
  )
}

export default App
