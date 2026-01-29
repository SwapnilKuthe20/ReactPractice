import { useEffect, useState } from 'react'

function FetchUsers() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const fetchUsers = async () => {
            setLoading(true)

            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!res.ok) {
                    throw new Error(`HTTP Error! Status: ${res.status}`)
                }

                const data = await res.json()

                setUsers(data)
                setLoading(false)

            } catch (error) {
                console.log("Error while fetching Users....", error.message);
                setLoading(false)
                setError("Error while fetching Users, Users does not fetch !!")
            }
        }

        fetchUsers()

    }, [])

    if (loading) return <p style={{ fontWeight: "bolder", color: "yellow" }}>....Loading</p>
    if (error) return <p style={{ fontWeight: "bolder", color: "red" }}>{error}</p>

    return (
        <>
            <div style={{ width: "90%", backgroundColor: "greenyellow", margin: "auto", color: "red" }}>

                <h1 style={{ textAlign: "center" }}> User Fetch </h1>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>

                    {
                        users.map(({ id, name, address, email, phone }) => (

                            <div key={id} style={{
                                width: "400px",
                                height: "200px",
                                backgroundColor: "purple",
                                color: "white",
                                margin: "15px",
                                padding: "20px",
                                borderRadius: "15px",
                                boxShadow: "7px 8px 15px red"
                            }}>
                                <p>Name : {name} </p>
                                <p>Address : {address.city} </p>
                                <p>Email : {email} </p>
                                <p>Phone : {phone} </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default FetchUsers
