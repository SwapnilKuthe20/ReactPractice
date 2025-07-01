import React, { useContext } from 'react'
import { studentContext } from '../../App'

const Fifth = () => {
    const { student, handleContext } = useContext(studentContext)

    return (
        <div>
            <h3>I am in Fifth</h3>
            <h4>{`My name is : ${student.name}`}</h4>
            <h4>{`My age is: ${student.age}`}</h4>
            <h4>{`My role is: ${student.Dev}`}</h4>
            <button onClick={handleContext}>Change Context</button>
        </div>
    )
}


export default Fifth
