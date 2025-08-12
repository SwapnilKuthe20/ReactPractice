import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const NavlinkItems = [
        { id: 1, to: '/', label: "Home" },
        { id: 2, to: '/about', label: "About" },
        { id: 3, to: '/contact', label: "Contact" },
        { id: 4, to: '/profile', label: "Profile" },
    ]

    return (
        <nav className='w-3xs h-screen bg-cyan-950 text-shadow-cyan-200 p-5'>
            <ul className='list-none'>
                {
                    NavlinkItems.map(({ id, to, label }) => (
                        <li key={id} className='py-3 '>
                            <NavLink to={to} end={to === '/'}
                                className={({ isActive }) => `block px-3 py-2 rounded-md transition-colors duration-200  ${isActive ? 'text-lime-300' : 'text-white hover:text-amber-300}'}`} >
                                {label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav >
    );
}

export default Sidebar;
