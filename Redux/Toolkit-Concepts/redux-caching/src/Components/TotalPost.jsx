import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/features/postSlice';
import { useNavigate } from 'react-router-dom';

const TotalPost = () => {

    const naviagate = useNavigate()

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const handleNav = () => {
        naviagate('/fetchPost')
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 p-12 mt-12 bg-green-900 rounded-2xl'>
                <h1> Posts Total : {posts.length} </h1>

                <button
                    onClick={handleNav}
                    className='py-2 px-7 rounded-2xl bg-cyan-800 text-white font-black cursor-pointer my-5 block m-auto'
                > Navigate fetch Posts
                </button>

            </div>
        </div>
    );
}

export default TotalPost;
