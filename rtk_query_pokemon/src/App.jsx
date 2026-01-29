import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Posts from './Components/Posts'
import PostDetails from './Components/PostDetails'

function App() {

  return (
    <div style={{ width: "100%", margin: "auto", backgroundColor: "black" }}>
      <Routes>
        <Route path='/' element={<Navigate to={"/posts"} />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<PostDetails />} />
      </Routes>
    </div>
  )
}

export default App
