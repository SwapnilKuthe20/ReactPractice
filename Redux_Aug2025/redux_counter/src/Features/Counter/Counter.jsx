import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, increaseAmountBY } from "./counterSlice";

const Counter = () => {

    const [amount, setAmount] = useState('')
    // console.log(typeof amount, "...type amount");

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)

    const handleChange = (e) => {
        setAmount(e.target.value)
        // console.log(typeof (e.target.value), "...type value");
    }

    const handleInc = () => {
        dispatch(increament())
    }

    const handleDec = () => {
        dispatch(decreament())
    }

    const handleInBy = (amount) => {
        // console.log(typeof (amount), "...type amount");
        dispatch(increaseAmountBY(amount))
    }

    return (
        <div style={{ backgroundColor: "darkcyan", padding: "20px", borderRadius: "10px" }}>
            <h1 style={{ textAlign: "center", color: "powderblue" }}> Counter APP </h1>

            <h1> Count : {count} </h1>

            <button onClick={handleInc} style={{ padding: "10px", margin: "10px" }}> + </button>
            <button onClick={handleDec} style={{ padding: "10px", margin: "10px" }}> - </button>

            <input type="text" value={amount} onChange={handleChange} style={{ padding: "10px" }} /> <br /> <br />
            <button onClick={() => handleInBy(Number(amount))} style={{ padding: "10px", margin: "10px" }}> Increament By </button>
        </div>
    );
}

export default Counter;
