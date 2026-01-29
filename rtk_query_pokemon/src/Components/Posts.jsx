import { useNavigate } from "react-router-dom";
import { useGetPostsQuery } from "../Api/features/pokemonSlice";
import AddPost from "./AddPost";

const Posts = () => {

    // const hookData = useGetPostsQuery()
    const { data, isError, isLoading, error } = useGetPostsQuery()

    const navigate = useNavigate()

    // console.log(hookData, "..hookData");
    // console.log(data, "..data");
    // console.log(isError, "..isError");
    // console.log(isLoading, "..isLoading");
    // console.log(error, "..error");

    const handlePost = (id) => {
        navigate(`/posts/${id}`)
    }

    if (isLoading) return <p style={{ backgroundColor: "black", color: "white", height: "100vh", textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ backgroundColor: "black", color: "white", height: "100vh", textAlign: "center" }}>Error! -- {error.status}--{error.error}</p>;

    return (
        <div style={{ width: "90%", margin: "auto", backgroundColor: "green", color: "white" }}>
            <h1 style={{ textAlign: "center", padding: "20px" }}> Posts </h1>

            <AddPost />

            <ul style={{ listStyle: "none", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                {
                    data?.map(({ id, title, body }) => (
                        < li key={id} onClick={() => handlePost(id)} style={{ width: "400px", padding: '10px', borderRadius: "10px", backgroundColor: "purple", cursor: "pointer" }}>
                            <h2> Id : {id}</h2>
                            <h2> title : {title}</h2>
                            <h2> body : {body}</h2>
                        </li>
                    ))
                }
            </ul>


        </div >
    );
}

export default Posts;
