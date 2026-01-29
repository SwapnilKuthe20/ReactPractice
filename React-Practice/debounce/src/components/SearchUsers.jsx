import React, { useEffect, useState } from 'react';

const SearchUsers = () => {
    const [users, setUsers] = useState([])
    const [query, setQuery] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    console.log(users, "...user");


    useEffect(() => {

        if (!query.trim()) {
            setUsers([])
            return
        }

        const controller = new AbortController()

        async function searchUsers() {
            try {
                setLoading(true)

                const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`,
                    { signal: controller.signal })

                if (!res.ok) {
                    throw new Error("HTTP Error, Api failed SOmething went wrong")
                }

                const data = await res.json();
                setUsers(data)
                setError(null)

            } catch (error) {
                console.log("Error Occured...", error.name);

                if (error.name !== "AbortError") {
                    console.log("Error Occured...", error.message);
                    setError(error.message)
                }

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
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "500px" }}>

                <h1 style={{ color: "purple", textAlign: "center", fontSize: "30px" }}> Debouncing : Search Users </h1>

                <div style={{ width: "100%", margin: "0 auto" }}>
                    <label htmlFor="user" style={{ fontSize: "24px" }}> Search User : </label> <br />
                    <input
                        type="text"
                        id='user'
                        placeholder='Enter User name....'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ padding: "10px", margin: "10px", width: "300px" }}
                    />

                </div>

                {query && !loading && users.length === 0 && (
                    <p style={{ color: "red", fontWeight: "bolder", textAlign: "center", fontSize: "30px" }}>
                        User Not FOund.....
                    </p>
                )}

                {
                    users.map(({ id, name, email, address, phone }) => (

                        <div
                            key={id}
                            style={{ width: "300px", backgroundColor: "purple", color: "white", borderRadius: "10px", padding: "10px", margin: "10px" }}
                        >
                            <p>Name :{name}</p>
                            <p>Email :{email}</p>
                            <p>City :{address.city}</p>
                            <p>Phone :{phone}</p>
                        </div>
                    ))
                }

            </div>
        </div >
    );
}

export default SearchUsers;
