import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1> Not Found </h1>
            <NavLink to={'/'}> GO to Home </NavLink>
        </div>
    );
}

export default NotFound;
