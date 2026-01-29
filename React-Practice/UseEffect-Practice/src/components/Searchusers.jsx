import React, { useEffect, useState } from 'react';

const Searchusers = () => {
    const [searchUser, setSearchUser] = useState([])
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    console.log(query, "...outside effect");

    useEffect(() => {
        console.log(query, "...inside effect");

        const searchUsers = async () => {
            try {
                if (!query) {
                    setSearchUser([])
                    setLoading(true)
                    setError(null)
                    return
                }

                const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)

                if (!res.ok) {
                    throw new Error("HTTP Error, Serach user api error")
                }

                const data = await res.json()
                setSearchUser(data)
                setError(null)

            } catch (error) {
                console.log("Error while searching users", error.message);
                setError('Error , please try again')
            } finally {
                setLoading(false)
            }
        }

        searchUsers()

    }, [query])

    if (error) return <p style={{ fontWeight: "bolder", fontSize: "3rem", textAlign: "center", color: "red" }}> {error} </p>

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "90%", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "80%", margin: "auto" }}>
                <h1 style={{ textAlign: "center" }}> Search Users</h1>

                <label htmlFor="user" style={{ fontWeight: "bolder", fontSize: "30px" }}> Serch User </label>
                <input type="text" id='user' placeholder='Serch here....' value={query} onChange={e => setQuery(e.target.value)} style={{ width: "500px", padding: "10px" }} />

                {
                    !loading && !query && searchUser.length === 0 &&
                    <p style={{ color: "red", fontSize: "30px", textAlign: "center" }}>User not found </p>
                }

                {
                    searchUser.map(({ id, name, email, address, phone }) => {
                        return (
                            <div key={id} style={{
                                width: "400px",
                                height: "200px",
                                backgroundColor: "purple",
                                color: "white",
                                margin: "15px",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "7px 8px 15px red"
                            }}
                            >

                                <p>Name : {name} </p>
                                <p>Email : {email} </p>
                                <p>City : {address.city} </p>
                                <p>Phone : {phone} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Searchusers;
