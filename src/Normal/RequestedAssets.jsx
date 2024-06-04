import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import RequestCard from "./RequestCard";

const RequestedAssets = () => {
    const myRequests = useLoaderData();
    const {user} = useContext(AuthContext);
    const myEmail = user?.email;
    const filteredData =myRequests.filter(user => user?.useremail === myEmail);
    return (
        <div className="py-20">
            <div>
            <Title title="My Requested Assets" subtitle="All Requested Assets"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredData.map(request => (
                    <RequestCard
                        key={request._id}
                        request={request}
                    />
                ))}
            </div>
        </div>
        </div>
    );
};

export default RequestedAssets;