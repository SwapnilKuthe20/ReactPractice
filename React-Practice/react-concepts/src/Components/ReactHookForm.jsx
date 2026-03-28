import React from 'react';
import { useForm } from 'react-hook-form';

const ReactHookForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting, isSubmitted }, watch, reset } = useForm()
    // console.log(register("name"), "...register");
    // const field = register("name")

    // console.log(typeof formState, "...typeof formstate");
    // console.log(errors, "...formstate");

    // console.log(watch, "...watch");

    const password = watch("password")
    // console.log(password, "...pass");

    // console.log(isSubmitting, "...isSubmitting");
    console.log(isSubmitted, "...isSubmitted");

    const submitHandler = async (data) => {
        // console.log(data, "...data");

        const { password, confirmPassword, ...form } = data;
        // console.log(form, "...rest operator");

        await new Promise((res) => {
            console.log(res, "...res");

            setTimeout(() => {
                localStorage.setItem("form", JSON.stringify(form))
                res()

            }, 5000)
        })

        reset()
    }

    return (
        <div className='w-full bg-gray-700'>
            <div className='w-1/2 m-auto bg-green-800 p-12 '>
                <h1 className='text-2xl text-center font-black '> React Hook Form </h1>

                <form
                    onSubmit={handleSubmit(submitHandler)}
                    className='flex flex-col justify-center gap-3 p-4'
                >

                    <label htmlFor="name"> Name : </label>
                    <input
                        type="text"
                        // autoComplete='name'
                        {...register("name", {
                            required: 'Name is required',
                            minLength: {
                                value: 4,
                                message: "Name is invalid"
                            }
                        })}
                        placeholder='Enter Name here...'
                        className='px-3 py-2 border-2 border-amber-50 rounded-2xl outline-none'
                    />
                    {
                        errors.name && <p className='text-red-600 font-bold'> {errors.name.message} </p>
                    }

                    {/* <input
                        {...register("name", {
                            onChange: (e) => console.log("RHF change:", e.target.value),
                            onBlur: () => console.log("RHF blur")
                            })}
                            /> */}

                    <label htmlFor="email"> Email : </label>
                    <input
                        type="email"
                        autoComplete='email'
                        {...register("email", {
                            required: "email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid Email"
                            }
                        })}
                        placeholder='Enter Email here...'
                        className='px-3 py-2 border-2 border-amber-50 rounded-2xl outline-none'
                    />
                    {
                        errors.email && <p className='text-red-600 font-bold'> {errors.email.message} </p>
                    }

                    <label htmlFor="pass"> Password : </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Minimum 6 chars required"
                            },
                            maxLength: {
                                value: 8,
                                message: "Maximum 8 chars are required"
                            }
                        })}
                        // autoComplete='current-password'
                        placeholder='Enter Password here...'
                        className='px-3 py-2 border-2 border-amber-50 rounded-2xl outline-none'
                    />
                    {
                        errors.password && <p className='text-red-600 font-bold'> {errors.password.message} </p>
                    }

                    <label htmlFor="pass"> Confirm Password : </label>
                    <input
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm password is required",
                            validate: (value) => (
                                value === password || "Passwords do not match"
                            )
                        })}
                        // autoComplete='current-password'
                        placeholder='Enter Password here...'
                        className='px-3 py-2 border-2 border-amber-50 rounded-2xl outline-none'
                    />
                    {
                        errors.confirmPassword && <p className='text-red-600 font-bold'> {errors.confirmPassword.message} </p>
                    }

                    <button
                        type='submit'
                        className={`rounded-2xl block m-auto cursor-pointer px-5 py-2 ${isSubmitting ? 'bg-gray-700 cursor-progress' : 'bg-yellow-900 '}`}
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>

                    {/* <label htmlFor="pass"> Enter Password : </label>
                    <input
                        type="password"
                        name={field.name}
                        ref={field.ref}
                        onChange={(e) => {
                            console.log(e, "onchnge fire...");
                            field.onChange(e)       // imp
                        }}
                        onBlur={(e) => {
                            console.log(e, "onBlur fire...");
                            field.onBlur(e)         // imp
                        }}
                        autoComplete='current-password'
                        placeholder='Enter Password here...'
                        className='px-3 py-2 border-2 border-amber-50 rounded-2xl outline-none'
                    /> */}

                </form>

            </div>
        </div >
    );
}

export default ReactHookForm;
