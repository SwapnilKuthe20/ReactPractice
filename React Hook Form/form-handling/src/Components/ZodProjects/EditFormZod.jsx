import React from 'react'
import z from 'zod'
import { authFields } from '../CommonZodValidations/CommonZod'

const EditFormZod = () => {

    const schema = authFields.pick({
        Email: true
    })

    console.log(schema, "...schema pick");


    return (
        <div className='bg-pink-950 min-h-screen'>
            <h1 className='text-2xl text-center font-bold py-7'> Profile Edit Form </h1>

            <form
                className='flex flex-col gap-4 w-4/6 m-auto'
            >
                <label htmlFor=""> Name </label>
                <input
                    type="text"
                    placeholder='Enter here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />

                <label htmlFor=""> Email</label>
                <input
                    type="email"
                    placeholder='Enter here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />

                <label htmlFor=""> Age </label>
                <input
                    type="text"
                    placeholder='Enter here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />

                <label htmlFor="">City </label>
                <input
                    type="text"
                    placeholder='Enter here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />

                <button
                    type='submit'
                    className='px-4 py-2 bg-amber-400 rounded-2xl mt-6 cursor-pointer text-black'
                >
                    Save
                </button>

            </form>

        </div>
    )
}

export default EditFormZod
