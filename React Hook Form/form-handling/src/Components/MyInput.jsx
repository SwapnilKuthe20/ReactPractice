import React from 'react'

const MyInput = ({ label, id, ...rest }) => {

    // console.log(rest, "...rest");

    return (
        <div className='flex flex-col gap-3 mt-4'>

            <label htmlFor={id} > {label} </label>
            <input
                {...rest}
                id={id}
                className='border-2 border-amber-300 rounded-2xl px-3 py-2 outline-none w-full'
            />

        </div>
    )
}

export default MyInput
