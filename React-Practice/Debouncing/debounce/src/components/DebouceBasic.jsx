import React, { useEffect, useState } from 'react';

const DebouceBasic = () => {
    const [search, setSearch] = useState('')

    useEffect(() => {
        let timer;

        const debFun = () => {
            timer = setTimeout(() => {
                console.log("Api call", search);
            }, 2000);

        }

        debFun()
        return () => clearTimeout(timer)

    }, [search])

    return (
        <div style={{ width: "500px", backgroundColor: "purple", height: "400px", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <h1> Debounce Basic  : </h1>

                <input
                    type="text"
                    placeholder='Enter user name...'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ padding: "10px", width: "300px" }}
                />
            </div>
        </div>
    );
}

export default DebouceBasic;
