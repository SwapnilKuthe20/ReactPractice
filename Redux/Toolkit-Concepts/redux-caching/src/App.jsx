import { Route, Routes } from 'react-router-dom'
import './App.css'
import FetchPosts from './Components/FetchPosts'
import TotalPost from './Components/TotalPost'
import FetchProducts from './Components/FetchProducts'

function App() {

  return (
    <div className='min-h-screen bg-black text-amber-200'>

      <Routes>
        <Route path='/' />
        <Route path={'fetchPost'} element={<FetchPosts />} />
        <Route path={'totalPost'} element={<TotalPost />} />
        <Route path={'products'} element={<FetchProducts />} />
      </Routes>


    </div>
  )
}

export default App
