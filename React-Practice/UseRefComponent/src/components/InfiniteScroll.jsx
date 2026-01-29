import React, { useCallback, useEffect, useRef, useState } from 'react';

const InfiniteScroll = () => {

    const [post, setPost] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);

    console.log(post, "...post");

    const boxRef = useRef(null)

    const fetchPost = useCallback(async () => {
        if (loading) return;

        setLoading(true);

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)

            const postData = await res.json()
            setPost(prev => [...prev, ...postData])
            setPage(prev => prev + 1)

        } catch (error) {
            console.log("Error..", error);
        } finally {
            setLoading(false);
        }
    }, [page, loading])

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    fetchPost()
                }
            },
            {
                root: null,
                threshold: 0.5
            }
        )

        if (boxRef.current) {
            observer.observe(boxRef.current)
        }


        return () => observer.disconnect()

    }, [fetchPost, loading])

    return (
        <div>
            <h2> Infinite Scrolling </h2>

            {
                post.map(({ id, title, body }) => (
                    <div
                        key={id}
                        style={{ width: "400px", border: "2px solid yellow", borderRadius: "10px", margin: "10px" }}
                    >
                        <p>title : {title}</p>
                        <p>body : {body} </p>

                    </div>
                ))
            }

            <div ref={boxRef} style={{ width: "200px", height: "100px", backgroundColor: "yellow" }}>
                {loading && <p>Loading...</p>}
            </div>

        </div>
    );
}

export default InfiniteScroll;
