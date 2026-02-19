import React, { useCallback, useMemo, useState } from 'react';
import UserTable from './UserTable';

const Parent = () => {

    const [theme, setTheme] = useState("dark")
    const [search, setSearch] = useState("")
    // console.log(search, "...search");

    const users = useMemo(() => {
        console.log("...........users call");

        return Array.from({ length: 40 }, (_, ind) => ({
            id: ind,
            name: `Swapnil ${ind}`,
            age: ind * 3
        }))
    }, [])


    const handleSearch = useCallback((e) => {

        // console.log(e, "react synthetic event ");
        // console.log(e.nativeEvent, "Browsers native event ");

        console.log("handleSearch call.......");

        const value = e.target.value;       // coz of event pooling logic
        return setSearch(value)
    }, [])

    const filteredUsers = useMemo(() => {
        console.log("....filter user call...")

        return users.filter(({ name }) => (
            name.toLowerCase().includes(search.toLowerCase())
        ))
    }, [search, users])


    // console.log(filteredUsers, "..filtered users");
    // console.log(users, "..users list");

    console.log("Parent Render.........");


    return (
        <div className='flex justify-center '>
            <div className={` p-10 w-1/2  ${theme === "dark" ? 'dark:bg-black dark:text-white' : 'bg-emerald-600 text-black'}`}>

                <h1> UseCallback + React.memo Mini Project </h1>

                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className='py-2 px-6 bg-cyan-700 rounded-2xl my-5 cursor-pointer'
                >
                    {theme === "dark" ? "light" : "dark"}
                </button>

                <UserTable filteredUsers={filteredUsers} search={search} onChange={handleSearch} />



            </div >
        </div >
    );
}

export default Parent;
