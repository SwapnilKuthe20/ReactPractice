import React, { useContext } from 'react'
import Compo3 from './Compo3'
import { ageContext } from '../../App'

const Comp2 = () => {

    const myAge = useContext(ageContext)
    return (
        <div>

            <h3>Component 2 -- age is :{myAge}</h3>
            <Compo3 />
        </div>
    )
}

export default Comp2
