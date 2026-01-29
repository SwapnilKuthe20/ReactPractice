import React, { useMemo, useState } from 'react';
import UserList from './UserList';

const SearchUsers = () => {

    console.log("Parent Render ");

    const [query, setQuery] = useState('')
    const [count, setCount] = useState(0)

    const users = useMemo(() => {
        return ["swap", "neel", "Giri", "Akki", "Sandi"]
    }, [])


    const filteredUsers = useMemo(() => {

        console.log("Filtering users...");

        return users.filter(user =>
            user.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, users])



    return (
        <div>
            <h2> Search User </h2>

            <input
                type="text"
                placeholder='Search users here....'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button onClick={() => setCount(count + 1)}> {count} </button>

            <UserList data={filteredUsers} />
        </div>
    );
}

export default SearchUsers;
