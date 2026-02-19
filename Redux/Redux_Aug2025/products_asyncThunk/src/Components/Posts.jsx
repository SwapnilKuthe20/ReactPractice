import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Features/postSlice";

const Posts = () => {

    const { posts, status, error } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    if (status == "loading") return <h1 className="h-screen bg-amber-950">Loading.......</h1>
    if (status == "failed") return <h1 className="h-screen bg-amber-950 text-white">Rejected.......{error}</h1>

    return (
        <div className="bg-amber-950 w-11/12 m-auto">
            <h2 className="text-center text-3xl p-3.5"> Post Page </h2>

            <h4> Post : </h4>
            <div className="flex items-center justify-center gap-3 flex-wrap">
                {
                    posts.map(({ id, userId, title, body }) => (
                        <div key={id} className="w-2xs p-3 m-2 bg-cyan-950 text-cyan-100">
                            <h2>userId : {userId}</h2>
                            <h2>title : {title}</h2>
                            <h2>body : {body}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Posts;
