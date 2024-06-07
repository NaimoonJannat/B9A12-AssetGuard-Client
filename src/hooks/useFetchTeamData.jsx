import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchTeamData = (email) => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (email) {
            setLoading(true);
            fetch(`https://b9a12-assetguard-server.vercel.app/teams`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const filteredData = data.filter(user => user?.username === email); // Adjusted to check the correct field
                    if (filteredData.length > 0) {
                        setUserData(filteredData[0]);
                    } else {
                        setError("User data not found.");
                        toast.error("User data not found.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching user data:", error);
                    setError(error.message);
                    toast.error("Error fetching user data.");
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [email]);

    return { userData, loading, error };
};

export default useFetchTeamData;
