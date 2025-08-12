import { NavLink } from "react-router-dom";

const Profile = () => {
    const ProfileItems = [
        { id: 1, to: 'profilea', label: "Profile a" },
        { id: 2, to: 'profileb', label: "Profile b" },
        { id: 3, to: 'profilec', label: "Profile c" },
        { id: 4, to: 'profiled', label: "Profile d" },
        { id: 5, to: 'profilee', label: "Profile e" },
    ]

    return (
        <nav className='w-2xs h-screen bg-amber-950 text-shadow-cyan-200 p-5'>
            <ul className='list-none'>
                {
                    ProfileItems.map(({ id, to, label }) => (
                        <li key={id} className='py-3'>
                            <NavLink
                                to={to}
                                // end={to === ''} // <-- sirf Profile A ke liye exact match
                                className={({ isActive }) => `block px-3 py-2 rounded-md transition-colors duration-200  ${isActive ? 'text-emerald-400' : 'text-white hover:text-amber-300}'}`} >

                                {label}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Profile;
