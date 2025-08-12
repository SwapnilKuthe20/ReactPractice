import Orders from '../Pages/Orders/Orders';
import { Outlet } from 'react-router-dom';

const OrdersLayout = () => {
    return (
        <div className='flex'>
            <Orders />
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default OrdersLayout;

