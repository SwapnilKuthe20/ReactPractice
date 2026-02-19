import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchProductsApi } from '../Redux/features/searchProductsSlice';

const SearchProducts = () => {
    const [query, setQuery] = useState("");

    const { loading, data, error } = useSelector(state => state.searchProducts)

    // console.log(data.products, "...data");

    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            const promise = await dispatch(searchProductsApi(query)).unwrap()
            console.log(promise, "..dispatch returns promise");

        } catch (error) {
            console.log(error, "...error");

        }

        return () => {
            promise.abort()
        }

    }, [query])


    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value)
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-950 rounded-2xl mt-12 p-8'>
                <h1 className='text-2xl my-12 text-center font-bold'> Search Products </h1>

                <label htmlFor="search"> Search product </label>
                <input
                    id='search'
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder='Search products...'
                    className='py-1.5 px-4 outline-none border-2 border-amber-500 rounded-2xl mt-5'
                />

                {
                    (loading === "pending") && (
                        <p className='text-2xl font-bold text-center my-5'> ...loading </p>
                    )
                }
                {
                    error && (
                        <p className='text-2xl text-center font-bold text-red-600'> {error} </p>
                    )
                }
                {
                    data?.products?.map(({ id, description, brand, category }) => (
                        <div key={id} className='bg-amber-300 m-3 p-8'>
                            <h1 className='text-red-700'>  category:{category} </h1>
                            <h1 className='text-green-700'>  brand:{brand} </h1>
                            <h1 className='text-purple-700'>  description:{description} </h1>
                        </div>
                    ))
                }


            </div>
        </div>
    );
}

export default SearchProducts;
