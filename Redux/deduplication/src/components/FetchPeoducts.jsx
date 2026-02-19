import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/features/productSlice';

const FetchPeoducts = () => {

    const { loading, data, error } = useSelector(state => state.products)
    // console.log(data, "...data");

    const dispatch = useDispatch()

    useEffect(() => {

        const promise = dispatch(fetchProducts())
        promise
            .unwrap()
            .then((data =>
                console.log(data, "...data")
            ))
            .catch((err) => {
                console.log(err, "...err abort promise");
            })

        // return () => {
        //     promise.abort()
        //     // promise1.abort()
        // }

    }, [dispatch])

    return (
        <div className='flex justify-center'>
            <div className='w-4/5 bg-cyan-950 rounded-2xl mt-12 p-8'>

                <h1 className='text-2xl text-center my-10'> Fetch Products </h1>

                {
                    loading === "loading" && (
                        <p className='text-2xl font-bold text-center my-7'> .....loading </p>
                    )
                }

                {
                    error && (
                        <p className='text-2xl text-center text-red-600 my-7'> {error} </p>
                    )
                }

                <div className='flex flex-wrap justify-center gap-3'>
                    {
                        data?.products?.map(({ id, description, category, brand, availabilityStatus, images }) => (
                            <div key={id} className='bg-emerald-600 w-3xs rounded-2xl p-7 '>
                                <img src={images} alt="product-img" className='w-28 bg-amber-50 rounded-2xl m-auto' />
                                <h2 className='text-cyan-400 font-bold '> category : {category} </h2>
                                <h2 className='font-black text-purple-950 '> brand : {brand} </h2>
                                <h2 className='font-bold text-red-750'> availabilityStatus : {availabilityStatus} </h2>
                                <h2 className='text-amber-300 font-bold'> description : {description} </h2>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default FetchPeoducts;
