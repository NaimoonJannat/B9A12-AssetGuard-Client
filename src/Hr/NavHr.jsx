import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useFetchUserData from "../hooks/useFetchUserData";
import { toast } from "react-toastify";

const NavHr = () => {
    const { user, logOut } = useContext(AuthContext);
    const { userData, loading, error } = useFetchUserData(user?.email);
    console.log(loading, error);

    const handleSignOut = () => {
        logOut()
            .then((result) => {
                console.log(result);
                toast.success("Logged Out Successfully!");
            })
            .catch((error) => {
                console.error("Logout Error:", error);
                toast.error("Error logging out. Please try again later.");
            });
    };

    const navOptions = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/asset-list"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Asset List
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-asset"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Add Asset
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-requests"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    All Requests
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/employee-list"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Employee List
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-employee"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Add Employee
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 ${
                            isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
                        }`
                    }
                >
                    Profile
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-[#240750] fixed z-10 opacity-80">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#240570] rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center">
                    {userData?.logo && <img className="w-12" src={userData.logo} alt="logo" />}
                    <a className="btn btn-ghost text-[#57A6A1] text-xl">{userData ? userData.company : 'Asset Guard'}</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal menu px-1">{navOptions}</ul>
            </div>
            {user ? (
                <div className="navbar-end">
                    <div className="flex justify-center items-center">
                        <p className="text-[#57A6A1]">{user.displayName}</p>
                        <div className="avatar btn btn-circle border-1 border-[#57A6A1] btn-ghost">
                            <div className="w-14 rounded-full">
                                <img src={user.photoURL} alt="user avatar" />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSignOut} className="btn btn-xs text-white bg-[#57A6A1]">
                        Log Out
                    </button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default NavHr;
