import About from '../SidebarPages/About';
import Contact from '../SidebarPages/Contact';
import Dashboard from '../SidebarPages/Dashboard';
import Home from '../SidebarPages/Home';
import Profile from '../SidebarPages/Profile';

export const SidebarRoutes = [
    { id: 1, path: "home", element: <Home />, label: "Home" },
    { id: 2, path: "about", element: <About />, label: "About" },
    { id: 3, path: "contact", element: <Contact />, label: "Contact" },
    { id: 4, path: "dashboard", element: <Dashboard />, label: "Dashboard" },
    { id: 5, path: "profile", element: <Profile />, label: "Profile" },
]
