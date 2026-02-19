import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Features/postSlice";

const Post = () => {

    const dispatch = useDispatch()
    const { status, error, list } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    if (status === "loading") return <h1> Loading...... </h1>
    if (status === "rejected") return <h1> Rejected.... {error} </h1>

    return (
        <div className='w-full p-4 bg-amber-900 text-amber-100'>
            <h2 className="text-center text-4xl mb-4"> Post Page </h2>

            <div className="flex items-center justify-center flex-wrap gap-3">
                {
                    list.map(({ userId, id, body, title }) => (
                        <div key={id} className="w-96 bg-cyan-950 p-3 rounded text-center">
                            <h2> User Id : {userId}</h2>
                            <h2> title : {title}</h2>
                            <h2> body : {body}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Post;
