import { useEffect } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import { fetchPosts } from './Store/features/postsSlice'
import { useDispatch, useSelector } from 'react-redux'

function App() {

  const { status, posts, error } = useSelector((state) => state.postReducer)
  // console.log(status, posts, error, "...postsStore");

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])


  if (status == "loading") return <p className='text-5xl h-screen bg-amber-800 text-amber-100 text-center pt-6'> ....loading </p>
  if (error) return <p className='text-5xl h-screen bg-amber-800 text-amber-100 text-center'> Error : {error} </p>

  return (
    <div className='w-full bg-black text-amber-100' >
      <h1 className='text-center p-4'> Scenario 1 – Fetch a list of posts </h1>
      <div className='flex items-center justify-center flex-wrap'>
        {
          posts?.map(({ userId, id, title, body }) => (
            <div key={id} className='w-96 p-3 m-4 rounded bg-blue-950 text-blue-200'>
              <h1> UserId : {userId} </h1>
              <h2> title : {title} </h2>
              <h2> body : {body} </h2>
            </div>
          ))
        }
      </div>
      <ToastContainer theme='dark' />
    </div>
  )
}

export default App
