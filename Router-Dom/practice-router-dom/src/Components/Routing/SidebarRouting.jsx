import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

const SidebarRouting = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default SidebarRouting;
