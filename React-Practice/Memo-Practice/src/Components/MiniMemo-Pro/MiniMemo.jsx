import React, { useMemo, useState } from 'react';

const MiniMemo = () => {

    const [search, setSearch] = useState("")
    const [theme, setTheme] = useState("dark")

    // console.log(theme, "...theme");
    // console.log(search, "...search");


    const users = useMemo(() => {
        return Array.from({ length: 100 }, (_, i) => ({
            id: i,
            name: `User ${i}`
        }))
    }, [])

    // console.log(users, "...users");

    const filteredUsers = useMemo(() => {
        console.log("............filter call............");

        return users.filter(user => (
            user.name.toLowerCase().includes(search.toLowerCase())
        ))
    }, [users, search])

    // console.log(filteredUsers, "...filter users");


    return (
        <div className={`${theme === "dark" ? 'dark:bg-green-950 text-amber-200' : 'dark:bg-white text-black'} flex justify-center`}>
            <div className='p-9 w-1/2'>

                <h1 className='text-center p-5'> Mini Memo </h1>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")} d
                    className='bg-cyan-700 rounded-2xl py-2 px-5'
                >
                    Toggle theme
                </button>

                <div className='mt-6'>
                    <label htmlFor="search"> Search User </label>
                    <input
                        id='search'
                        type="text"
                        placeholder='search user...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='p-2 outline-none border-2 border-cyan-500 rounded-2xl my-5'
                    />
                </div>

                <ul >
                    {
                        filteredUsers.map((user) => (
                            <li key={user.id}> {user.name} </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    );
}

export default MiniMemo;
