import React, { useState } from 'react';
import QuantitySelector from './QuantitySelector';
import Price from './Price';

const Cart = () => {
    const [quantity, setQuantity] = useState(0)

    const handleQuantity = () => {
        setQuantity(prev => prev + 1)
    }

    console.log(quantity, "..quantity");

    return (
        <div>
            <QuantitySelector handleQuantity={handleQuantity} quantity={quantity} />
            <Price quantity={quantity} />
        </div>
    );
}

export default Cart;
