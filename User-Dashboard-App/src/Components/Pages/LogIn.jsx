import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const LogIn = () => {

  const { logIn } = useAuth()
  const navigate = useNavigate()

  const handleLogin = () => {
    logIn();             // ✅ set isLoggedIn = true
    navigate("/dashboard"); // redirect after login
  };

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin} className='btn'>Login</button>
    </div>
  );
}

export default LogIn;
