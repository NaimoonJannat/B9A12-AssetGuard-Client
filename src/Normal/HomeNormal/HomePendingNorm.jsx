import { useEffect, useState } from 'react';
import Title from '../../Shared/Title';
import RequestCardHome from './RequestCardHome';


const HomePendingNorm = () => {
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
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <div>
                <Title title="My Pending Requests" subtitle="Assets I Need"></Title>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {pendingRequests.map(request => (
                     <RequestCardHome
                         key={request._id}
                         request={request}
                     />
                 ))}
             </div>
            )}
        </div>
    );
};

export default HomePendingNorm;
