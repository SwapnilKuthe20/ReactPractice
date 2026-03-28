import React from 'react'
import { Controller, useForm, useFormState, useWatch } from 'react-hook-form'
import MyInput from './MyInput'
import ErrorInputs from './ErrorInputs'

const CstmReactHookForm = () => {

    const { control, handleSubmit, reset } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        shouldFocusError: true,
        criteriaMode: "all"
    })

    const { errors } = useFormState({ control })
    console.log(errors, "...errors");

    const password = useWatch({ control, name: "Password" })

    const onValid = (data) => {
        console.log(data, "...data");

        reset()
    }

    return (
        <div className='w-full bg-cyan-900 py-8'>
            <h1 className='text-2xl font-bold my-1 text-center'> Custom React Hook Form </h1>

            <form
                onSubmit={handleSubmit(onValid)}
                className='bg-gray-900 w-2/3 m-auto px-7 py-6 rounded-2xl'
            >
                <h1 className='text-2xl text-amber-300 text-center font-black mt-7'> Controlled Input Form Handling </h1>

                <Controller
                    name='name'
                    control={control}
                    defaultValue=""
                    rules={{
                        validate: {
                            required: v => v.length > 0 || "name is required",
                            minlength: v => v.length >= 3 || "Name must be atleast 3 chars"
                        }
                    }}
                    render={({ field }) => (
                        < MyInput
                            {...field}
                            label="Name"
                            id="name"
                            type="text"
                            placeholder="Enter Name here..."
                        />
                    )}
                />
                <ErrorInputs error={errors.name} />

                <Controller
                    name='Email'
                    control={control}
                    defaultValue=""
                    rules={{
                        validate: {
                            required: v => v.length > 0 || "Email is required",
                            patern: v => /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v) || "Please Enter valid Email"
                        }
                    }}
                    render={({ field }) => (
                        < MyInput
                            {...field}
                            label="Email"
                            id="Email"
                            type="email"
                            placeholder="Enter Email here..."
                        />
                    )}
                />
                <ErrorInputs error={errors.Email} />

                <Controller
                    name='Password'
                    control={control}
                    defaultValue=""
                    rules={{
                        validate: {
                            required: v => v.length > 0 || "Password must be reuired",
                            hasCapital: v => /[A-Z]/.test(v) || "Uppercase missing",
                            hasLower: v => /[a-z]/.test(v) || "Lowercase missing",
                            hasNumber: v => /[0-9]/.test(v) || "Number missing",
                            hasSymbol: v => /[!@#$%&*]/.test(v) || "Number missing",
                        }
                    }}
                    render={({ field }) => (
                        < MyInput
                            {...field}
                            label="Password"
                            id="Password"
                            type="Password"
                            placeholder="Enter Password here..."
                        />
                    )}
                />
                <ErrorInputs error={errors.Password} />

                <Controller
                    name='confirmPass'
                    control={control}
                    defaultValue=""
                    rules={{
                        validate: {
                            req: v => v.length > 0 || "reqired confirm pass",
                            isMatch: v => password === v || "Password does not match"
                        }
                    }}
                    render={({ field }) => (
                        < MyInput
                            {...field}
                            label="Confirm Password"
                            id="confirmPass"
                            type="password"
                            placeholder="Enter Confirm-Password here..."
                        />
                    )}
                />
                <ErrorInputs error={errors.confirmPass} />

                <button
                    type='submit'
                    className='px-6 py-2 rounded-2xl bg-amber-600 mt-7 m-auto block'
                >
                    Submit
                </button>
            </form>


        </div>
    )
}

export default CstmReactHookForm
