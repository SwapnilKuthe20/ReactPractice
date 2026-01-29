import React, { useEffect, useRef, useState } from 'react';
import InputField from './Reusable Component/InputField';
import { useFormik } from 'formik';
import axios from 'axios';

const FullSignup = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)
    const [preview, setPriview] = useState([])

    const fileRef = useRef();
    // console.log(fileRef, "...fileRef");

    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
            gender: "",
            country: "",
            profilePic: [],
            termsConditions: false
        },
        validate: (values) => {
            const errorObj = {}

            const allKeys = Object.keys(values)
            // console.log(allKeys, "...allkeys");

            for (let key of allKeys) {
                // console.log(key, "..key");

                if (key === "name" || key === "surname" || key === "email") {

                    if (!values[key] || values[key].trim() === "") {
                        errorObj[key] = `${key} is required`
                    }
                } else if (key === "gender" || key === "country" || key === "termsConditions") {
                    if (!values[key]) {
                        errorObj[key] = `${key} is required`
                    }
                } else if (key === "profilePic") {
                    if (!values.profilePic.length) {
                        errorObj.profilePic = "At least one photo required";
                    }
                }
            }

            if (values.password && values.password.trim().length <= 6) errorObj.password = "Password should be minimum 6 Characters";

            // if (!values.name) errorObj.name = "Name required";
            // if (!values.surname) errorObj.surname = "Surname required";
            // if (!values.email) errorObj.email = "Email required";
            // if (!values.password) errorObj.password = "Password required";
            // if (!values.gender) errorObj.gender = "Gender required";
            // if (!values.country) errorObj.country = "Country required";
            // if (!values.profilePic) errorObj.profilePic = "Profile pic required";
            // if (!values.termsConditions) errorObj.termsConditions = "term and conditions required";

            // if (values.name && values.name.trim() === "") errorObj.name = "Name should not be empty space";
            // if (values.surname && values.surname.trim() === "") errorObj.surname = "Surname should not be empty space";
            // if (values.email && values.email.trim() === "") errorObj.email = "Email should not be empty space";
            // if (values.password && values.password.trim() === "") errorObj.password = "Password should not be empty space";


            return errorObj;
        },
        onSubmit: async (values, { resetForm }) => {
            // console.log(values, "...values");

            setLoading(true)
            setSuccess(false)
            setError("")
            try {
                const formDataObj = new FormData();

                Object.entries(values).forEach(([key, value]) => {
                    if (key === "profilePic") {
                        value.forEach((file) => {
                            formDataObj.append("profilePic", file)
                        })
                    } else {
                        formDataObj.append(key, value)
                    }
                })

                console.log(formDataObj, "...formData Object");

                const res = await axios.post(
                    "https://example.com/api/signup",
                    formDataObj,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                // console.log(res.data);
                setSuccess(true);
                fileRef.current.value = "";
                resetForm()

            } catch (error) {
                // console.log(error.response.data.message || "Something went wrong");
                setError(error.response?.data.message || "something went wrong")
            } finally {
                setLoading(false)
            }

            // const { profilePic, ...rest } = formik.values
            // localStorage.setItem('formData', JSON.stringify(rest))

            // resetForm()
            // fileRef.current.value = ""
        }
    })

    // console.log(formik, "...formik");



    useEffect(() => {

        if (!formik.values.profilePic.length) {
            setPriview([])
            return
        }

        const objectUrl = formik.values.profilePic.map((file) => {
            return URL.createObjectURL(file)
        })

        setPriview(objectUrl)

        return () => {
            objectUrl.forEach((file) => (
                URL.revokeObjectURL(file)
            ))
        }

    }, [formik.values.profilePic])

    return (
        <div className='flex justify-center '>

            <form onSubmit={formik.handleSubmit} className='w-full md:w-1/2 flex justify-center flex-col gap-7 rounded-2xl border-2 border-emerald-500 p-8'>

                <h1 className='text-center text-3xl'> Full Signup Form </h1>

                <InputField
                    label="Name"
                    name="name"
                    formik={formik}
                    autoComplete='name'
                />

                <InputField
                    label="Surname"
                    name="surname"
                    formik={formik}
                    autoComplete='family-name'
                />

                <InputField
                    label="Email"
                    type='email'
                    name="email"
                    formik={formik}
                    autoComplete='email'
                />

                <InputField
                    label="Password"
                    type='password'
                    name="password"
                    formik={formik}
                    autoComplete='new-password'
                />

                <label htmlFor="gender"> Gender </label>
                <label htmlFor="male" className=''>
                    <input
                        id='male'
                        type="radio"
                        name='gender'
                        value="male"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender === "male"}
                        className='ms-5'
                    />
                    <span className='cursor-pointer mx-3'> Male </span>
                </label>

                <label htmlFor="female" className=''>
                    <input
                        id='female'
                        type="radio"
                        name='gender'
                        value="female"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        checked={formik.values.gender === "female"}
                        className='ms-5'
                    />
                    <span className='cursor-pointer mx-3'> Female </span>
                </label>
                {
                    formik.touched.gender && formik.errors.gender && (
                        <p className='text-red-600'> {formik.errors.gender} </p>
                    )
                }

                <select
                    name="country"
                    id="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className='w-3/4 outline-none border-2 border-emerald-500 rounded-2xl p-2 bg-black'
                >
                    <option value=""> Select </option>
                    <option value="India"> India </option>
                    <option value="USA"> USA </option>
                    <option value="Canada"> Canada </option>
                    <option value="Aus"> Australia </option>
                </select>

                {
                    formik.touched.country && formik.errors.country && (
                        <p className='text-red-600'> {formik.errors.country} </p>
                    )
                }

                <label htmlFor="profilePic"> Profile Pic </label>
                <input
                    type="file"
                    name='profilePic'
                    ref={fileRef}
                    multiple
                    onChange={(e) => {
                        const filesArray = Array.from(e.target.files);
                        formik.setFieldValue('profilePic', [...formik.values.profilePic, ...filesArray])
                    }}
                    onBlur={formik.handleBlur}
                    accept='image/*'
                    className='w-3/4 outline-none border-2 rounded-2xl border-emerald-500 p-3 text-sm cursor-pointer'
                />
                {
                    formik.touched.profilePic && formik.errors.profilePic && (
                        <p className='text-red-600'> {formik.errors.profilePic} </p>
                    )
                }

                <div className='flex flex-wrap gap-5'>
                    {preview.map((src, index) => (
                        <img key={index} src={src} alt="preview" className='w-24 h-24 rounded-[50%] text-[10px] ' />
                    ))}
                </div>

                <label htmlFor="termsConditions">
                    <input
                        id='termsConditions'
                        type="checkbox"
                        name='termsConditions'
                        checked={formik.values.termsConditions}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='me-5'
                    />
                    <span className='cursor-pointer'>  Accept Terms and Conditions </span>
                </label>
                {
                    formik.touched.termsConditions && formik.errors.termsConditions && (
                        <p className='text-red-600'> {formik.errors.termsConditions} </p>
                    )
                }

                <button type='submit' disabled={loading} className='w-3/4 px-4 py-2 bg-emerald-900 rounded-2xl cursor-pointer'> {loading ? 'Submitting..' : "Save"} </button>

            </form>

        </div>
    );
}

export default FullSignup;
