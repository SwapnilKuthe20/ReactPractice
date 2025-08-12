import Sidebar from '../Pages/Sidebar';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
    return (
        <div className='flex w-full h-screen'>
            <Sidebar />
            <div className='flex-1 overflow-auto'>
                <Outlet />
            </div>
        </div>
    );
}

export default SidebarLayout;
