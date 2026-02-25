import { useGetPostByIdQuery, useGetPostsQuery } from '../Redux-Query/services/api';

const Post = () => {

    // const { data, isError, isLoading, error, isFetching, refetch } = useGetPostsQuery()

    // console.log(isLoading, "...isLoading");
    // console.log(data, "...data");
    // console.log(isError, "...isError");
    // console.log(error, "...error");
    // console.log(isFetching, "...isFetching");
    // console.log(refetch, "...refetch");

    console.log("post compo render.....");


    const { data: post1 } = useGetPostByIdQuery(1)
    // const { data: post11 } = useGetPostByIdQuery(1)      // already api run cache present again call nhi hogi
    // const { data: post111 } = useGetPostByIdQuery(1)     // already api run cache present again call nhi hogiF
    const { data: post2 } = useGetPostByIdQuery(2)

    // console.log(post1, "...post1");
    // console.log(post2, "...post2");
    // console.log(post11, "...post11");
    // console.log(post111, "...post111");

    return (
        <div className='flex justify-center'>
            <div className='w-[90%] bg-cyan-900 text-amber-100 p-12 mt-6 rounded-2xl'>
                <h1 className='text-2xl font-mono font-black text-center my-8'> Get Posts </h1>
                {/* 
                <button
                    onClick={refetch}
                    className='py-1.5 px-4 bg-green-500 font-bold m-auto block mb-3 cursor-pointer'
                >
                    Refetch
                </button> */}

                {/* {isLoading && (
                    <p className='text-2xl font-bold text-center'> ....loading </p>
                )}

                {isFetching && (
                    <p className='text-2xl font-bold text-center'> ....refetching data </p>
                )}

                {isError && (
                    <p className='text-2xl font-bold text-center text-red-600'> Error Occured :{error.status} </p>
                )} */}

                {/* <div className='flex flex-wrap justify-center'>
                    {
                        data?.slice(0, 12).map(({ id, title, body }) => (
                            <div key={id} className='bg-amber-600 w-80 p-4 rounded-2xl m-2 '>
                                <h1 className='text-2xl font-mono font-black my-12'> Title : {title} </h1>
                                <h2 className='text-xl font-semibold'> Body : {body} </h2>
                            </div>
                        ))
                    }
                </div> */}


                {post1 && (
                    <div className='bg-gray-500 w-80 p-4 rounded-2xl m-2 '>
                        <h1 className='text-2xl font-mono font-black my-12'> Title : {post1.title} </h1>
                        <h2 className='text-xl font-semibold'> Body : {post1.body} </h2>
                    </div>
                )}

                {post2 && (
                    <div className='bg-gray-500 w-80 p-4 rounded-2xl m-2 '>
                        < h1 className='text-2xl font-mono font-black my-12'> Title : {post2.title} </h1>
                        <h2 className='text-xl font-semibold'> Body : {post2.body} </h2>
                    </div>
                )}

            </div >

        </div >
    );
}

export default Post;
