import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import AssetCardNormal from "./AssetCardNormal";
import { AuthContext } from "../providers/AuthProvider";

const RequestAsset = () => {
    const assets = useLoaderData();
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(loading, error);
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    
    const filteredAssets = assets.filter(asset => asset?.hrEmail === userData?.hremail);
    return (
        <div className="text-center space-y-4 py-20 w-11/12 md:w-4/5 mx-auto">
            <Title title="Request An Asset" subtitle="Choose asset to request"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAssets.map(asset =>
                    <AssetCardNormal
                        key={asset._id}
                        asset={asset}
                        user={user}
                    />
                )}
            </div>
        </div>
    );
};

export default RequestAsset;