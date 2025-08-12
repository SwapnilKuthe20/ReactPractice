import { NavLink } from 'react-router-dom';

const Orders = () => {
    const orderLayoutItems = [
        { id: 1, to: "pending", label: "Pending" },
        { id: 1, to: "completed", label: "Complete" }
    ]

    return (
        <div className='w-2xs h-screen bg-blue-950 text-blue-100'>
            <ul>
                {
                    orderLayoutItems.map(({ id, to, label }) => (
                        <li key={id}>
                            <NavLink to={to}>{label}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Orders;
