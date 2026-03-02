import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate()

    const handleCLick = () => {
        navigate('/', { replace: true })
    }

    return (
        <div>
            <h1> Login Component </h1>

            <button onClick={handleCLick}> login btn </button>


        </div>
    );
}

export default Login;
