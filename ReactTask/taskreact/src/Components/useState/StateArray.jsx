import React, { useState } from 'react'

const StateArray = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])

    let changeHandler = () => {
        setNumbers([...numbers,
        Math.floor(Math.random() * 10)
        ])
    }

    return (
        <div>
            <ul>

                {
                    numbers.map((num, index) => (
                        <li key={index}>{num}</li>
                    ))
                }
            </ul>

            <button onClick={changeHandler}>Change Array</button>
        </div>
    )
}

export default StateArray
