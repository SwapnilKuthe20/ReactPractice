import { NavLink } from 'react-router-dom';
import { SidebarRoutes } from './Routes/SidebarRoutes';

const Sidebar = () => {

    return (
        <nav className='w-40 h-screen bg-amber-950 text-white p-2.5'>
            <ul className='mt-4 list-none'>
                {
                    SidebarRoutes.map(({ id, path, label }) => (
                        <li key={id} className='p-2.5 '>
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? 'text-green-400 font-bold underline' : 'text-white'}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Sidebar;
