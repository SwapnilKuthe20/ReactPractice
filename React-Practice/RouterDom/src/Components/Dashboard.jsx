import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1> Dashboard </h1>

            <button onClick={handleBack}> Back </button>
            
        </div>
    );
}

export default Dashboard;
