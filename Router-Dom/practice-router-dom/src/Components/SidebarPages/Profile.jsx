import { NavLink } from "react-router-dom";
import { ProfileRoutes } from "../Routes/ProfileRoutes";

const Profile = () => {
    return (
        <div className="w-40 h-screen bg-fuchsia-950 text-amber-50 p-2.5">
            <ul className='mt-4'>
                {
                    ProfileRoutes.map(({ id, path, label }) => (
                        <li key={id}>
                            <NavLink
                                to={path}
                                className={({ isActive }) => isActive ? 'text-cyan-400 font-bold underline' : ""}
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Profile;
