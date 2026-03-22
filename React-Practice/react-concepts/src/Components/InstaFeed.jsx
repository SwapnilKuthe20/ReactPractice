import { useEffect, useRef, useState } from 'react';

const InstaFeed = () => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(true)
    // console.log(page, "..page ");

    const target = useRef(null)
    // console.log(target, "...target");

    useEffect(() => {
        if (loading || !hasMore) return;

        setLoading(true)

        const fetchPosts = async () => {
            try {
                const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
                const data = await resp.json()
                // console.log(data, "...data");
                if (data.length === 0) {
                    setHasMore(false)
                }

                setPosts(prev => [...prev, ...data])

            } catch (error) {
                console.log(error, "..Error");
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()

    }, [page])

    useEffect(() => {
        if (!target.current) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !loading && hasMore) {
                setPage(prev => prev + 1)
            }
        }, {
            rootMargin: "100px",
            // threshold: 0.5
        })

        observer.observe(target.current)

        return () => {
            observer.disconnect()
        }
    }, [loading, hasMore])


    return (
        <div className='w-full'>
            <h1 className='text-2xl text-center font-bold my-12 underline text-cyan-500'> Insta-Feed </h1>

            <div className='flex justify-center flex-wrap gap-3 my-12'>
                {
                    posts.map(({ id, userId, title, body }) => (
                        <div key={id} className=' w-1/3 bg-amber-950 p-3 rounded-2xl border-amber-200 border-2 '>
                            <h1 className='text-pink-600 font-bold text-xl text-center my-2'> Title : {title}  </h1>
                            <h2 className='text-xl my-2 text-center text-purple-600'> UserID : {userId} </h2>
                            <h2 className='text-orange-400 text-center font-bold my-2'> Body : {body} </h2>
                        </div>
                    ))
                }
            </div>

            {loading && <p className='text-xl text-center font-bold font-mono'> ....Loading </p>}

            {!hasMore && <p className='text-xl text-center font-bold font-mono'> No more data</p>}

            <div ref={target} className='h-2 bg-green-400 '> </div>

            {/* <button
                onClick={() => setPage(prev => prev + 1)}
                className='bg-cyan-400 px-4 py-2 text-black m-auto block mb-4 cursor-pointer'
            >
                Load More !
            </button> */}


        </div>
    );
}

export default InstaFeed;
