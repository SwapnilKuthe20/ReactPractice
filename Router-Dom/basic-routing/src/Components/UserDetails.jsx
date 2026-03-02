import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserDetails = () => {

    const [user, setUser] = useState([])
    // console.log(user, "...user");

    const { userId } = useParams()
    // console.log(userId, "..param ");

    const navigate = useNavigate()

    useEffect(() => {
        const fetchSpecificUser = async () => {

            try {
                const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                const userData = await resp.json()
                setUser(userData)

            } catch (error) {
                console.log(error, "..Error occcured while specific user");
            }
        }

        fetchSpecificUser()

    }, [])


    return (
        <div className='bg-black w-full text-white flex flex-col items-center'>
            <h1 className='font-black text-2xl my-12 '> User Details Page </h1>
            {
                <div
                    className="w-60 bg-cyan-800 text-cyan-300 p-3 rounded-2xl cursor-pointer"
                >
                    <h1> Name : {user.name} </h1>
                    <h1> Username : {user.username} </h1>
                    <h1> Phone : {user.phone} </h1>
                    <h1> City : {user?.address?.city} </h1>
                    <h1> Street : {user?.address?.street} </h1>
                </div>

            }

            <button
                onClick={() => navigate(-1)}
                className='px-7 py-1.5 bg-amber-400 text-black font-bold cursor-pointer my-10'
            >
                Back
            </button>
        </div>
    );
}

export default UserDetails;
