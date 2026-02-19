import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { Add, DecBy, IncBy, Sub } from './App/counterSlice'

function App() {
  const [amount, setAmount] = useState("")

  const count = useSelector(state => state.counter.value)
  // console.log(count, "...count");


  const dispatch = useDispatch()

  const handleInc = () => {
    dispatch(Add())
  }

  const handleDec = () => {
    dispatch(Sub())
  }

  const handleIncAm = (amount) => {
    dispatch(IncBy(amount))
  }

  const handleDecAm = (amount) => {
    dispatch(DecBy(amount))
  }

  return (
    <div>
      <h2> Counter App </h2>

      <h3> Count : {count} </h3>

      <button onClick={handleInc} style={{ display: "block", margin: "10px" }}> + </button>
      <button onClick={handleDec} style={{ display: "block", margin: "10px" }}> - </button>

      <input type="text" onChange={(e) => setAmount(e.target.value)} value={amount} />

      <button onClick={() => handleIncAm(Number(amount))} style={{ display: "block", margin: "10px" }}> + by { } </button>
      <button onClick={() => handleDecAm(Number(amount))} style={{ display: "block", margin: "10px" }}> - by { } </button>

    </div>
  )
}

export default App
