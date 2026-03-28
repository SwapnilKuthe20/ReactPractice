import React from 'react'

const MyInput = ({ label, ...remaining }) => {
    // console.log(remaining, "...remaining props");

    const custm = document.getElementById("customId")
    console.log(custm, "...custom input");

    return (
        <>
            <label htmlFor="customId"> {label} </label>
            <input
                id='customId'
                {...remaining}
                className='border-2 border-amber-800 rounded-2xl outline-none px-3 py-2'
            />
        </>
    )
}

export default MyInput
