import React from 'react';
import UseUserContext from '../../contexts/ContextUser/UseUserContext';

const Navbar = () => {

    const { user,
        isLogin,
        login,
        logout
    } = UseUserContext();


    return (
        <div>
            <h1> Navbar </h1>
            {
                isLogin ? (
                    <>
                        <p> {user} </p>
                        <button onClick={logout}> Logout </button>
                    </>
                ) :
                    <>
                        <p> Guest </p>
                        <button onClick={() => login("Deep")}>Login</button>
                    </>
            }

        </div>
    );
}

export default Navbar;
