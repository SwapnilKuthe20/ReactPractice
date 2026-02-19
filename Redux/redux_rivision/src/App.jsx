import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, decreamentBy, increament, increamentBy } from './Features/counterSlice'

function App() {

  const [value, setValue] = useState("");
  const [err, setErr] = useState("")

  const countState = useSelector((state) => state.counter.count)
  const dispatch = useDispatch()

  console.log(countState, "....counterState");

  const handleChnage = (e) => {
    let value = e.target.value

    if (value === "") {
      setValue("")
    } else {
      setValue(Number(value))
      setErr("")
    }
  }

  const handleInc = () => {
    dispatch(increament())
    if (countState >= 0) {
      setErr("")
    }
  }

  const handleDec = () => {
    if (countState > 0) {
      dispatch(decreament())
    } else {
      setErr("Count must not be in minus")
    }
  }

  const handleIncBy = (value) => {
    dispatch(increamentBy(value))
    setValue('')
    if (countState >= 0) {
      setErr("")
    }
  }

  const handleDecBy = (value) => {
    if (countState - value >= 0) {
      dispatch(decreamentBy(value))
      setValue("")
    } else {
      setErr("Count must not be in minus")
    }
  }

  return (
    <div style={{ width: "100%", backgroundColor: "black", color: "white", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "darksalmon", flexDirection: "column", gap: "10px", padding: "15px", borderRadius: "10px" }}>
        <h1 style={{ color: "paleturquoise" }}> Counter App </h1>

        <h2> Count : {countState} </h2>

        <button onClick={handleInc} > + </button>
        <button onClick={handleDec} > - </button>

        <label htmlFor="count"> Enter Count : </label>
        <input type="text" id='count' onChange={handleChnage} value={value} style={{ border: "1px solid black", padding: "8px" }} />
        <p style={{ color: "red", fontWeight: "bold" }}>{err}</p>

        <button onClick={() => handleIncBy(Number(value))} > +By {value} </button>
        <button onClick={() => handleDecBy(Number(value))} >  -By {value} </button>

      </div>

    </div>
  )
}

export default App
