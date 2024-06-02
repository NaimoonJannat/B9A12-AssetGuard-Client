import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import AssetCardNormal from "./AssetCardNormal";

const RequestAsset = () => {
    const assets = useLoaderData();
    return (
         <div className="text-center space-y-4 py-20 w-11/12 md:w-4/5 mx-auto">
          <Title title="Request An Asset" subtitle="Choose asset to request"></Title>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {
                 assets.map(asset =>
                     <AssetCardNormal
                     key={asset._id}
                     asset={asset}
                     >

                     </AssetCardNormal>
                 )
             }
         </div>
     </div>
    );
};

export default RequestAsset;