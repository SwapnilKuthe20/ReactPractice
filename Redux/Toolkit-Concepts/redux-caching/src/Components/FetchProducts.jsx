import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/features/productSlice';

const FetchProducts = () => {

    const { loading, data, error } = useSelector(state => state.products)
    // console.log(state, "...state");

    const dispatch = useDispatch()

    useEffect(() => {

        const promise = dispatch(fetchProducts())

        promise
            .unwrap()
            .then((data) => {
                console.log(data, "...data");
            })
            .catch((err) => {
                console.log(err, "...Erorr");
            })


        return () => {
            // promise.abort()
        }

    }, [dispatch])

    return (
        <div className='flex justify-center'>
            <div className='w-5/6 bg-green-700 text-amber-100 mt-12 p-8'>
                <h1 className='text-2xl font-bold text-center my-12'> Fetch Products </h1>
                <button
                    onClick={() => dispatch(fetchProducts({ force: true }))}
                    className='px-7 py-1.5 bg-amber-950 rounded-2xl block m-auto mb-3 cursor-pointer'
                >
                    Refresh
                </button>

                {loading === "pending" && (
                    <p className='text-2xl text-center my-8'> ....loading </p>
                )}

                {error && (
                    <p className='text-2xl text-red-600 my-8'>{error}</p>
                )}

                <div className='flex justify-center flex-wrap gap-2.5'>
                    {data.map(({ id, price, image, description, category }) => (
                        <div key={id} className='p-8 rounded-2xl w-80 bg-cyan-200 text-black'>
                            <div className='w-24' >
                                <img src={image} alt="img" className='w-full' />
                            </div>
                            <h2 className='text-purple-900 font-bold'> Category : {category} </h2>
                            <h2 className='text-red-900 font-bold'> price : {price} </h2>
                            <h3 className='text-cyan-900 font-bold'> Description : {description} </h3>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}

export default FetchProducts;
