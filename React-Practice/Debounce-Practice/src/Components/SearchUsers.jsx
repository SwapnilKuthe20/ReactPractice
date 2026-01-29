import React, { useEffect, useState } from 'react';
import UsersList from './UsersList';

const SearchUsers = () => {

    const [search, setSearch] = useState("")
    const [userData, setUserData] = useState([])

    useEffect(() => {

        const Controller = new AbortController();

        const seachUserFun = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${search}`, {
                    signal: Controller.signal
                })

                const userData = await res.json();
                console.log(userData, "...userData");

                setUserData(userData)

            } catch (error) {
                console.log("Error While searching users", error.message);

            }
        }

        const id = setTimeout(seachUserFun, 2000)


        return () => {
            clearTimeout(id)
            Controller.abort()
        }

    }, [search])


    return (
        <div>
            <h1> Search Users : </h1>

            <input
                type="text"
                placeholder='Enter user name here...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}

            />

            <UsersList userData={userData} />

        </div>
    );
}

export default SearchUsers;

