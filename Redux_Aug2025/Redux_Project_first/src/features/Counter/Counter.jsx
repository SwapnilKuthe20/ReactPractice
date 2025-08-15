import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament, increamentByAmount } from './CounterSlice';

const Counter = () => {

    const count = useSelector((state) => state.counter.value)
    // Toh useSelector se:
    // Agar current state { counter: { value: 3 } } hai,
    // Toh count 3 ho jayega.

    const dispatch = useDispatch()

    const handleIncreament = () => {
        dispatch(increament())
    }

    const handleDecreament = () => {
        dispatch(decreament())
    }

    const handleAmountInc = (amount) => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <div style={{ width: "500px", backgroundColor: "purple" }}>
            <h1> Counter App </h1>

            <p> Count : {count} </p>

            <button onClick={handleIncreament}>Increament</button>
            <button onClick={handleDecreament}>Decreament</button>

            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
            />

            <button onClick={() => handleAmountInc(amount)}>IncrementBy5</button>

        </div>
    );
}

export default Counter;
