import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()
    // console.log(navigate, "...navigate");

    const handleLogin = () => {
        localStorage.setItem('token', "swap0720")
        navigate('/dashboard', { replace: true })
    }

    return (
        <div>
            <h1> Login </h1>

            <button onClick={handleLogin}> Login </button>
        </div>
    );
}

export default Login;
