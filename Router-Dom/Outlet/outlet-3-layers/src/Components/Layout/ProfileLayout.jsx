import Profile from '../Pages/Profile/Profile';
import { Outlet } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div className='flex w-full h-screen'>
            <Profile />
            <div className='flex-1 overflow-auto'>
                <Outlet />
            </div>
        </div>
    );
}

export default ProfileLayout;
