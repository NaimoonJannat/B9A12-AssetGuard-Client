import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import ExtraCard from "./ExtraCard";

const ExtraOne = () => {
    const [users, setUsers] = useState([]);
 
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                console.log(false);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Title title="My Employees"></Title>
           <div className="flex flex-col items-center justify-center">
	<div className="flex -space-x-4">
    {users.map(user => (
                     <ExtraCard
                     key={user._id}
                     user={user}
                     ></ExtraCard>
                 ))}
		
	</div>
</div>
</div>
    );
};

export default ExtraOne;