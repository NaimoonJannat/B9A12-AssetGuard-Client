import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useFetchHrData = (email) => {
    const [hrData, setHrData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (email) {
            setLoading(true);
            fetch(`http://localhost:3000/hrs`)
                .then(response => response.json())
                .then(data => {
                    const filteredData = data.filter(user => user.email === email);
                    if (filteredData.length > 0) {
                        setHrData(filteredData[0]);
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

    return { hrData, loading, error };
};

export default useFetchHrData;
