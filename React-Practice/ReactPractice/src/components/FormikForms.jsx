import { useFormik } from 'formik';
import React from 'react';

const FormikForms = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        validate: (values) => {
            console.log(values, "...valules");

            const error = {}

            if (!values.name) {
                error.name = "name required"
            }

            if (!values.email) {
                error.email = "email required"
            }
            if (!values.password) {
                error.password = "password required"
            }

            return error
        },
        onSubmit: (sub) => {
            console.log(sub, ".....submit");
        }
    })

    console.log(formik, "...formik");

    // console.log({...formik.getFieldProps("name")}, "..getFieldProps");



    return (
        <div className='flex justify-center items-center '>
            <form onSubmit={formik.handleSubmit} className='bg-fuchsia-950 rounded-2xl w-2/5 p-6 flex justify-center flex-col gap-2.5'>
                <h1 className='text-2xl text-center'> Formik Forms </h1>

                <label htmlFor="name"> Name : </label>
                <input
                    id='name'
                    type="text"
                    name="name"
                    autoComplete='name'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='border border-lime-600 outline-none rounded w-2/3 p-2'
                />
                {formik.errors.name && formik.touched.name && (
                    < p className='text-red-700'> {formik.errors.name}</p>
                )}

                <label htmlFor="email"> Email : </label>
                <input
                    id='email'
                    type="email"
                    name='email'
                    autoComplete='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='border border-lime-600 outline-none rounded w-2/3 p-2'
                />
                {formik.errors.email && formik.touched.email && (
                    <p className='text-red-600'>{formik.errors.email}</p>
                )}

                <label htmlFor="pass"> Password : </label>
                <input
                    type="password"
                    autoComplete='current-password'
                    {...formik.getFieldProps('password')}
                    className='border border-lime-600 outline-none rounded w-2/3 p-2'

                />

                {formik.touched.password && formik.errors.password && (
                    <p className='text-red-600'> {formik.errors.password} </p>
                )

                }

                <button
                    className='px-4 py-2.5 bg-lime-600 w-2/3 rounded-2xl my-4 cursor-pointer'
                    type='submit'
                > Save
                </button>

            </form>

        </div >
    );
}

export default FormikForms;
