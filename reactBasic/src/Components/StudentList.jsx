import React from "react";

const StudentList = () => {

    const Students = [
        { id: 1, name: "Swap" },
        { id: 2, name: "Neel" },
        { id: 3, name: "Sanp" },
        { id: 4, name: "Sneel" },
        { id: 4, name: "Sneel" },
        { id: 4, name: "Sneel" },
        { id: 4, name: "Sneel" },
        { id: 4, name: "Sneel" },
    ]

    return (
        <>
            <h3>Students List</h3>

            <ul>
                {
                    Students?.map(({ id, name }) => {
                        return (
                            <li key={id}>{name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default StudentList;