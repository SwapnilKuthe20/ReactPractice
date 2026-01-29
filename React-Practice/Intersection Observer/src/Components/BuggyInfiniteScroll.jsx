import React, { useEffect, useRef, useState } from "react";

const BuggyInfiniteScroll = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loaderRef = useRef(null);
    const pageRef = useRef(1);

    // ❌ NORMAL FUNCTION (NO useCallback)
    const fetchPosts = async () => {
        console.log("fetchPosts called | loading:", loading);

        if (loading || !hasMore) return;

        setLoading(true);

        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts?_page=${pageRef.current}&_limit=5`
        );

        const data = await res.json();

        setPosts(prev => [...prev, ...data]);
        pageRef.current += 1;
        setLoading(false);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                observer.disconnect(); // sirf clarity ke liye
                fetchPosts();
            }
        });

        observer.observe(loaderRef.current);

        return () => observer.disconnect();
    }, []); // ❌ fetchPosts dependency me bhi nahi

    return (
        <div>
            <h3>Buggy Infinite Scroll</h3>

            {posts.map(p => (
                <p key={p.id}>{p.title}</p>
            ))}

            <p>Loading: {String(loading)}</p>

            <div ref={loaderRef} style={{ height: "1px" }} />
        </div>
    );
};

export default BuggyInfiniteScroll;
