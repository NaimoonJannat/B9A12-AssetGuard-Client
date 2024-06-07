import { useContext } from "react";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import HrTeamCard from "./HrTeamCard";
import { Helmet } from "react-helmet";


const MyTeam = () => {
    const { user } = useContext(AuthContext); //hr login data
    const teams = useLoaderData(); // all teams data


    const userEmail = user?.email;
    console.log("User Email:", userEmail);


    const filteredTeam = teams.filter(team => team?.hremail === userEmail);
    // console.log("Filtered Team Data:", filteredTeam);

    return (
        <section className="py-20">
             <Helmet>
                <title>AssetGuard | My Employee</title>
            </Helmet>
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <Title title="My Team" subtitle="Meet the employees"></Title>
                <div className="flex flex-col justify-center m-8 text-center">
                    <img 
                        alt="User profile"
                        className="self-center w-24 mb-4 bg-center bg-cover rounded-full bg-gray-500" 
                        src={user?.photoURL} 
                    />
                    <p className="text-xl font-semibold leading-tight">{user?.displayName}</p>
                    <p className="text-gray-400">hr</p>
                </div>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    {filteredTeam.map(team => (
                        <HrTeamCard
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
