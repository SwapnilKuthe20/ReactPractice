import React from 'react'

const ErrorInputs = ({ error }) => {
    if (!error) return null;

    if (error.types) {
        return Object.values(error.types).map((msg, ind) => (
            // console.log(msg, ind, "...map values")
            <p key={ind} className='text-red-600'> {msg} </p>
        ))
    }

    // single error fallback
    return (
        <p className="text-red-600">
            {error.message}
        </p>
    )

}

export default ErrorInputs
