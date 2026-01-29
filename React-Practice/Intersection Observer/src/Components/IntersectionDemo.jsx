import React, { useCallback, useEffect, useRef, useState } from 'react';

const IntersectionDemo = () => {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasMore, setHasMore] = useState(true)

    const pageRef = useRef(1)
    const loaderRef = useRef(null)
    const observerRef = useRef(null)
    const abortRef = useRef(null)


    console.log(observerRef.current, "...observerRef");
    // console.log(pageRef.current, "...pageRef current");
    console.log(posts.length, "..length");


    const fetchPosts = useCallback(async () => {
        if (loading || !hasMore) return;

        // 🔥 Abort previous request if still running
        if (abortRef.current) {
            abortRef.current.abort()
        }

        const controller = new AbortController()
        abortRef.current = controller

        setLoading(true)
        setError(null)

        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts?_page=${pageRef.current}&_limit=10`,
                { signal: controller.signal }
            )

            if (!res.ok) {
                throw new Error("Network response failed");
            }

            const postData = await res.json()

            if (postData.length === 0) {
                setHasMore(false)
                return
            }

            setPosts(prev => [...prev, ...postData])
            pageRef.current += 1

        } catch (error) {
            console.log("Error : ", error.message);
            setError("Something went wrong ")

        } finally {
            console.log("Finally ");
            setLoading(false)
        }
    }, [loading, hasMore])


    useEffect(() => {

        if (!loaderRef.current) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                // console.log(entries, "...entries");
                // console.log(entries[0].isIntersecting, "...entries isIntersecting");

                if (entries[0].isIntersecting) {
                    console.log("Obsever fire...");

                    fetchPosts()
                }
            },
            {
                root: null,
                threshold: 0.1
            }
        )

        observerRef.current.observe(loaderRef.current)

        return () => {
            observerRef.current.disconnect()
            abortRef.current.abort()            // 🔥 cleanup pending request
        }

    }, [fetchPosts])

    return (
        <div>
            <h1> Intersection Observer : Infinite Scrolling </h1>

            {
                posts.map(({ id, title, body }) => (
                    <div
                        key={id}
                        style={{ width: "400px", border: "4px solid green", borderRadius: "10px", margin: "15px", padding: "10px" }}
                    >
                        <p style={{ fontWeight: "bold" }}> Title : {title} </p>
                        <p> Body : {body} </p>
                    </div>
                ))
            }

            {
                loading &&
                <p style={{ color: "yellow", fontSize: "30px" }}> ....Loading </p>
            }
            {
                error &&
                <p style={{ color: "red", fontSize: "30px" }}> Error : {error} </p>
            }
            {
                !hasMore &&
                <p style={{ color: "green", fontSize: "30px" }}> No more posts...!! </p>
            }

            <div ref={loaderRef} style={{ height: "1px" }}>  </div>
        </div>
    );
}

export default IntersectionDemo;
