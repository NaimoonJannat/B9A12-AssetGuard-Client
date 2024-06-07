import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import RequestCard from "./RequestCard";
import LoadingSpinner from "../Shared/Pages/LoadingSpinner";


const RequestedAssets = () => {
    const [teamData, setTeamData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const myRequests = useLoaderData();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const teamUser = data.find(team => team?.email === user?.email);

                if (teamUser) {
                    setTeamData(teamUser);
                } else {
                    setTeamData(null);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.email]);

    if (loading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!teamData) {
        return <p className="py-20 text-2xl text-center">You are not connected to any company. Contact with your HR.</p>;
    }

    const filteredRequests = myRequests.filter(request => request?.useremail === teamData?.email);

    return (
        <div className="py-20 w-11/12 md:w-4/5 mx-auto">
            <div>
                <Title title="My Requested Assets" subtitle="All Requested Assets" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredRequests.map(request => (
                        <RequestCard
                            key={request._id}
                            request={request}
                            user={user}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RequestedAssets;
