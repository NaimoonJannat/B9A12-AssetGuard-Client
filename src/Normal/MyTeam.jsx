import { useContext } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TeamCard from "./TeamCard";
import useFetchHrData from "../hooks/useFetchHrData";

const MyTeam = () => {
    const { user } = useContext(AuthContext); // normal employee login data
    const teams = useLoaderData(); // all teams data


    const userEmail = user?.email;
    console.log("User Email:", userEmail);

    // Get the user's team data to find the HR email
    const userTeamData = teams?.find(team => team.email === userEmail);
    // console.log("User Team Data:", userTeamData);

    const teamMail = userTeamData?.hremail;
    // console.log("HR Email from User Team Data:", teamMail);

    // Use the hook to fetch HR data
    const { hrData, loading, error } = useFetchHrData(teamMail);

    // While loading or if there's an error, show appropriate messages
    if (!teams || !user || loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Ensure hrData is available before proceeding
    if (!hrData) return <div>No HR data available.</div>;

    const filteredTeam = teams.filter(team => team.hremail === teamMail);
    // console.log("Filtered Team Data:", filteredTeam);

    return (
        <section className="py-20">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <Title title="My Team" subtitle="Meet the teammates"></Title>
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
