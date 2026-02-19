import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema } from './Schema/register.schema';

const RegisterForm = () => {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
        mode: "onBlur",
        reValidateMode: "onChange",
        resolver: zodResolver(registerSchema)
    })

    const onSubmit = (data) => {
        console.log(data, "...data");
    }

    return (
        <div className='w-1/2 flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-2xl p-7 border-amber-400 flex justify-center flex-col gap-4' >
                <label htmlFor="name"> Name </label>
                <input type="text" {...register("name")} className='outline-none border-2 border-amber-300 rounded-2xl p-2' />

                {
                    errors.name && (
                        <p className='text-red-600'> {errors.name.message} </p>
                    )
                }

                <label htmlFor="email"> Email </label>
                <input type="email" id='email' {...register("email")} autoComplete='email' className='outline-none border-2 border-amber-300 rounded-2xl p-2' />
                {
                    errors.email && (
                        <p className='text-red-600'> {errors.email.message} </p>
                    )
                }

                <label htmlFor="pass"> Password </label>
                <input type="password" {...register("password")} autoComplete='new-password' className='outline-none border-2 border-amber-300 rounded-2xl p-2' />

                {
                    errors.password && (
                        <p className='text-red-600'> {errors.password.message} </p>
                    )
                }

                <label htmlFor="confirmPassword"> Confirm Password </label>
                <input type="password" {...register("confirmPassword")} autoComplete='new-password' className='outline-none border-2 border-amber-300 rounded-2xl p-2' />
                {
                    errors.confirmPassword && (
                        <p className='text-red-600'> {errors.confirmPassword.message} </p>
                    )
                }

                <button type='submit' className='bg-amber-700 rounded-2xl py-2'> Save </button>

            </form>
        </div>
    );
}

export default RegisterForm;
