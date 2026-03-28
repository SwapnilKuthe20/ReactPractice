import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const NonTextForm = () => {
    const [preview, setPreview] = useState(null)

    const { register, handleSubmit, formState, watch } = useForm({ mode: "all" });

    const password = watch('password');
    // console.log(password, "...password");

    const profilePic = watch("profilePic")
    console.log(profilePic, "..profile pic");

    useEffect(() => {
        if (!profilePic || profilePic.length === 0) {
            setPreview(null)
            return
        }

        const file = profilePic[0]
        const url = URL.createObjectURL(file)
        setPreview(url)

        return () => {
            return URL.revokeObjectURL(url)
        }
    }, [profilePic])


    const onSubmit = (data) => {
        console.log(data, "...data");
    }

    return (
        <div className='p-7'>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col gap-5 border-4 rounded-2xl p-7 border-blue-700'
            >

                <label htmlFor=""> Name </label>
                <input
                    type="text"
                    autoComplete='name'
                    {...register("name", {
                        required: "Name is required"
                    })}
                    className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl '
                />
                {
                    formState.errors.name && (
                        <p className='text-red-500'> {formState.errors.name.message} </p>
                    )
                }

                <label htmlFor="email"> Email </label>
                <input
                    type="email"
                    autoComplete='email'
                    {...register('email', {
                        required: "Email is required"
                    })}
                    className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl '
                />
                {
                    formState.errors.email && (
                        <p className='text-red-500'> {formState.errors.email.message} </p>
                    )
                }

                <label htmlFor="pass"> Password </label>
                <input
                    id='pass'
                    type="password"
                    autoComplete='new-password'
                    {...register("password", {
                        required: "Password is required"
                    })}
                    className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl '
                />
                {
                    formState.errors.password && (
                        <p className='text-red-500'> {formState.errors.password.message} </p>
                    )
                }

                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input
                    id='confirmPassword'
                    type="password"
                    autoComplete='new-password'
                    {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) => {
                            return value === password || "Password does not match"
                        }
                    })}
                    className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl '
                />
                {
                    formState.errors.confirmPassword && (
                        <p className='text-red-500'> {formState.errors.confirmPassword.message} </p>
                    )
                }

                <label htmlFor="gender"> Gender </label>
                <label htmlFor="male" className='cursor-pointer'>
                    <input
                        id='male'
                        type="radio"
                        value="male"
                        {...register("gender", {
                            required: "Select Gender"
                        })}
                        className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl mx-5 cursor-pointer'

                    />  Male
                </label>

                <label htmlFor="female" className='cursor-pointer'>
                    <input
                        id='female'
                        type="radio"
                        value="female"
                        {...register("gender", {
                            required: "Select Gender"
                        })}
                        className='py-2 px-4 outline-none border-2 border-blue-500 rounded-2xl mx-5 cursor-pointer'

                    />  Female
                </label>
                {
                    formState.errors.gender && (
                        <p className='text-red-500'> {formState.errors.gender.message} </p>
                    )
                }

                <label htmlFor="country"> Country </label>
                <select id="country"
                    {...register('country', {
                        required: "Select Country"
                    })}
                    className='bg-black outline-none border-2 border-blue-500 p-2 rounded-2xl'
                >
                    <option value=""> Select Country </option>
                    <option value="India"> India </option>
                    <option value="USA"> USA </option>
                    <option value="Canada"> Canada </option>
                </select>
                {
                    formState.errors.country && (
                        <p className='text-red-500'> {formState.errors.country.message} </p>
                    )
                }

                <label htmlFor="profilePic"> Profile Pic </label>
                <input
                    id='profilePic'
                    type="file"
                    {...register("profilePic", {
                        required: "Profile picture required"
                    })}

                    className='border-2 border-blue-500 outline-none p-2 rounded-2xl cursor-pointer'
                />
                {
                    formState.errors.profilePic && (
                        <p className='text-red-500'> {formState.errors.profilePic.message} </p>
                    )
                }

                {
                    preview && (
                        <img src={preview} alt="profile-pic" className='w-28 h-28 rounded-[50%]' />
                    )
                }

                <label htmlFor="terms" className='cursor-pointer'>
                    <input
                        id='terms'
                        type="checkbox"
                        {...register('terms', {
                            required: "Accept terms and conditions"
                        })}
                        className='mx-5 cursor-pointer'
                    />
                    Accept Terms and Conditions
                </label>
                {
                    formState.errors.terms && (
                        <p className='text-red-500'> {formState.errors.terms.message} </p>
                    )
                }



                <button type='submit' disabled={!formState.isValid} className='px-4 py-2 bg-blue-700 rounded-2xl cursor-pointer'> Save </button>
            </form>
        </div>
    );
}

export default NonTextForm;
