import { useContext } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import TeamCard from "./TeamCard";

const MyTeam = () => {
    const { user } = useContext(AuthContext); // normal employee login data
    const teams = useLoaderData(); // all teams data

    if (!teams || !user) {
        return <div>Loading...</div>;
    }

    // Log the entire teams array for debugging
    // console.log("All Teams Data:", teams);

    const userEmail = user?.email;
    // console.log("User Email:", userEmail);

    const userTeamData = teams.find(team => team.email === userEmail);
    // console.log("User Team Data:", userTeamData);

    const teamMail = userTeamData?.hremail;
    // console.log("HR Email from User Team Data:", teamMail);

    const filteredTeam = teams.filter(team => team.hremail === teamMail);
    // console.log("Filtered Team Data:", filteredTeam);

    return (
        <section className="py-20">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <Title title="My Team" subtitle="Meet the teammates"></Title>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img 
                        alt="User profile"
                        className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" 
                        src={user.photo || "https://source.unsplash.com/100x100/?portrait?0"} 
                    />
                    <p className="text-xl font-semibold leading-tight">{user.name || "Leroy Jenkins"}</p>
                    <p className="text-gray-400">{user.role || "Visual Designer"}</p>
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
