import { useContext, useEffect, useState } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TeamCard from "./TeamCard";
import useFetchHrData from "../hooks/useFetchHrData";
import LoadingSpinner from "../Shared/Pages/LoadingSpinner";

const MyTeam = () => {
    const { user } = useContext(AuthContext); // normal employee login data
    const teams = useLoaderData(); // all teams data

    const [userTeamData, setUserTeamData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const teamUser = data.find(team => team?.email === user?.email);
                setUserTeamData(teamUser);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (user && user.email) {
            fetchData();
        }
    }, [user]);

    const teamMail = userTeamData?.hremail;
    const { hrData, loading: hrLoading, error: hrError } = useFetchHrData(teamMail);

    if (loading || hrLoading) {
        return <LoadingSpinner />;
    }

    if (error || hrError) {
        return <div>Error: {error || hrError}</div>;
    }

    if (!userTeamData) {
        return <div className="py-20"><p className="text-center text-2xl">You are not connected to any company. Contact with your HR!</p></div>;
    }

    if (!hrData) {
        return <div>No HR data available.</div>;
    }

    const filteredTeam = teams.filter(team => team?.hremail === teamMail);

    return (
        <section className="py-20">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <Title title="My Team" subtitle="Meet the teammates" />
                <div className="flex flex-col justify-center m-8 text-center">
                    <img 
                        alt="User profile"
                        className="self-center w-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" 
                        src={hrData.photo} 
                    />
                    <p className="text-xl font-semibold leading-tight">{hrData.name}</p>
                    <p className="text-gray-400">{hrData.role}</p>
                </div>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    {filteredTeam.map(team => (
                        <TeamCard
                            key={team._id}
                            team={team}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyTeam;
