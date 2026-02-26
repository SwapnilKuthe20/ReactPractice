import { useAddPostMutation, useDeletePostMutation, useGetPostByIdQuery, useGetPostsQuery, useUpdatePostMutation } from "../Redux/services/api";

const FineGrained = () => {

    const { isLoading, data, isError } = useGetPostsQuery()
    // console.log(data, "....data");

    const [addPost, { data: addPostData, error: addPostError, isLoading: addPostLoading }] = useAddPostMutation()

    const { isLoading: postIdLoading, data: postIdData, error: postIdErr } = useGetPostByIdQuery(1)
    // console.log(postIdData, "...post data");


    const [updatePost, { data: updateData, error: updateErr, isLoading: updateLoading }] = useUpdatePostMutation()

    const [deletePost, { data: deletedData }] = useDeletePostMutation(2)

    const handlePost = (id, title, body) => {
        const updateData = {
            id,
            title: "UPdate post Bhai" + " " + title,
            body
        }
        updatePost(updateData)
    }

    return (
        <div className='flex justify-center'>
            <div className='w-10/12 bg-green-700 rounded-2xl p-12 mt-8'>
                <h1 className='text-3xl my-4 text-center font-mono font-black'> Fine Grained Concept : </h1>

                {isLoading && (
                    <p className="text-2xl my-3 text-center font-bold font-mono"> ...loading </p>
                )}

                {isError && (
                    <p className="text-2xl text-red-700 my-3 text-center font-bold font-mono"> ...loading </p>
                )}

                <button
                    onClick={() => addPost({ title: "lorem epsum", body: "lorem swapnil kuthe Sandip parag girish.." })}
                    className="py-1.5 px-5 bg-purple-600 text-white font-black block m-auto my-7 cursor-pointer"
                >
                    Add Post
                </button>

                {/* ---------- ADD POST  */}
                {addPostLoading && (
                    <p className="text-2xl my-3 text-center font-bold font-mono"> ...Add post loading </p>
                )}

                {/* -------- ADD POST -------- */}
                {addPostData && (
                    <div className="bg-cyan-700 w-80 p-5 rounded-2xl m-auto" onClick={({ id }) => deletePost(id)}>
                        <h1 className="text-center"> Id : {addPostData.id}</h1>
                        <h1 className="text-2xl text-yellow-400 my-3"> Title : {addPostData.title} </h1>
                        <h2 className="text-xl font-bold font-sans "> Body : {addPostData.body} </h2>
                    </div>
                )}

                {/* ----------- GET ALL POSTS ------------- */}
                <div className="flex flex-wrap justify-center">
                    {data?.slice(0, 10)?.map(({ id, title, body }) => (
                        <div key={id} className="bg-cyan-700 w-80 p-5 rounded-2xl m-2" onClick={() => handlePost(id, title, body)}>
                            <h1 className="text-2xl text-yellow-400 my-3"> Title : {title} </h1>
                            <h2 className="text-xl font-bold font-sans "> Body : {body} </h2>
                        </div>
                    ))}
                </div>

                {/* ---------- Update ----------- */}
                {isLoading && (
                    <p className="text-2xl my-3 text-center font-bold font-mono"> ...loading </p>
                )}

                {isError && (
                    <p className="text-2xl text-red-700 my-3 text-center font-bold font-mono"> ...loading </p>
                )}
                <div className="flex flex-wrap justify-center">
                    {updateData && (
                        <div className="bg-cyan-700 w-80 p-5 rounded-2xl m-2" >
                            <h1 className="text-2xl text-yellow-400 my-3"> Title : {updateData.title} </h1>
                            <h2 className="text-xl font-bold font-sans "> Body : {updateData.body} </h2>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default FineGrained;
