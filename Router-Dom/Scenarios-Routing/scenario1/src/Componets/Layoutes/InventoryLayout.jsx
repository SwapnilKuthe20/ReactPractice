import Inventory from '../Pages/Inventory/Inventory';
import { Outlet } from 'react-router-dom';

const InventoryLayout = () => {
    return (
        <div className='flex'>
            <Inventory />
            <div className=''>
                <Outlet />
            </div>
        </div>
    );
}

export default InventoryLayout;
