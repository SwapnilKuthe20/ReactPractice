import React, { useEffect, useState } from 'react';

const DebouncePractice = () => {

    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasSearch, setHasSearch] = useState(false)

    useEffect(() => {

        if (!query.trim()) {
            setUsers([])
            setHasSearch(false)
            return
        }

        const controller = new AbortController()
        console.log(controller, "...controller ");

        const searchUsers = async () => {
            try {
                setLoading(true)
                setHasSearch(true)

                const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`,
                    { signal: controller.signal }
                )

                if (!res.ok) {
                    throw new Error("HTTP Error Occured... API Faild")
                }

                const userData = await res.json()
                setUsers(userData)
                setError(null)

            } catch (error) {

                console.log("Error ocuured in catch...", error.message);
                setError(error.message)

            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(searchUsers, 2000)

        return () => {
            clearTimeout(timer)
            controller.abort()
        }

    }, [query])


    if (loading)
        return <p style={{ fontSize: "30px", fontWeight: "bolder", color: "yellow", textAlign: "center" }}> Loading...</p>

    if (error)
        return <p style={{ fontSize: "30px", fontWeight: "bolder", color: "yellow", textAlign: "center" }}> {error} </p>


    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ marginTop: "20px" }}>

                <h1 style={{ margin: "20px" }}> Debounce Pratice </h1>

                <label htmlFor="user" style={{ color: "red", fontSize: "24px", fontWeight: "bolder" }}> Search Users : </label>
                <input
                    type="text"
                    placeholder='search user name...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    style={{ padding: "8px", display: "block", marginTop: "10px", width: "300px" }}
                />

                {
                    hasSearch && !loading && users.length === 0 &&
                    (<p style={{ fontSize: "24px", color: "red", fontWeight: "bolder" }}> User not found... !! </p>)
                }

                {
                    users.map(({ id, name, email, address, phone }) => (
                        <div
                            key={id}
                            style={{ width: "300px", padding: "10px", backgroundColor: "darkcyan", color: "white", margin: "10px", borderRadius: "15px" }}
                        >
                            <p> Name : {name} </p>
                            <p> Email : {email} </p>
                            <p> City :{address.city} </p>
                            <p>Phone : {phone} </p>
                        </div>
                    ))
                }

            </div>


        </div>
    );
}

export default DebouncePractice;
