import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { fetchUsers } from './Redux/features/thunk'

function App() {

  const { loading, data, error } = useSelector(state => state.user)

  // console.log(data, "...data");


  const dispatch = useDispatch()

  const handleFetch = () => {
    dispatch(fetchUsers())
  }

  if (loading) return <p className='text-3xl text-center mt-5'> .....loading </p>

  if (error) return <p className='text-3xl text-center mt-5 text-red-900'> {error} </p>

  return (
    <div className='bg-black min-h-screen text-white'>

      <h1> App </h1>

      <button onClick={handleFetch} className='py-1.5 px-5 bg-amber-400 text-black rounded-2xl'> fetch Users </button>


      {
        data.map(({ id, username, name, email }) => (
          <div key={id} className='p-4 bg-amber-950 text-white rounded-2xl mt-5'>
            <h2> Username : {username} </h2>
            <h3> Name : {name} </h3>
            <h3> Email : {email} </h3>
          </div>
        ))
      }

    </div>
  )
}

export default App
