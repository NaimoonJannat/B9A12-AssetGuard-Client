import { useContext, useEffect, useState } from "react";
import HomeBannerNorm from "./HomeBannerNorm";
import HomePendingNorm from "./HomePendingNorm";
import HomeRequestsByDate from "./HomeRequestsByDate";
import Notice from "./Notice";
import { AuthContext } from "../../providers/AuthProvider";
import LoadingSpinner from "../../Shared/Pages/LoadingSpinner";
import { Helmet } from "react-helmet";

const HomeNormal = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(user.email);


    // Update the teamUser logic to check user.email against userData.username
    const teamUser = userData.filter(team => team?.email === user?.email);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle loading and error states
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="space-y-20">
             <Helmet>
                <title>AssetGuard | Home</title>
            </Helmet>
            <HomeBannerNorm />
            {
                teamUser.length > 0 ? 
                <div>
                    <HomePendingNorm />
                    <HomeRequestsByDate />
                    <Notice />
                </div> 
                : 
                <p className="text-center text-2xl">You Are not Connected to Any Company. Please Contact with Your HR</p>
            }
        </div>
    );
};

export default HomeNormal;
