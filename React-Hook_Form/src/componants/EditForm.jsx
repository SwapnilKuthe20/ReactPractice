import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const EditForm = () => {


    const { register, handleSubmit, watch, reset, formState, setValue } = useForm({ mode: "all", defaultValues: { name: "Deep" } });

    useEffect(() => {
        // setValue("name", "Swap")
        // setValue("email", "Swap@gmail.com")
        // setValue("pass", "Swap0720")
        // setValue("phone", 7972021968)
    }, [])

    const onSubmit = (data) => {
        console.log(data, "...data");
        reset({
            name: "NEEL",
            email: "neel2GMAIL.COM"
        })
    }

    return (
        <div className='flex justify-center m-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/4 flex flex-col p-5 gap-6 border-2 border-cyan-600 rounded-2xl' >

                <label htmlFor=""> Name </label>
                <input type="text" {...register('name')} className='p-2 outline-none border-2 rounded-2xl border-cyan-600' />

                <label htmlFor=""> Email </label>
                <input type="email" {...register('email')} className='p-2 outline-none border-2 rounded-2xl border-cyan-600' />

                <label htmlFor=""> Password </label>
                <input type="pass" {...register('pass')} className='p-2 outline-none border-2 rounded-2xl border-cyan-600' />

                <label htmlFor=""> Phone </label>
                <input type="text" {...register('phone')} className='p-2 outline-none border-2 rounded-2xl border-cyan-600' />

                <button type='submit' className='py-2 bg-cyan-900 cursor-pointer rounded-2xl'> Save </button>

            </form>
        </div>
    );
}

export default EditForm;
