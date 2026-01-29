import { useEffect, useState } from "react";

export default function StaleClosureDemo() {
  const [count, setCount] = useState(0);
  console.log(count, "...count");


  useEffect(() => {

    const id = setTimeout(() => {
      // debugger; // ⬅️ BREAKPOINT
      console.log("Timeout count:", count);
    }, 3000);

    return () => clearTimeout(id)
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
    </div>
  );
}
