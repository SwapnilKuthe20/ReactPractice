import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, decreamentBy, increment, incrementBy } from './features/counterSlice'

function App() {

  // const [count, setCount] = useState("")
  const [amount, setAmount] = useState("")

  const count = useSelector((state) => state.counter.count)
  // console.log(count, "...count");

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleInc = () => {
    // setCount(Number(count + 1))
    dispatch(increment())
  }

  const handleDec = () => {
    // setCount(Number(count - 1))
    dispatch(decreament())
  }

  const HandleIncByAMt = (amt) => {
    // setCount(Number(count + amt))
    dispatch(incrementBy(amt))
  }

  const HandleDecByAMt = (amt) => {
    // setCount(Number(count - amt))
    dispatch(decreamentBy(amt))
  }


  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
      <div>

        <h1 style={{ color: "yellow", margin: "20px" }} > Counter App : Redux </h1>

        <h2>count : {count}</h2>

        <div style={{ textAlign: "center" }}>
          <button onClick={handleInc}> + </button>
          <button onClick={handleDec}> - </button>
        </div>

        <label htmlFor="amount"> Enter Amount :
          <input type="text" id='amount' placeholder='Enter amount...' name='amount' value={amount} onChange={handleChange} style={{ padding: "8px", margin: "12px" }} />
        </label>

        <div style={{ textAlign: "center" }}>
          <button onClick={() => HandleIncByAMt(Number(amount))}> + By {amount} </button>
          <button onClick={() => HandleDecByAMt(Number(amount))}> - By {amount} </button>
        </div>

      </div>
    </div>
  )
}

export default App
