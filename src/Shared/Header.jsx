import { useContext, useEffect, useState } from "react";
import NavGuest from "../Guest/NavGuest";
import NavHr from "../Hr/NavHr";
import NavNormal from "../Normal/NavNormal";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
    const { user } = useContext(AuthContext);
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        if (user && user?.email) {
            fetch('https://b9a12-assetguard-server.vercel.app/users')
                .then(res => res.json())
                .then(data => {
                    const userData = data.find(item => item?.email === user?.email);
                    if (userData) {
                        setUserRole(userData?.role);  // Assuming the user data includes a 'role' property
                    } else {
                        setUserRole("guest");
                    }
                })
                .catch(() => {
                    setUserRole("guest");  // Handle fetch error by setting role to 'guest'
                });
        } else {
            setUserRole("guest");
        }
    }, [user]);

    if (userRole === "hr") {
        return <NavHr />;
    } else if (userRole === "employee") {
        return <NavNormal />;
    } else {
        return <NavGuest />;
    }
};

export default Header;
