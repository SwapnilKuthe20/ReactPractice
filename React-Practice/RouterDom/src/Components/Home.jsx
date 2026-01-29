import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ width: "250px", backgroundColor: "yellow", height: "100vh" }}>
            <h1 style={{ textAlign: "center", padding: '10px 0 10px 0', color: "blue" }}> Home </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <p style={{ padding: "10px" }}>
                    <Link to='/login' > Login </Link>
                </p>

                <p style={{ padding: "10px" }}>
                    <Link to='/dashboard' > Dashboard </Link>
                </p>

                <p style={{ padding: "10px" }}>
                    <Link to='/about' > About </Link>
                </p>
                <p style={{ padding: "10px" }}>
                    <Link to='/contact' > Contact </Link>
                </p>

                <p style={{ padding: "10px" }}>
                    <Link to='/logout' > Logout </Link>
                </p>
            </div>
        </div>
    );
}

export default Home;
