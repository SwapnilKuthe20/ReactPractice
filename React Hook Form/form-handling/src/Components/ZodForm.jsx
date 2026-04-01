import MyInput from './MyInput'
import { Controller, useForm, useFormState, useWatch } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { da } from 'zod/locales'

const ZodForm = () => {

    const data = {
        Name: "Swapnil",
        Email: "swapnilkuthe20@gmail.com",
        Phone: 797202196,
        Password: "swapkuthe20"
    }

    const schema = z.object({
        Name: z.string().min(1, "Required Name"),
        Email: z.string().min(1, "Required Email").email("Invalid Email"),
        Phone: z.number("Number type required").min(1, "Required Phone").length(10, "Mobile number must be 10 digits "),
        Password: z.string().min(1, "Required Password"),
    })

    const result = schema.safeParse(data)
    const zodErrors = result.error.flatten().fieldErrors
    console.log(zodErrors.Phone[0], "...zodErrors");


    // result.success ? console.log(result, "...data") : console.log(result.error.issues[0].message, "....Error")

    // console.log("Render.....");

    // const schema = z.object({
    //     Name: z.string().min(1, "..Name is required"),
    //     Email: z.string().min(1, "...Email is required").email("...Invalid Email"),
    //     Password: z.string().min(1, "Password is required"),
    //     ConfirmPassword: z.string().min(1, "Confirm Password is required")
    // })
    // console.log(schema, "...schema");

    const { control, handleSubmit, reset } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        // resolver: zodResolver(schema)
    })

    const { errors } = useFormState({ control })
    const passwordWatch = useWatch({
        control,
        name: "Password",
        defaultValue: ""
    })
    // console.log(passwordWatch, "..passWatch");

    const onValid = (data) => {
        // console.log(data, "...data");

        reset()
    }

    return (
        <div className='bg-purple-950 min-h-screen py-4'>
            <h1 className='text-2xl text-center font-black pb-8'> React Hook Form + Zod </h1>

            <form onSubmit={handleSubmit(onValid)} className='w-3/5 m-auto bg-green-950 p-7 rounded-2xl'>
                <h1 className='text-2xl text-center font-black py-2 text-pink-600'> Login Form </h1>
                <Controller
                    name='Name'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <MyInput
                            {...field}
                            label="Name"
                            id="Name"
                            placeholder="Enter Name here.."
                        />
                    )}
                />
                {
                    errors.Name &&
                    <p className='text-red-600'> {errors.Name.message} </p>
                }

                <Controller
                    name='Email'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <MyInput
                            {...field}
                            label="Email"
                            id="Email"
                            placeholder="Enter Email here.."
                        />
                    )}
                />
                {
                    errors.Email &&
                    <p className='text-red-600'> {errors.Email.message} </p>
                }

                <Controller
                    name='Password'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <MyInput
                            {...field}
                            label="Password"
                            id="Password"
                            placeholder="Enter Password here.."
                        />
                    )}
                />
                {
                    errors.Password &&
                    <p className='text-red-600'> {errors.Password.message} </p>
                }

                <Controller
                    name='ConfirmPassword'
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <MyInput
                            {...field}
                            label="Confirm Password"
                            id="ConfirmPassword"
                            placeholder="Enter Confirm Password here.."
                        />
                    )}
                />
                {
                    errors.ConfirmPassword &&
                    <p className='text-red-600'> {errors.ConfirmPassword.message} </p>
                }

                <button
                    type='submit'
                    className='px-12 py-2 bg-pink-700 rounded-2xl block m-auto mt-7'
                >
                    Save
                </button>

            </form>
        </div>
    )
}

export default ZodForm
