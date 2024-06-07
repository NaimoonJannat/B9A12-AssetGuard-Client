import { useEffect, useState } from 'react';
import Title from '../../Shared/Title';
import AllRequestCard from '../AllRequestCard';
import LoadingSpinner from '../../Shared/Pages/LoadingSpinner';

const HomePending = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/requests');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setRequests(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Filter the data by status "pending"
    const pendingRequests = requests.filter(request => request.status === 'pending').slice(0, 5);

    return (
        <div>
            <div>
                <Title title="Pending Requests" subtitle="Some of the pending requests"></Title>
            </div>
            {loading && <LoadingSpinner></LoadingSpinner>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {pendingRequests.map(request => (
                     <AllRequestCard
                         key={request._id}
                         request={request}
                     />
                 ))}
             </div>
            )}
        </div>
    );
};

export default HomePending;
