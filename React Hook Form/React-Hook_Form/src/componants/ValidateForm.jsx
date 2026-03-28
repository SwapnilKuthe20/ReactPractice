import React from 'react';
import { useForm } from 'react-hook-form';

const ValidateForm = () => {

    const { register, handleSubmit, formState, watch, reset } = useForm({ mode: 'all' });

    const password = watch("password")

    const onSubmit = (data) => {
        console.log(data, "....data");

        reset()
    }

    return (
        <div className=' flex justify-center m-5'>
            <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col gap-7 rounded-2xl border-amber-400 border-2 p-7' >

                <label htmlFor="username"> Username </label>
                <input
                    type="text"
                    autoComplete='username'
                    {...register("username", {
                        required: "UserName is required",
                        minLength: {
                            value: 4,
                            message: "Username must be atleast 4 characters"
                        }
                    })}
                    className='p-2 outline-none border-amber-300 border rounded-2xl'
                />
                {formState.errors.username && (
                    <p className='text-red-500'> {formState.errors.username.message} </p>
                )}

                <label htmlFor="email"> Email </label>
                <input
                    type="email"
                    autoComplete='email'
                    className='p-2 outline-none border-amber-300 border rounded-2xl'
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Email format is not valid"
                        }
                    })}
                />
                {formState.errors.email && (
                    <p className='text-red-500'> {formState.errors.email.message} </p>
                )}

                <label htmlFor="pass"> Password </label>
                <input
                    type="password"
                    autoComplete='new-password'
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be atleast 6 Characters"
                        }
                    })}
                    className='p-2 outline-none border-amber-300 border rounded-2xl'

                />
                {formState.errors.password && (
                    <p className='text-red-500'> {formState.errors.password.message} </p>
                )}

                <label htmlFor=""> Confirm Password </label>
                <input
                    type="password"
                    autoComplete='new-password'
                    {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) => {
                            return value === password || "Password does not match"
                        }
                    })}
                    className='p-2 outline-none border-amber-300 border rounded-2xl'

                />
                {formState.errors.confirmPassword && (
                    <p className='text-red-500'> {formState.errors.confirmPassword.message} </p>
                )}

                <label htmlFor=""> Age </label>
                <input
                    type="text"
                    autoComplete='age'
                    {...register("age", {
                        required: "Age is required",
                        valueAsNumber: true,
                        min: {
                            value: 18,
                            message: "Age must be 18"
                        }
                    })}
                    className='p-2 outline-none border-amber-300 border rounded-2xl'

                />

                {formState.errors.age && (
                    <p className='text-red-500'> {formState.errors.age.message} </p>
                )}

                <button type='submit' className='bg-amber-400 rounded-2xl py-2 cursor-pointer'> Save </button>

            </form>
        </div>
    );
}

export default ValidateForm;
