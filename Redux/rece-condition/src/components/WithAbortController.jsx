import React, { useEffect, useRef, useState } from 'react';

const WithAbortController = () => {

    const [query, setQuery] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    const controllerRef = useRef()
    // console.log(controllerRef, "..cont ref");

    useEffect(() => {

        // 🔥 cancel previous request   // Immediately cancel previous
        if (controllerRef.current) {
            controllerRef.current.abort()
        }

        const controller = new AbortController()
        controllerRef.current = controller

        const fetchProduct = async () => {
            try {
                setLoading(true)
                setError(null)

                const result = await fetch(`https://dummyjson.com/products/search?q=${query}`, { signal: controller.signal })
                const resp = await result.json()

                setData(resp)
                setError(null)

            } catch (error) {
                console.log(error, "..Error");
                if (error.name == "AbortError") {
                    setError(error.message)
                }

            } finally {
                setLoading(false)
            }
        }

        fetchProduct()

        return () => {
            controller.abort()
        }

    }, [query])


    return (
        <div className='flex justify-center'>
            <div className='w-1/2 bg-cyan-950 text-white rounded-2xl mt-6 p-12'>
                <h1 className='font-bold text-2xl text-center my-12'> Without Abort Controller </h1>

                <label htmlFor="search"> Serach Products </label>
                <input
                    id='search'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
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
                    data?.products?.map(({ id, category, description, brand, availabilityStatus }) => (
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

export default WithAbortController;
