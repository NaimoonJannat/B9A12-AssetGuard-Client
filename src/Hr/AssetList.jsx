import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import AssetCard from "./AssetCard";
import Title from "../Shared/Title";
import { AuthContext } from "../providers/AuthProvider";  

const AssetList = () => {
    const assets = useLoaderData();
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;

    // Filter assets based on hrEmail
    const filteredAssets = assets.filter(asset => asset.hrEmail === userEmail);

    return (
        <div className="text-center space-y-4 mb-10 pt-20 w-11/12 md:w-4/5 mx-auto">
            <Title title="All Asset List" subtitle="Assets Are Here" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredAssets.map(asset => (
                    <AssetCard
                        key={asset._id}
                        asset={asset}
                    />
                ))}
            </div>
        </div>
    );
};

export default AssetList;
