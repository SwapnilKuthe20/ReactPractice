import React, { useEffect, useRef, useState } from 'react';

const Debouncing = () => {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const cache = useRef({})
    // console.log(cache, "...cache ");

    useEffect(() => {
        if (!search.trim()) {
            setProducts([])
            return;
        };

        if (cache.current[search]) {
            console.log("Data from cache...");
            setProducts(cache.current[search]);
            setLoading(false)
            return;
        }

        const controller = new AbortController()

        const timerId = setTimeout(async () => {
            try {
                setLoading(true)

                const response = await fetch(`https://dummyjson.com/products/search?q=${search}`, {
                    signal: controller.signal
                })
                const data = await response.json()

                // console.log(data.products, "...data");
                cache.current[search] = data.products;

                console.log("...data from api");

                setProducts(data.products)

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Api aborted to avoid race condition !!");
                } else {
                    console.log(error, "...error occured !!");
                }
            } finally {
                setLoading(false)
            }

        }, 1000)

        return () => {
            clearTimeout(timerId)
            controller.abort()
        }

    }, [search])

    return (
        <div className='bg-green-950 max-w-4/5 m-auto min-h-screen p-12'>

            <h2 className='text-2xl font-bold text-center'> Debouncing / AbortController </h2>

            <div className='p-12 block w-2/3 m-auto border-gray-400 border-2 my-12 rounded-2xl'>
                <label htmlFor="search"> Search Products </label>

                <input
                    type="text"
                    id='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search products here....'
                    className='border-2 border-white px-2 py-3 rounded-2xl my-5 block'
                />
            </div>
            {
                loading && <p className='text-yellow-300 text-2xl text-center font-black'> Loading... </p>
            }

            <ul className='text-center'>
                {
                    (!loading && products.length === 0) &&
                    <h1> No Products found !! </h1>
                }

                {
                    products.length > 0 ?
                        products.map(({ id, price, rating, title, description, category }) => (
                            <li key={id} className='p-3 m-3 rounded-2xl bg-cyan-900 '>
                                <h1 className=' font-black'> Title : {title} </h1>
                                <h2> Category : {category} </h2>
                                <h2> Price : {price} </h2>
                                <h2> Rating : {rating} </h2>
                                <h2> Description : {description} </h2>
                            </li>
                        ))
                        :
                        <h1> Products not Found !! </h1>
                }


            </ul>

        </div>
    );
}

export default Debouncing;
