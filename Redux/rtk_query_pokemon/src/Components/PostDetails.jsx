import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../Api/features/pokemonSlice";

const PostDetails = () => {

    const { id } = useParams()
    // console.log(id, "...param");

    const { isLoading, data, isFetching, isError, error } = useGetPostByIdQuery(id)

    // console.log(data, "..data");
    // console.log(isError, "..isError");
    // console.log(isLoading, "..isLoading");
    // console.log(error, "..error");
    // console.log(isFetching, "..isFetching");

    if (isLoading) return <p style={{ textAlign: "center", padding: "50px", height: "100vh" }}>Loading post...</p>;

    if (isError)
        return (
            <p style={{ textAlign: "center", padding: "50px", color: "red", height: "100vh" }}>
                Error: {error?.error || "Something went wrong"}
            </p>
        );

    return (
        <div style={{ width: "400px", height: "100vh", margin: "auto", color: "white", padding: '10px', borderRadius: "10px", cursor: "pointer" }}>
            {
                data &&
                (
                    <div style={{ width: "300px", backgroundColor: "purple", padding: '30px', margin: "20px" }} >
                        <h2> Id : {data.id}</h2>
                        <h2> title : {data.title}</h2>
                        <h2> body : {data.body}</h2>
                    </div>
                )
            }
        </div>
    );
}

export default PostDetails;
