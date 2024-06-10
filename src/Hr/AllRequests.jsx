import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import AllRequestCard from "./AllRequestCard";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AllRequests = () => {
    const { user } = useContext(AuthContext);
    const userEmail = user.email;
    const requests = useLoaderData();
    const filteredRequests = requests.filter(request => request.hrEmail === userEmail);

    return (
        <div className="py-20 w-11/12 md:w-4/5 mx-auto">
            <Helmet>
                <title>AssetGuard | All Requests</title>
            </Helmet>
            <div>
                <Title
                    title="Requested Assets"
                    subtitle="All Requested Assets"
                />
            </div>
            {filteredRequests.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredRequests.map(request => (
                        <AllRequestCard
                            key={request._id}
                            request={request}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center text-2xl">
                    <p>There is No Request Yet!</p>
                </div>
            )}
        </div>
    );
};

export default AllRequests;
