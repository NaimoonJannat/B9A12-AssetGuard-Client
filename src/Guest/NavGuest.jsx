import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"
const NavGuest = () => {
    const navOptions = <>
        <li>
            <NavLink  
                to="/" 
                className="text-lg text-white"
                activeClassName="border-b-2 border-[#D1A054]"
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/join-employee" 
                className="text-lg text-white"
                activeClassName="border-b-2 border-[#D1A054] text-[#D1A054]"
            >
                Join as Employee
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/join-hr" 
                className="text-lg text-white"
                activeClassName="border-b-2 border-[#D1A054] text-[#D1A054]"
            >
                Join as HR
            </NavLink>
        </li>
        <li>
            <NavLink 
                to="/login" 
                className="text-lg text-white"
                activeClassName="border-b-2 border-[#D1A054] text-[#D1A054]"
            >
                Login
            </NavLink>
        </li>
    </>;

    return (
        <div className="navbar bg-[#240750] fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className="w-12" src={logo} alt="" />
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
