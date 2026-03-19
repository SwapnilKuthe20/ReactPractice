import React, { useEffect, useState } from 'react';

const Deboucing = () => {

    const [search, setSearch] = useState("")
    const [response, setResponse] = useState([])

    useEffect(() => {
        if (!search.trim()) return;

        const controller = new AbortController()

        const timer = setTimeout(async () => {
            // console.log("Api call");

            try {
                // console.log(controller.signal, "...controller");

                const apires = await fetch(`https://dummyjson.com/products/search?q=${search}`, {
                    signal: controller.signal
                })
                const response = await apires.json()

                setResponse(response.products)

            } catch (error) {
                console.log(error, "..Error Occured ");
                if (error.name === "AbortError") {
                    console.log("Request Cancle Coz of AbortCOntroller");
                }
            }
        }, 1000);

        return () => {
            clearTimeout(timer)     // debounce Cleanup
            controller.abort()      // Abort Prev Req
        }

    }, [search])


    return (
        <div className='bg-gray-700 max-w-4/5 m-auto min-h-screen p-9'>

            <h1 className='text-center font-black text-2xl'> Debouncing Practice </h1>

            <label htmlFor="search"> Search </label>
            <input
                type="text"
                id='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search here....'
                className='border-2 border-white outline-none px-2 py-3 block rounded-2xl my-3'
            />

            <ul>
                <h2> Products Length : {response.length} </h2>
                {
                    response.length > 0 ?
                        response.map(({ id, title, price, description, rating }) => (
                            <li key={id} className='p-4 rounded-2xl bg-green-950 m-3'>
                                <h1> Title : {title} </h1>
                                <h2> Price : {price} </h2>
                                <h2> Rating : {rating} </h2>
                                <h2> Description : {description} </h2>
                            </li>
                        ))
                        :
                        <h1> No products found !! </h1>
                }
            </ul>

        </div>
    );
}

export default Deboucing;
