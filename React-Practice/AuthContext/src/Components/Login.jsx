import React, { useState } from 'react';
import { useAuth } from '../Context/Auth/useAuth';

const Login = () => {

    const { logIn, isAuthenticate } = useAuth()
    // console.log(logIn, "...auth");

    const [form, setForm] = useState({
        userName: "",
        password: ""
    })

    const handleInp = (e) => {
        const { name, value } = e.target;
        // console.log(name, value);

        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await logIn(form)

        // alert("Login Success")

        // console.log(form, "...form");

        // localStorage.setItem("UserLogin", form.userName)

        // setForm({
        //     userName: "",
        //     password: ""
        // })
    }

    if (isAuthenticate) {

    }


    return (
        <div style={{ width: "80%", margin: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "50%" }}>

                <h1> Login </h1>

                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="userName"> UseName :

                        <input
                            id='useName '
                            type="text"
                            placeholder='Enter username here '
                            name='userName'
                            onChange={handleInp}
                            value={form.userName}
                            style={{ padding: "10px", margin: '10px 0' }}
                        />
                    </label>

                    <label htmlFor="password"> Password :

                        <input
                            type="text"
                            placeholder='Enter password here '
                            name='password'
                            onChange={handleInp}
                            value={form.password}
                            style={{ padding: "10px", margin: '10px 0' }}
                        />
                    </label>

                    <button type='submit'> Submit </button>
                </form>

            </div>
        </div>
    );
}

export default Login;
