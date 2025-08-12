import { Outlet } from 'react-router-dom';
import Sidebar from '../Pages/Sidebar';

const MainLayout = () => {
    return (
        <div className='flex '>
            <Sidebar />
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
}

export default MainLayout;
