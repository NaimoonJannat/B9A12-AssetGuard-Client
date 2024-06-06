import { useEffect, useState } from 'react';
import Title from '../../Shared/Title';
import RequestCardHome from './RequestCardHome';

const HomeRequestsByDate = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/requests');
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

    // Filter the data to show requests from the last month
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    const filteredRequests = requests.filter(request => {
        const requestDate = new Date(request.requestDate);
        return requestDate >= oneMonthAgo;
    });

    // Sort the filtered requests by date
    const sortedRequests = filteredRequests.sort((a, b) => new Date(b.requestDate) - new Date(a.requestDate));

    return (
        <div className='w-11/12 md:w-4/5 mx-auto'>
            <div>
                <Title title="My Requests" subtitle="Assets Requested in the Last Month"></Title>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sortedRequests.map(request => (
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

export default HomeRequestsByDate;
