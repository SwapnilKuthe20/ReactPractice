import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFormState } from 'react-hook-form'
import { authFields } from './CommonZodValidations/CommonZod'
import z from 'zod'

const LoginZod = () => {

    const schema = z.object(authFields)

    const { control, reset, register, handleSubmit } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        resolver: zodResolver(schema)
    })

    const { errors } = useFormState({ control })
    console.log(errors, "...Errors");

    const onValid = (data) => {
        console.log(data, "...data");

        reset()
    }

    return (
        <div className='bg-pink-950 min-h-screen'>
            <h1 className='text-2xl text-center font-black py-6'> Login Form </h1>

            <form
                onSubmit={handleSubmit(onValid)}
                className='bg-cyan-900 w-2/4 m-auto flex flex-col gap-4 p-12'
            >

                <label htmlFor="Email"> Email </label>
                <input
                    type="email"
                    {...register("Email")}
                    placeholder='Enter Email here...'
                    className='border-2 border-yellow-500 px-3 py-2 rounded-2xl outline-none'
                />
                {
                    errors.Email && (
                        <p className='text-red-600'> {errors.Email.message} </p>
                    )
                }

                <label htmlFor="Password"> Password </label>
                <input
                    type="password"
                    {...register("Password")}
                    placeholder='Enter Email here...'
                    className='border-2 border-yellow-500 px-3 py-2 rounded-2xl outline-none'
                />
                {
                    errors.Password && (
                        <p className='text-red-600'> {errors.Password.message} </p>
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

export default LoginZod
