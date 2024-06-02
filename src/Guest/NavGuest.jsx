import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

const NavGuest = () => {
    const navOptions = <>
        <li>
            <NavLink  
                to="/" 
                className={({ isActive }) => `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/join-employee" 
                className={({ isActive }) => `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
            >
                Join as Employee
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/join-hr" 
                className={({ isActive }) => `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
            >
                Join as HR
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/login" 
                className={({ isActive }) => `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
            >
                Login
            </NavLink>
        </li>
    </>;

    return (
        <div className="navbar bg-[#240750] fixed z-10 opacity-80">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#240570] rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <img className="w-12" src={logo} alt="logo" />
                    <a className="btn btn-ghost text-[#57A6A1] text-xl">Asset Guard</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal menu px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavGuest;
