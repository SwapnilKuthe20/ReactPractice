import React, { useRef, useState } from 'react';
let timer;

const Bounce = () => {
    const [search, setSearch] = useState("")
    // console.log(search, "..search");

    const [products, setProducts] = useState([])

    let timersId = useRef();

    const handleSearchApi = (e) => {
        const searchInp = e.target.value
        setSearch(searchInp)

        console.log(timersId.current, "timersId bef");

        clearTimeout(timersId.current)

        timersId.current = setTimeout(async () => {
            try {
                const apiRes = await fetch(`https://dummyjson.com/products/search?q=${searchInp}`)
                const res = await apiRes.json()
                console.log(res, "...res");

                setProducts(res.products)

            } catch (error) {
                console.log(error, "...error occured");
            }
        }, 1000);

        console.log(timersId.current, "timersId aft");
    }


    // const handleSearchApi = (e) => {
    //     const searchInp = e.target.value
    //     setSearch(searchInp)

    //     console.log(timer, "...timer");

    //     clearTimeout(timer)

    //     timer = setTimeout(async () => {
    //         try {
    //             const apiRes = await fetch(`https://dummyjson.com/products/search?q=${searchInp}`)
    //             const res = await apiRes.json()
    //             console.log(res, "...res");

    //             setProducts(res.products)

    //         } catch (error) {
    //             console.log(error, "...error occured");
    //         }
    //     }, 1000)
    // }


    return (
        <div className='w-5/6 bg-purple-950 m-auto min-h-screen'>

            <form action="" className='p-12'>
                <h2 className='font-black text-2xl text-center py-12'> Bounce Practice </h2>
                <label htmlFor="search"> Search </label>
                <input
                    type="text"
                    value={search}
                    onChange={handleSearchApi}
                    className='border-2 rounded-2xl px-2 py-3 outline-none block'
                />

            </form>

            <ul className=''>
                {
                    products.map(({ id, title, rating, price, category, description, images }) => (
                        <li key={id} className='bg-green-900 p-5 rounded-2xl m-3'>
                            <h1 className='text-center'> Title : {title} </h1>
                            <h3> Category : {category} </h3>
                            <h3> Price : {price} </h3>
                            <h3> Rating : {rating} </h3>
                            <h3> Description : {description} </h3>

                        </li>
                    ))
                }
            </ul>


        </div>
    );
}

export default Bounce;
