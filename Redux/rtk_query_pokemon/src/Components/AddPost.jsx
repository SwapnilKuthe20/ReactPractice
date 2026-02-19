import React from 'react';
import { useAddPostMutation } from '../Api/features/pokemonSlice';

const AddPost = () => {

    const [addPost, { isError, isLoading, isSuccess }] = useAddPostMutation()

    // console.log(addPost, "....addPost");
    // console.log(arg1, "....arg1");

    const handleAdd = async () => {
        try {
            await addPost({ title: "New Post", body: "Hello world" }).unwrap(); // unwrap for proper error handling
            alert("Post added succesfully..!!")
        } catch (error) {
            console.log("Error occured ..?", error);
            alert("Errror in addPOst.???")
        }
    }


    return (
        <div style={{ marginBottom: "20px" }}>
            <button onClick={handleAdd} disabled={isLoading} style={{ padding: "10px 20px", cursor: "pointer" }}>
                {isLoading ? "Adding..." : "Add Post"}
            </button>
            {isError && <p style={{ color: "red" }}>Error: {error?.status || "Something went wrong"}</p>}
            {isSuccess && <p style={{ color: "green" }}>Post added successfully!</p>}
        </div>
    );
}

export default AddPost;
