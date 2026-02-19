import React from 'react';

const UserTable = React.memo(({ filteredUsers, search, onChange }) => {

    console.log("UserTable Render........");


    return (
        <div className=''>

            <label htmlFor="search"> Search </label>
            <input
                type="text"
                className='p-2 outline-none border-2 border-amber-400 rounded-2xl m-5'
                onChange={onChange}
                value={search}
            />

            <h1 className='text-amber-300 text-center'> Users Table </h1>


            <table className='table-auto '>
                <thead>
                    <tr>
                        <td> Name </td>
                        <td> Age </td>
                    </tr>
                </thead>

                <tbody>
                    {
                        filteredUsers.map(({ id, name, age }) => (
                            <tr key={id}>
                                <td> {name} </td>
                                <td> {age} </td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>

        </div>
    );
})

export default UserTable;
