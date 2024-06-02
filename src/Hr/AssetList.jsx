import { useLoaderData } from "react-router-dom";
import AssetCard from "./AssetCard";
import Title from "../Shared/Title";


const AssetList = () => {
    const assets = useLoaderData();
    return (
        <div className="text-center space-y-4 pt-20 w-11/12 md:w-4/5 mx-auto">
            <Title title="All Asset List" subtitle="Assets Are Here"></Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    assets.map(asset =>
                        <AssetCard
                        key={asset._id}
                        asset={asset}
                        >

                        </AssetCard>
                    )
                }
            </div>
        </div>
    );
};

export default AssetList;