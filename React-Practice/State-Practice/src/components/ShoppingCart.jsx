import React, { useState } from 'react';

const ShoppingCart = () => {
    const [item, setItem] = useState({
        productName: "Laptop",
        productPrice: 50000,
        productQty: 0
    })

    const handleIncQty = () => {
        setItem(prev => ({
            ...prev,
            productQty: prev.productQty + 1
        }))
    }

    const handleDecQty = () => {
        setItem(prev => ({
            ...prev,
            productQty: Math.max(1, prev.productQty - 1)
        }))
    }

    //  Bad Practice ::: 

    // const handleDecQty = () => {
    //     setItem(prev => ({
    //         ...prev,
    //         productQty: prev.productQty == 1 ? prev.productQty : prev.productQty - 1
    //     }))
    // }


    return (
        <div style={{ width: '80%' }}>
            <h1 style={{ color: "greenyellow" }}> Shopping Cart </h1>

            <p>product Name : {item.productName} </p>
            <p>product price : {item.productPrice} </p>
            <p>product Quantity : {item.productQty} </p>

            <p>Total Price :  ₹ {item.productQty * item.productPrice} </p>

            <button
                onClick={handleIncQty}
                style={{ margin: "10px", backgroundColor: "purple" }}
            > Increase Qty
            </button>

            <button
                onClick={handleDecQty}
                style={{ margin: "10px", backgroundColor: "red" }}
            > Decrease Qty
            </button>

        </div>
    );
}

export default ShoppingCart;
