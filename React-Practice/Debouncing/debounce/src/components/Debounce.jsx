import React, { useEffect, useState } from 'react';

const Debounce = () => {
    const [search, setSearch] = useState("")

    useEffect(() => {

        const timerId = setTimeout(() => {
            console.log(search);
        }, 1000)

        console.log(timerId, "...timerId");


        // return () => clearTimeout(timerId)

    }, [search])


    return (
        <div className='w-3/4 bg-green-600 m-auto min-h-screen '>
            <form className='p-12'>
                <h1 className='text-2xl text-center font-bold py-12' > Debounce Practice </h1>

                <label htmlFor="search" > Search </label>
                <input
                    type="text"
                    id='search'
                    placeholder='Seaerch here...'
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className='border-2 rounded-2xl outline-none px-2 py-3 block my-3'
                />

            </form>
        </div>
    );
}

export default Debounce;
