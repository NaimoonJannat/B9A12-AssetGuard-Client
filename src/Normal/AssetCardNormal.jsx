
const AssetCardNormal = ({asset}) => {
    const {_id, product, type, availability} = asset;

    return (
        <div className="text-left border-2 border-[#240570] p-6 rounded-lg">

		<div className="space-y-2">
				<h3 className="text-xl font-semibold">{product}</h3>
                <h2>Type: {type}</h2>
			<div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240570]">
                {availability}
            </div>
        </div>
       <div className="text-right">
       <button className="btn bg-[#240570] text-white">Request</button>
       </div>

</div>
    );
};

export default AssetCardNormal;