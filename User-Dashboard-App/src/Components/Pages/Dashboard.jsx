import React from 'react';
import { useAuth } from '../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const { logOut } = useAuth()
  const navigate = useNavigate()


  const handleLogout = () => {
    logOut();
    navigate("/")
  }

  return (
    <div>
      <h3> Dashboard Component </h3>

      <button onClick={handleLogout} className='btn'> logout </button>
    </div>
  );
}

export default Dashboard;
