// RequestAsset.js
import { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import AssetCardNormal from "./AssetCardNormal";
import useFetchTeamData from "../hooks/useFetchTeamData";
import { AuthContext } from "../providers/AuthProvider";

const RequestAsset = () => {
    const { user } = useContext(AuthContext);
    const assets = useLoaderData();
    const { userData, loading, error } = useFetchTeamData(user?.email);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const filteredAssets = assets.filter(asset => asset.hrEmail === userData?.hremail);

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
