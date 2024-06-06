import { useEffect, useState } from "react";
import Title from "../../Shared/Title";
import AssetCard from "../AssetCard";

const LimitedStock = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/assets');
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
    const filteredAssets = requests.filter(asset => asset.quantity <= 9 && asset.quantity > 0 );
    return (
        <div>
        <div>
            <Title title="Limited Stock Assets" subtitle="Assets Almost Out of Stock"></Title>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {filteredAssets.map(request => (
                 <AssetCard
                 key={request._id}
                 asset={request}
                 ></AssetCard>
             ))}
         </div>
        )}
    </div>
    );
};

export default LimitedStock;