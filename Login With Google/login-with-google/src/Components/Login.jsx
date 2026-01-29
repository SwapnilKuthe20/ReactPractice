import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

const Login = () => {
    return (
        <div style={{ padding: "50px" }}>

            <h1> Login With Google </h1>

            <GoogleLogin
                onSuccess={(response) => {
                    console.log("GoogleLogin Success !!");
                    console.log(response, "...response");
                }}

                onError={(err) => {
                    console.log("GoogleLogin Failed !!");
                    console.log(err, "...Error");
                }}
            />

        </div>
    );
}

export default Login;
