import React, { useEffect, useRef, useState } from 'react';

const Debouncing = () => {
    const [search, setSearch] = useState("")
    const [products, setProducts] = useState([])

    const cache = useRef({})
    console.log(cache, "...cache");

    useEffect(() => {
        if (!search.trim()) {
            setProducts([])
            return;
        }

        if (cache.current[search]) {
            console.log("Products fetch from cache...");
            setProducts(cache.current[search])
            return;
        }

        const controller = new AbortController()

        const timerId = setTimeout(async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/search?q=${search}`, {
                    signal: controller.signal
                })
                const data = await response.json()
                // console.log(data, "...data");

                if (!cache.current[search]) {
                    cache.current[search] = data.products;
                }
                console.log("Products fetch from API...");

                setProducts(data.products)

            } catch (error) {
                if (error.name === "AbortError") {
                    console.log("Api aborted... for new Data");
                } else {
                    console.log(error, "....Error Occured");
                }
            }
        }, 1000)

        return () => {
            clearTimeout(timerId);
            controller.abort()
        }

    }, [search])

    return (
        <div className='w-full'>
            <h1 className='text-center text-2xl font-black my-12'> Debouncing </h1>
            <div className='w-80 m-auto bg-green-800 border-2 border-amber-400 rounded-2xl px-15 py-7 mt-12'>
                <h1 className='text-2xl font-black text-center my-4'> Search Products </h1>

                <label htmlFor="search"> Search </label>
                <input
                    type="text"
                    id='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search here...'
                    className='rounded-2xl border-2 border-amber-300 px-3 py-2 outline-none block my-4'
                />
            </div>

            <ul className='flex justify-center flex-wrap gap-3 mt-5'>
                {
                    products.map(({ id, title, description, category, price, stock }) => (
                        <li key={id} className='bg-pink-700 rounded-2xl p-7 text-green-400 w-1/3'>
                            <h1> <span className='text-xl text-purple-950'> Title </span> : {title} </h1>
                            <h2> <span className='text-xl text-purple-950'> Category </span> : {category} </h2>
                            <h2> <span className='text-xl text-purple-950'> Price </span> : {price} </h2>
                            <h2> <span className='text-xl text-purple-950'> Stock </span> : {stock} </h2>
                            <h2> <span className='text-xl text-purple-950'> Description </span> : {description} </h2>
                        </li>
                    ))
                }
            </ul>


        </div>
    );
}

export default Debouncing;
