import React, { useEffect, useState } from 'react';

// 🔥 Challenge 1: Duplicate item add hone se rokna
// 📋 Task:
// Agar item pehle se cart me hai, toh setCart mat call karo

// Nahi hai, tabhi add karo

const AddItem = () => {

    const [cart, setCart] = useState(["Apple", "mango"])

    useEffect(() => {
        const getCartItems = localStorage.getItem("cartItems")
        // console.log(typeof(getCartItems), "...getCartItems");
        // console.log(getCartItems);

        if (getCartItems) {
            // console.log(typeof(getCartItems));
            // console.log(Array.isArray(JSON.parse(getCartItems)));

            setCart(JSON.parse(getCartItems))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }, [cart])

    const handleItem = (item) => {
        if (cart.includes(item)) {
            alert(`${item} already include in Cart !!`)
        } else {
            setCart(prev => ([...prev, item]))
        }
    }

    const handleDelete = (itemToRemove) => {
        setCart(prevState => {
            // return prevState.filter((item, index) => index !== itemToRemove)         // delete by index 
            return prevState.filter((item) => item !== itemToRemove)            // delete by name
        })
    }

    return (
        <>
            <h3>Add to cart</h3>
            <h5>Cart Items :</h5>
            <ul>
                {
                    cart?.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                {/* <button onClick={() => handleDelete(index)}> X </button> */}
                                <button onClick={() => handleDelete(item)}> X </button>
                            </li>
                        )
                    })
                }
            </ul>
            <button onClick={() => handleItem("cherry")}> Add cherry </button>
            <button onClick={() => handleItem("banana")}> Add Banana </button>
        </>
    );
}

export default AddItem;
