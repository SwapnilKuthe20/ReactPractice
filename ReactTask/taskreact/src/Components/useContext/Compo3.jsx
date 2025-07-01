import React, { useContext } from 'react'
import Compo4 from './Compo4'
import { nameContext } from '../../App'

const Compo3 = () => {
    const myName = useContext(nameContext)
    return (
        <div>
            <h2>Hello comp 3 name : {myName}</h2>
            <Compo4 />
        </div>
    )
}

export default Compo3
