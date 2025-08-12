import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const navlinkItems = [
        { id: 1, to: "", lable: "Home" },
        { id: 2, to: "dashboard", lable: "Dashboard" },
        { id: 3, to: "orders", lable: "Order" },
        { id: 4, to: "inventory", lable: "Inventory" },
    ]
    return (
        <nav className='bg-amber-950 text-amber-100 w-3xs h-screen'>
            <ul>
                {
                    navlinkItems.map(({ id, to, lable }) => (
                        <li key={id}>
                            <NavLink to={to}>{lable} </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Sidebar;
