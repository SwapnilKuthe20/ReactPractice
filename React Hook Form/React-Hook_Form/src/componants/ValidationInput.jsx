import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ValidationInput = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "all",
        // resolver: zodResolver()
    })


    const onSubmit = (data) => {
        console.log(typeof data.percentage, "...data");

    }

    return (
        <div className='m-5 flex justify-center'>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 w-1/2'>

                <label htmlFor=""> Percentage </label>
                <input
                    type="number"
                    max={100}
                    {...register("percentage", {
                        valueAsNumber: true,
                        onChange: (e) => {
                            console.log(e.target.value, "...")
                            if (e.target.value > 100) {
                                e.target.value = 100;
                            }
                        }
                    })}
                    className='outline-none border-2 border-cyan-500 p-2 rounded-2xl'
                />

                {errors.percentage && (
                    <p className='text-orange-600'> {errors.percentage.message} </p>
                )}

                <label htmlFor=""> Mobile Number </label>
                <input
                    type="text"
                    // inputMode='numeric'
                    maxLength={10}
                    {...register("mobile", {
                        valueAsNumber: true,
                        onChange: (e) => {
                            e.target.value = e.target.value.replace(/\D/g, "")
                        }
                    })}
                    className='outline-none border-2 border-cyan-500 p-2 rounded-2xl'
                />


                <button type='submit' className='bg-orange-600 rounded-2xl py-2 cursor-pointer'> Save </button>
            </form>

        </div>
    );
}

export default ValidationInput;

