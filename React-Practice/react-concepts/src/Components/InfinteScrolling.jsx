import React, { useEffect, useRef, useState } from 'react';

const InfinteScrolling = () => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const target = useRef(null)
    // console.log(target, "..target");

    const fetchPosts = async () => {
        if (loading) return;

        setLoading(true)

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            const data = await response.json()
            // console.log(data, "...data");
            setPosts(prev => [...prev, ...data])
        } catch (error) {
            console.log(error, "..Error....");
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // console.log(entries, "...entries");

            if (entries[0].isIntersecting && !loading) {
                // console.log("Target visible...");
                setPage(prev => prev + 1)
            }
        }, {
            rootMargin: "100px",
            threshold: 0.25,
        })

        if (target.current) {
            observer.observe(target.current)
        }

        return () => {
            observer.disconnect()
        }

    }, [loading])

    return (
        <div className='w-full'>
            <h1 className='text-2xl font-black text-center my-12'> Infinite-Scrolling </h1>

            <div className='flex justify-center flex-wrap gap-3 my-4'>
                {
                    posts.map(({ id, body, title, userId }) => (
                        <div key={id} className='w-3xs p-7 rounded-2xl bg-gray-800'>
                            <h2 className='font-bold text-xl text-center my-3'> UserId : {userId} </h2>
                            <h2 className='text-amber-300 my-2'> Title : {title} </h2>
                            <h2 className='text-pink-300 my-2'> Body : {body} </h2>
                        </div>
                    ))
                }
            </div>

            {loading && <p className="text-center">Loading...</p>}

            <div ref={target} className='h-2 bg-pink-500'> </div>

        </div>
    );
}

export default InfinteScrolling;
