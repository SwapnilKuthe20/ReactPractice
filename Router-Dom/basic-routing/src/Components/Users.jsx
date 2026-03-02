import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState([])
    // console.log(users, "...users");

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/users")
                const usersData = await resp.json()
                setUsers(usersData)

            } catch (error) {
                console.log(error, "...error occured");
            }
        }

        fetchUsers()

    }, [])

    if (!users) return (<p className="text-2xl text-white font-bold text-center"> ....Loading </p>)

    return (
        <div className="bg-black text-white w-full">
            <h1 className=" text-2xl text-center font-black my-12"> User Page </h1>

            <div className="flex justify-center flex-wrap gap-3 p-3">
                {users.map(({ id, name, username, phone, address: { city, street } }) => (
                    <div
                        key={id}
                        className="w-60 bg-green-800 text-green-300 p-3 rounded-2xl cursor-pointer"
                    >
                        <NavLink to={`/users/${id}`}>
                            <h1> Name : {name} </h1>
                            <h1> Username : {username} </h1>
                            <h1> Phone : {phone} </h1>
                            <h1> City : {city} </h1>
                            <h1> Street : {street} </h1>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
