import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/userSlice';

const Users = () => {
    const { loading, data, error } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const result = dispatch(fetchUsers())
        // console.log(result, "...result");

        return () => {
            
        }

    }, [])

    if (loading) return (<p className='text-3xl text-center font-extrabold '> Loading.....</p>)
    if (error) return (<p className='text-3xl text-center font-extrabold text-red-700 '> {error} </p>)

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-950 rounded-2xl p-9 mt-12'>
                <h1 className='text-2xl text-center font-bold'> Users Fetch </h1>

                {
                    data && (
                        data.map(({ id, name, username, email }) => (

                            <div id={id} className='bg-cyan-400 p-7 rounded-2xl m-2 text-red-600' >
                                <p> Name : {name} </p>
                                <p> UserName  : {username} </p>
                                <p> Email : {email} </p>
                            </div>
                        ))
                    )
                }


            </div>
        </div >
    );
}

export default Users;
