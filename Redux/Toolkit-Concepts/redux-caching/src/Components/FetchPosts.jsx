import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../Redux/features/postSlice';
import { useNavigate } from 'react-router-dom';

const FetchPosts = () => {

    const navigate = useNavigate()

    const { loading, posts, error } = useSelector(state => state.posts)

    const disptach = useDispatch()

    const handleFetchPost = () => {
        disptach(fetchPosts())
    }

    const handleNav = () => {
        navigate('/totalPost')
    }


    return (
        <div className='flex justify-center'>
            <div className='w-[80%] bg-amber-950 rounded-2xl p-12'>
                <h1 className='text-2xl text-center font-bold my-4'> Fetch Posts </h1>

                <button
                    onClick={handleFetchPost}
                    className='py-2 px-7 rounded-2xl bg-cyan-800 text-white font-black cursor-pointer my-5 block m-auto'
                > fetch Posts
                </button>

                <button onClick={handleNav} className='px-7 py-1.5 bg-green-500 text-black m-auto block rounded-2xl cursor-pointer my-2'>
                    navigate TOtalPost
                </button>

                {
                    loading == "pending" && (
                        <p className='text-2xl font-bold text-center'> ...loading </p>
                    )
                }

                {
                    error && (
                        <p className='text-2xl text-red-700 text-center'> {error} </p>
                    )
                }

                <div className='flex justify-center items-center flex-wrap gap-3'>
                    {
                        posts.map(({ userId, title, id, body }) => (
                            <div key={id} className='w-2xs p-6 rounded-2xl bg-cyan-700'>
                                <h1 className='text-green-400 font-bold '> Title : {title} </h1>
                                <h2 className='text-red-700 font-bold '> UserId : {userId} </h2>
                                <h2 className='text-yellow-400 font-bold '> Body : {body} </h2>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default FetchPosts;
