import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginApi } from '../Redux/features/loginSlice';

const LoginRedux = () => {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const { loading, data, error } = useSelector(state => state.loginUser)

    const dispatch = useDispatch()

    const handleForm = (e) => {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(loginApi(form))

        localStorage.setItem("formData", JSON.stringify(form))

    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-600 text-black rounded-2xl p-9 mt-12'>

                <h1 className='text-2xl text-center font-bold my-12'> Login User - RTK </h1>

                <form action="" onSubmit={handleSubmit} className='flex flex-col'>
                    <label htmlFor="username"> Username </label>
                    <input
                        id='username'
                        type="text"
                        name='username'
                        value={form.username}
                        onChange={handleForm}
                        placeholder='Enter username here...'
                        autoComplete='usename'
                        className='outline-none border-2 border-amber-300 rounded-2xl px-4 py-1.5 my-4'
                    />

                    <label htmlFor="password"> Password </label>
                    <input
                        id='password'
                        name='password'
                        type="password"
                        value={form.password}
                        onChange={handleForm}
                        placeholder='Enter password here...'
                        autoComplete='current-password'
                        className='outline-none border-2 border-amber-300 rounded-2xl px-4 py-1.5 my-4'
                    />

                    <button
                        type='submit'
                        className='bg-amber-900 py-2 px-4 rounded-2xl block my-12 m-auto cursor-pointer'
                    >
                        Save
                    </button>

                </form>

            </div>
        </div>
    );
}

export default LoginRedux;
