import { useFormik } from 'formik';
import React, { useState } from 'react';

const SignupForm = () => {

    const [showPass, setShowPass] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            gender: "",
            country: "",
            accept: false
        },
        validate: (values) => {
            const error = {}

            if (!values.name) error.name = "Name is required"
            if (!values.surname) error.surname = "Surname is required"
            if (!values.email) error.email = "Email is required"
            if (!values.password) error.password = "Password is required"
            if (!values.gender) error.gender = "Gender is required, Please select gender"
            if (!values.accept) error.accept = "Please select terms and conditions"


            if (values.name.trim() === "") {
                error.name = "Name must be atleast 6 digits"
            }

            if (values.surname && values.surname.trim() === "") {
                error.surname = "Surname must be atleast 6 digits"
            }

            if (values.email && values.email.trim() === "") {
                error.email = "Email must be atleast 6 digits"
            }


            if (values.password && values.password.trim() === "") {
                error.password = "Password must be atleast 6 digits"
            }

            if (values.password && values.password.length < 6) {
                error.password = "Password must be atleast 6 digits"
            }

            return error
        },
        onSubmit: (values, { resetForm }) => {
            // console.log(fromData, "...form data");
            
            localStorage.setItem('formData', JSON.stringify(values))
            resetForm();
        }
    })

    console.log(formik, "...formik obj");


    const handleShowPass = () => {
        setShowPass(prev => !prev)
    }


    return (
        <div className='lg:w-full md:w-3/4 sm:w-1/2 bo1/3rder-4 p-5 rounded-2xl '>

            <form onSubmit={formik.handleSubmit} className='flex justify-center items-center flex-col border border-cyan-700'>

                <h1 className='text-2xl text-center my-8 text-cyan-400'> Signup Form </h1>
                <div className='w-3/4 flex justify-center gap-4 flex-col'>

                    <label htmlFor="name" className='items-start'> Name </label>
                    <input
                        id='name'
                        type="text"
                        name='name'
                        value={formik.values.name.trim()}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('name')}
                        autoComplete='name'
                        className='outline-none border-2 border-cyan-400 p-2 rounded-xl w-4/5 '
                    />
                    {formik.touched.name && formik.errors.name && (
                        <p className='text-red-600'> {formik.errors.name} </p>
                    )}

                    <label htmlFor="surname"> Surname </label>
                    <input
                        id='surname'
                        type="text"
                        name='surname'
                        value={formik.values.surname.trim()}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // {...formik.getFieldProps('surname')}
                        autoComplete='family-name'
                        className='outline-none border-2 border-cyan-400 p-2 rounded-xl w-4/5 '
                    />
                    {formik.touched.surname && formik.errors.surname && (
                        <p className='text-red-600'> {formik.errors.surname} </p>
                    )}

                    <label htmlFor="email"> Email </label>
                    <input
                        id='email'
                        type="email"
                        name='email'
                        value={formik.values.email.trim()}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        // {...formik.getFieldProps("email")}
                        autoComplete='email'
                        className='outline-none border-2 border-cyan-400 p-2 rounded-xl w-4/5 bg-black placeholder-black autofill:bg-black'
                    />
                    {formik.touched.email && formik.errors.email && (
                        <p className='text-red-600'> {formik.errors.email} </p>
                    )}

                    <label htmlFor="pass"> Password </label>
                    <div className='relative inline'>
                        <input
                            id='pass'
                            type={showPass ? "text" : "password"}
                            name='password'
                            value={formik.values.password.trim()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            // {...formik.getFieldProps("password")}
                            autoComplete='new-password'
                            className='outline-none border-2 border-cyan-400 p-2 rounded-xl w-4/5 '
                        />
                        <button
                            type='button'
                            onClick={handleShowPass}
                            className=' bg-cyan-600 cursor-pointer rounded-2xl px-3 py-1 text-sm absolute top-[17%] right-1/4 outline-none'
                        >
                            {showPass ? "Hide" : "Show"}
                        </button>

                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <p className='text-red-600'> {formik.errors.password} </p>
                    )}

                    <label htmlFor="gender"> Gender </label>

                    <label htmlFor="male">
                        <input
                            id='male'
                            type="radio"
                            name='gender'
                            value="male"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "male"}
                            className='ms-7  me-4 cursor-pointer'
                        />
                        <span className='cursor-pointer'>Male</span>
                    </label>

                    <label htmlFor="female">
                        <input
                            id='female'
                            type="radio"
                            name='gender'
                            value="female"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            checked={formik.values.gender === "female"}
                            className='ms-7 me-4 cursor-pointer'
                        /> <span className='cursor-pointer'>Female</span>
                    </label>
                    {formik.touched.gender && formik.errors.gender && (
                        <p className="text-red-600">{formik.errors.gender}</p>
                    )}

                    <label htmlFor="country"> Country </label>
                    <select
                        name="country"
                        id="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='bg-black text-white outline-none border-2 w-1/2 border-cyan-500 rounded-2xl p-3'
                    >

                        <option value="" className='selection:bg-cyan-500'> Select </option>
                        <option value="India"> India </option>
                        <option value="USA"> USA </option>
                        <option value="Canada"> Canada </option>
                        <option value="Dubai"> Dubai </option>
                    </select>


                    <label htmlFor="accept" >
                        <input
                            id='accept'
                            type="checkbox"
                            name='accept'
                            checked={formik.values.accept}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='me-4'
                        />
                        <span className='cursor-pointer'> Accept terms and conditions </span>
                    </label>
                    {formik.touched.accept && formik.errors.accept && (
                        <p className="text-red-600">{formik.errors.accept}</p>
                    )}

                    <button
                        type='submit'
                        className='px-4 py-2 bg-cyan-600 rounded-2xl my-8 w-4/5 cursor-pointer '
                    > Save
                    </button>
                </div>

            </form>
        </div>
    );
}

export default SignupForm;
