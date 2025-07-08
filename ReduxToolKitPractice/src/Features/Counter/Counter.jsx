import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from './CounterSlice';

const Counter = () => {
  // const [count, setCount] = useState(0)
  // const handleIncrement = () => {
  //   setCount(count + 1)
  // }
  // const handleDecrement = () => {
  //   setCount(count - 1)
  // }

  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h3> Count : {count} </h3>

      <button onClick={() => dispatch(increament())}> Increament + </button>
      <button onClick={() => dispatch(decreament())}> Decreament + </button>
    </div>
  );
}

export default Counter;
