import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {

    const { register, handleSubmit, formState, watch } = useForm({ mode: "onChange" })

    // console.log(formState, "...formState");
    // console.log(formState.errors, "...formState error");

    const password = watch('password');

    const onSubmit = (data) => {
        console.log(data, "...data on submit");
    }

    return (
        <div className='p-5'>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='border-4 border-yellow-700 rounded-2xl flex flex-col justify-center gap-3 p-7'
            >

                <label htmlFor="name"> Name : </label>
                <input
                    type="text"
                    autoComplete='name'
                    {...register('name', { required: "Name is required" })}
                    className='py-2 px-3 border-2 border-amber-400 outline-none rounded-2xl'
                />

                {
                    formState.errors.name &&
                    (<p className='text-red-600'> {formState.errors.name.message} </p>)
                }

                <label htmlFor="email"> Email : </label>
                <input
                    type="email"
                    autoComplete='email'
                    {...register("email", { required: "Email is required" })}
                    className='py-2 px-3 border-2 border-amber-400 outline-none rounded-2xl'

                />

                {
                    formState.errors.email &&
                    (<p className='text-red-600'> {formState.errors.email.message} </p>)
                }

                <label htmlFor="pass"> Password : </label>
                <input
                    type="password"
                    autoComplete='new-password'
                    {...register("password", { required: "Password is required" })}
                    className='py-2 px-3 border-2 border-amber-400 outline-none rounded-2xl'

                />

                {
                    formState.errors.password &&
                    (<p className='text-red-600'> {formState.errors.password.message} </p>)
                }

                {
                    password && (
                        <>
                            <label htmlFor="confirm-pass"> Confirm Password : </label>
                            <input
                                type="password"
                                autoComplete='confirm-password'
                                {...register('confPassword', {
                                    required: "Confirm password is required ",
                                    validate: (value) => {
                                        // console.log(value, "...validate value");
                                        return value === password || "Password does not match"
                                    }

                                })}

                                className='py-2 px-3 border-2 border-amber-400 outline-none rounded-2xl'
                            />
                            {
                                formState.errors.confPassword && (
                                    <p className='text-red-600'> {formState.errors.confPassword.message} </p>
                                )
                            }
                        </>
                    )
                }

                <button
                    type='submit'
                    disabled={!formState.isValid}
                    className='px-4 py-2 bg-amber-400 rounded-2xl cursor-pointer my-5'
                >
                    Submit
                </button>

            </form>

        </div>
    );
}

export default SignUpForm;
