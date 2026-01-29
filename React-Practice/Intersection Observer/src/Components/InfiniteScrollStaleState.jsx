import { useEffect, useState } from "react";

const InfiniteScrollStaleState = () => {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);

    console.log(page, "...page");


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then(res => res.json())
            .then(data => {
                debugger; // ⛔ BREAKPOINT
                setPosts([...posts, ...data]);
            });
    }, []); // ❌ EMPTY DEP ARRAY

    return (
        <div>
            <div>
                <button onClick={() => setPage(page + 1)}>Load More</button>
                {posts.map(p => <p key={p.id}>{p.title}</p>)}
            </div>
        </div>
    );
}

export default InfiniteScrollStaleState;

