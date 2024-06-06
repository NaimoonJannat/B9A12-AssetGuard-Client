import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import HomeNormal from "../Normal/HomeNormal/HomeNormal";
import HomeHr from "../Hr/HomeHr/HomeHr"
import HomeGuest from "../Guest/Home/HomeGuest"


const Home = () => {
    const { user } = useContext(AuthContext);
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        if (user && user?.email) {
            fetch('http://localhost:3000/users')
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
        return <HomeHr></HomeHr>
    } else if (userRole === "employee") {
        return <HomeNormal></HomeNormal>;
    } else {
        return <HomeGuest></HomeGuest>;
    }
};

export default Home;
