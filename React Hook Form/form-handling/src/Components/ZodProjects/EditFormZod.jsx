import React from 'react'
import z from 'zod'
import { authFields, baseFieldsZod } from '../CommonZodValidations/CommonZod'
import { useForm, useFormState } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'

const EditFormZod = () => {

    const editFormSchema = z.object({
        Name: z.string().min(1, "Name is required"),
        Age: z.string().min(1, "Age is required"),
        City: z.string().min(1, "City is required"),
    })

    const schema = baseFieldsZod.merge(editFormSchema).partial();
    // console.log(schema, "...schema merge");

    const { register, handleSubmit, reset, control } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        criteriaMode: "all",
        resolver: zodResolver(schema)
    })

    const { errors } = useFormState({ control })
    console.log(errors, "...errors");

    const onValid = (data) => {
        console.log(data, "...data submit");

        reset()
    }

    return (
        <div className='bg-pink-950 min-h-screen'>
            <h1 className='text-2xl text-center font-bold py-7'> Profile Edit Form </h1>

            <form
                onSubmit={handleSubmit(onValid)}
                className='flex flex-col gap-4 w-4/6 m-auto'
            >
                <label htmlFor=""> Name </label>
                <input
                    type="text"
                    {...register("Name")}
                    placeholder='Enter name here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />
                {
                    errors.Name && (
                        <p className='text-red-600'> {errors.Name.message} </p>
                    )
                }

                <label htmlFor=""> Email</label>
                <input
                    type="email"
                    {...register("Email")}
                    placeholder='Enter email here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />
                {
                    errors.Email && (
                        <p className='text-red-600'> {errors.Email.message} </p>
                    )
                }

                <label htmlFor=""> Age </label>
                <input
                    type="text"
                    {...register("Age")}
                    placeholder='Enter age here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />
                {
                    errors.Age && (
                        <p className='text-red-600'> {errors.Age.message} </p>
                    )
                }

                <label htmlFor="">City </label>
                <input
                    type="text"
                    {...register("City")}
                    placeholder='Enter city here...'
                    className='border-2 border-green-500 outline-none px-3 py-2 rounded-2xl'
                />
                {
                    errors.City && (
                        <p className='text-red-600'> {errors.City.message} </p>
                    )
                }

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
