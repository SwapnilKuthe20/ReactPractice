import { useForm, useFormState } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { authFields } from './CommonZodValidations/CommonZod'

const SignUpZod = () => {

    const schema = z.object({
        ...authFields,
        Name: z.string().min(1, "Name is required"),
        confPassword: z.string().min(1, "Confirm password is required")
    }).superRefine((data, ctx) => {
        if (data.Password !== data.confPassword) {
            ctx.addIssue({
                path: ['confPassword'],
                message: "Password does not match"
            })
        }
    })

    const { control, register, handleSubmit, reset } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        resolver: zodResolver(schema)
    })

    // console.log(register("Name"), "...register");

    const { errors } = useFormState({ control })
    console.log(errors, "...errors");

    const onValid = (data) => {
        console.log(data, "...data");

        reset()
    }

    return (
        <div className='bg-red-900 m-auto min-h-screen p-12'>
            <h1 className='text-2xl text-center font-black my-8'> Sign up Form </h1>
            <form
                onSubmit={handleSubmit(onValid)}
                className='flex flex-col gap-4 w-3/4 m-auto bg-violet-950 p-12 rounded-2xl'
            >
                <h1 className='text-2xl text-center font-bold'> Sign UP Form - RHF-ZOD </h1>

                <label htmlFor="Name"> Name </label>
                <input
                    id='Name'
                    type="text"
                    {...register("Name")}
                    placeholder='Enter Name here..'
                    className='border-2 border-amber-400 rounded-2xl px-3 py-2 outline-none'
                />
                {
                    errors.Name && (
                        <p className='text-red-600'> {errors.Name.message} </p>
                    )
                }

                <label htmlFor="Email"> Email </label>
                <input
                    id='Email'
                    type="email"
                    {...register("Email")}
                    placeholder='Enter Name here..'
                    className='border-2 border-amber-400 rounded-2xl px-3 py-2 outline-none'
                />
                {
                    errors.Email && (
                        <p className='text-red-600'> {errors.Email.message} </p>
                    )
                }

                <label htmlFor="Password"> Password </label>
                <input
                    id='Password'
                    type="password"
                    {...register("Password")}
                    placeholder='Enter Name here..'
                    className='border-2 border-amber-400 rounded-2xl px-3 py-2 outline-none'
                />
                {
                    errors.Password && (
                        <p className='text-red-600'> {errors.Password.message} </p>
                    )
                }

                <label htmlFor="confPassword"> confPassword </label>
                <input
                    id='confPassword'
                    type="password"
                    {...register("confPassword")}
                    placeholder='Enter Name here..'
                    className='border-2 border-amber-400 rounded-2xl px-3 py-2 outline-none'
                />
                {
                    errors.confPassword && (
                        <p className='text-red-600'> {errors.confPassword.message} </p>
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

export default SignUpZod
