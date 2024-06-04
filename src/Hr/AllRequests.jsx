import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import AllRequestCard from "./AllRequestCard";

const AllRequests = () => {
    const requests = useLoaderData();
    return (
        <div className="py-20">
            <div>
            <Title
             title="My Requested Assets" subtitle="All Requested Assets"></Title>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {requests.map(request => (
                    <AllRequestCard
                        key={request._id}
                        request={request}
                    />
                ))}
            </div>

        </div>
    );
};

export default AllRequests;