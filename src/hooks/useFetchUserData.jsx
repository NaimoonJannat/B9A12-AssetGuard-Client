import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchUserData = (email) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (email) {
            setLoading(true);
            fetch(`https://b9a12-assetguard-server.vercel.app/users`)
                .then(response => response.json())
                .then(data => {
                    const filteredData = data.filter(user => user.email === email);
                    if (filteredData.length > 0) {
                        setUserData(filteredData[0]);
                    } else {
                        setError("User data not found.");
                        toast.error("User data not found.");
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                    setError(error);
                    toast.error("Error fetching user data.");
                    setLoading(false);
                });
        }
    }, [email]);

    return { userData, loading, error };
};

export default useFetchUserData;
