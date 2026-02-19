import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHForm = () => {

    const { register, handleSubmit } = useForm()

    // console.log({...register('email')}, "...register");


    const onSubmit = (data, err) => {
        console.log(data, "..form sub data");
        console.log(err, "...error");
    }

    return (
        <div className=' p-8 m-5 flex justify-center items-center'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                // onSubmit={handleSubmit(
                //     (data) => console.log(data, "...data"),
                //     (err) => console.log(err, "...error")
                // )}
                className='flex flex-col gap-5 sm:w-full md:w-1/2 w-full border-2 border-cyan-600 rounded-2xl p-5'
            >

                <h1 className='text-center text-cyan-300'> React Hook Form </h1>

                <input
                    type="text"
                    placeholder='enter name here...'
                    {...register("name", { required: "Name is required" })}
                    className='outline-none border-2 border-cyan-500 rounded-2xl p-2'
                />

                {
                    // err.name && <p> {err.name.message} </p>
                }

                <button type='submit' className='px-4 py-2 bg-cyan-600 rounded-2xl cursor-pointer'> Save </button>

            </form>

        </div >
    );
}

export default ReactHForm;
