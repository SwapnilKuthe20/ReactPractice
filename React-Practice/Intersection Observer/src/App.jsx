import { useState } from 'react'
import './App.css'
import BuggyInfiniteScroll from './Components/BuggyInfiniteScroll'
import InfiniteScrollStaleState from './Components/InfiniteScrollStaleState'
import IntersectionDemo from './Components/IntersectionDemo'
import StaleClosureDemo from './Components/StaleClosureDemo'

function App() {

  const [count, setCount] = useState(0)


  const handleCLick = () => {
    setTimeout(() => {
      console.log(count);
      
    }, 2000)
  }


  return (
    <>
      {/* <IntersectionDemo /> */}

      {/* <BuggyInfiniteScroll /> */}

      {/* <StaleClosureDemo /> */}

      {/* <InfiniteScrollStaleState/> */}

      <h1>{count}</h1>
      <button onClick={handleCLick}> + </button>
    </>
  )
}

export default App
