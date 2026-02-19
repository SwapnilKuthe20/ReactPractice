import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartRed } from '../features/AddCart/addToCart';

const Cart = () => {

    const item = useSelector(item => item.cart.item);
    console.log(item, "...item");

    const dispatch = useDispatch()

    return (
        <div className='flex justify-center '>
            <div className='w-1/2 p-8 rounded-2xl mt-7 bg-amber-300 text-black'>
                <h1 className='text-2xl text-black font-bold text-center'> Add To Cart </h1>

                <div className='p-7 bg-cyan-600 rounded-2xl m-3'>
                    <h2> Mobile </h2>
                    <p> Lorem ipsum dolor sit amet.</p>
                    <button
                        onClick={() => dispatch(addToCartRed("mobile"))}
                        className='py-2 px-7 m-2 rounded-2xl bg-amber-800 text-amber-50 cursor-pointer'
                    >
                        Add To Cart
                    </button>
                </div>

                <div className='p-7 bg-cyan-600 rounded-2xl m-3'>
                    <h2> Laptop </h2>
                    <p> Lorem ipsum dolor sit amet.</p>
                    <button
                        onClick={() => dispatch(addToCartRed("laptop"))}
                        className='py-2 px-7 m-2 rounded-2xl bg-amber-800 text-amber-50 cursor-pointer'
                    >
                        Add To Cart
                    </button>
                </div>

                <div className='p-7 bg-cyan-600 rounded-2xl m-3'>
                    <h2> TV </h2>
                    <p> Lorem ipsum dolor sit amet.</p>
                    <button
                        onClick={() => dispatch(addToCartRed("TV"))}
                        className='py-2 px-7 m-2 rounded-2xl bg-amber-800 text-amber-50 cursor-pointer'
                    >
                        Add To Cart
                    </button>
                </div>

                <div className='p-7 bg-cyan-600 rounded-2xl m-3'>
                    <h2> Headphone </h2>
                    <p> Lorem ipsum dolor sit amet.</p>
                    <button
                        onClick={() => dispatch(addToCartRed('headphone'))}
                        className='py-2 px-7 m-2 rounded-2xl bg-amber-800 text-amber-50 cursor-pointer'
                    >
                        Add To Cart
                    </button>
                </div>

                <h1 className='text-2xl font-bold '> Cart List </h1>
                {
                    item.map(({ id, item, qty }) => (
                        <div key={id} className='p-4 rounded-2xl bg-gray-700 text-amber-50 m-2'>
                            <h2>item:  {item}</h2>
                            <p> Quantity : {qty}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    );
}

export default Cart;
