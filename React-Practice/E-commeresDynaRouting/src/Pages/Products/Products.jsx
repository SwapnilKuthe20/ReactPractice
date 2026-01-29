import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = () => {

    const [products, setProducts] = useState([])
    console.log(products, "...products");


    useEffect(() => {

        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setProducts(res.data)
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}> Products </h1>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                {
                    products.map(({ id, title, price, description, category, image }) => (
                        <div key={id} style={{ width: "300px", backgroundColor: "purple", borderRadius: "10px" }}>
                            <div style={{ width: "150px" }}>
                                <img src={image} alt="product-Img" width={100} height={100} />
                            </div>
                            <h3> title : {title} </h3>
                            <h3> Price : {price} </h3>
                            <p> Category : {category} </p>
                            <p> {description} </p>
                        </div>
                    ))
                }

            </div>
        </div>

    );
}

export default Products;
