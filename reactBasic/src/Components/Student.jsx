import React from "react";

const Student = ({ name, age, course }) => {
    return (
        <>
            <h4>Student Component</h4>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            <p>Course : {course}</p>
        </>
    )
}

export default Student;