import React, { useState } from 'react'

const StateObject = () => {

    const [student, setStudent] = useState({
        name: "Swapnil",
        Age: 22,
        isPassed: true
    })


    let updateHandler = () => {
        setStudent({
            ...student,
            name: "Neel"
        })
    }
    return (
        <div>
            <h3>Student name is : {student.name}</h3>
            <h3>Student age is : {student.Age}</h3>
            <h3>Student isPassed : {student.isPassed}</h3>


            <button onClick={updateHandler}>Update</button>
        </div>
    )
}

export default StateObject
