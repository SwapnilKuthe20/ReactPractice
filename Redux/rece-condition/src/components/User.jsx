import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../redux/features/userSlice';

const User = () => {

    const [query, setQuery] = useState("")

    const { loading, data, error } = useSelector(state => state.userList)
    // console.log(data.products, "...data");

    const dispatch = useDispatch()

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)

        // console.log(value, "...value");


        if (value.trim() !== "") {
            dispatch(searchUsers(value))
        }
    }


    return (
        <div className='flex justify-center '>
            <div className='w-1/2 bg-cyan-950 text-amber-100 p-6 min-h-screen'>
                <h1 className='text-2xl text-center font-bold'> Users Data - Race Conditions </h1>

                <label htmlFor="user"> Search Users : </label>
                <input
                    id='user'
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    className='outline-none border-2 border-amber-300 py-2 px-4 rounded-2xl my-5'
                />
                {
                    loading && (
                        <p className='text-3xl text-center font-bold pt-5'> ...loading </p>
                    )
                }

                {
                    data && (
                        data.products?.map(({ id, brand, description, category }) => (
                            // console.log(data, "...data")

                            <div key={id} className='p-5 rounded-2xl bg-amber-600 text-black text-center m-2'>
                                <h2> Brand : {brand} </h2>
                                <h2> category : {category} </h2>
                                <h2> description : {description} </h2>
                            </div>

                        ))
                    )
                }
                {
                    error && (
                        <p className='text-3xl text-center font-bold pt-5 text-red-600'> {error} </p>
                    )
                }

            </div>
        </div>
    );
}

export default User;


