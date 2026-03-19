import React, { useState } from 'react';

const Search = () => {

    const [search, setSearch] = useState("")
    // console.log(search, "...seaerch");

    const [products, setProducts] = useState([])
    // console.log(products, "...products ");

    const handleChange = async (e) => {
        const value = e.target.value;
        setSearch(value)

        if (value.trim() === "") {
            setProducts([])
            return
        }

        try {
            const resp = await fetch(`https://dummyjson.com/products/search?q=${value}`)
            const result = await resp.json()
            // console.log(result, "...result Api ");
            setProducts(result.products)

        } catch (error) {
            console.log(error, "...error occured");

        }

    }

    return (
        <div className='min-h-screen w-full bg-black text-white'>
            <div className='flex justify-center '>
                <div className='w-2/3 bg-cyan-800 min-h-screen px-14'>

                    <h1 className='text-blue-50 text-center py-12 text-2xl font-bold'> Debouncing </h1>

                    <label htmlFor="search" className='block'> Search </label>
                    <input
                        type="text"
                        id='search'
                        value={search}
                        onChange={handleChange}
                        className='px-2 py-2.5 rounded-2xl border-2 outline-none'
                        placeholder='Search items....'
                    />

                    <ul className=''>

                        {
                            products.length > 0 ? (
                                products.map(({ id, title, category, price, rating }) => (
                                    <li key={id} className='bg-red-950 rounded-xl p-3 m-3 '>
                                        <h1> Title : {title} </h1>
                                        <h3> Category : {category} </h3>
                                        <h3> Price : {price} </h3>
                                        <h3> Rating : {rating} </h3>
                                    </li>
                                )))
                                :
                                <h1 className='font-black'> No products found </h1>
                        }
                    </ul>

                </div>

            </div>

        </div >
    )
}

export default Search;
