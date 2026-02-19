import React, { useEffect, useState } from 'react';

const WithoutAbortController = () => {

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [productsData, setProductsData] = useState([]);

    // console.log(query, "...query");
    // console.log(productsData, "...productData");
    // console.log(loading, "...loding");
    console.log(error, "...eroor");

    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true)
            setError(null)

            try {
                const result = await fetch(`https://dummyjson.com/products/search?q=${query}`)
                const response = await result.json()
                setProductsData(response)

            } catch (error) {
                console.log(error, "...error");
                setLoading(false)
                if (error.name !== "AbortError") {
                    setError("Something went wrong")
                }

            } finally {
                setLoading(false)
            }
        }

        fetchProducts()

    }, [query])

    const handleSearch = (e) => {
        const value = e.target.value;

        setQuery(value)
    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-950 text-white rounded-2xl mt-6 p-12'>
                <h1 className='font-bold text-2xl text-center my-12'> Without Abort Controller </h1>

                <label htmlFor="search"> Serach Products </label>
                <input
                    id='search'
                    type="text"
                    value={query}
                    onChange={handleSearch}
                    placeholder='Enter Product name...'
                    className='border-2 border-emerald-400 rounded-2xl py-1.5 px-6 mt-5 outline-none'
                />

                {
                    loading && <p className='text-2xl font-bold text-center'> ....loading </p>
                }
                {
                    error && <p className='text-2xl font-bold text-red-800 text-center'> {error} </p>
                }

                {
                    productsData?.products?.map(({ id, category, description, brand, availabilityStatus }) => (
                        <div key={id} className='bg-cyan-200 text-black font-bold rounded-2xl p-3 m-3'>

                            <h1> Brand : {brand} </h1>
                            <h1 className='text-blue-800'> Category : {category} </h1>
                            <h1 className='text-red-800'> Description : {description} </h1>
                            <h1 className='text-purple-950'> Available : {availabilityStatus} </h1>
                        </div>

                    ))

                }


            </div>
        </div>
    );
}

export default WithoutAbortController;
