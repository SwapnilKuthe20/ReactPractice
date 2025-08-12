import { Outlet } from 'react-router-dom';
import Profile from '../SidebarPages/Profile';

const ProfileRouting = () => {
    return (
        <div className='flex justify-center '>
            <Profile />
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
}

export default ProfileRouting;
