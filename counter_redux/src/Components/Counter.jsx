import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deccreament, DecreamentBy, Increament, IncreamentBy } from "../Features/counterSlice";

const Counter = () => {
    const [amt, setAmt] = useState("")
    // console.log(amt, "...amount");

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()


    const handleInc = () => {
        dispatch(Increament())
    }

    const handleDec = () => {
        dispatch(deccreament())
    }

    const handleIncBY = () => {
        dispatch(IncreamentBy(Number(amt)))
    }

    const handleDecBy = () => {
        dispatch(DecreamentBy(Number(amt)))
    }

    return (
        <div className='w-96 bg-cyan-900 text-cyan-100 flex justify-center items-center flex-col gap-3 p-5 rounded'>
            <h1 className="text-yellow-300 text-3xl underline mb-5"> Counter App </h1>

            <h2 className="text-lime-300 text-2xl"> Count = {count} </h2>

            <button onClick={handleInc} className="bg-amber-950 px-7 py-1 rounded cursor-pointer hover:bg-green-950"> + </button>
            <button onClick={handleDec} className="bg-fuchsia-950 px-7 py-1 rounded cursor-pointer hover:bg-green-950"> - </button>

            <div className="text-start">
                <label htmlFor="amount" className="text-start block mb-1">Enter Amount : </label>
                <input type="text" id="amount" value={amt} onChange={(e) => setAmt(e.target.value)} placeholder="Enter Amount..." className="border-amber-200 border-1 px-7 py-1" />
            </div>

            <button onClick={handleIncBY} className="bg-amber-950 px-7 py-1 rounded cursor-pointer hover:bg-green-950"> +By {amt} </button>
            <button onClick={handleDecBy} className="bg-amber-950 px-7 py-1 rounded cursor-pointer hover:bg-green-950"> -By {amt} </button>
        </div>
    );
}

export default Counter;
