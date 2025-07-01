import React, { useContext } from 'react'
import { nameContext } from '../../App'

const Compo4 = () => {

    const myName = useContext(nameContext)
    return (
        <div>
            <h2>I am in Component 4</h2>
            <h3>{`My name is ${myName}`}</h3>
        </div>
    )
}

export default Compo4
