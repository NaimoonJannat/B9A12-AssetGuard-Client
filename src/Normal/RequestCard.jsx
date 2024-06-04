

const RequestCard = ({request}) => {
    const { product, type, requestDate, approveDate, status} = request;
    return (
        <div className="text-left border-2 border-[#240570] p-6 rounded-lg">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex flex-col">
			<div className="font-semibold">Request Date: {requestDate}</div>
			<div className="font-semibold">Approve Date: {approveDate}</div>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
				<h3 className="text-xl font-semibold">{product}</h3>
            <div className="flex gap-1">
                <div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240570]">
                {type}
                </div>
                <div className="btn btn-xs border-1 bg-[#240570] text-white border-[#57A6A1]">
                {status}
                </div>
            </div>
        </div>
            <div className="flex gap-2 justify-center items-center">
{/*             
            <button onClick={handleApproveButton} className="btn btn-circle text-[#3bbd3bb0] border-1 border-[#240570]"><FaCheck /></button>
            
            <button onClick={() => handleDelete(_id)} className="btn btn-circle text-[#F50000] border-1 border-[#240570]">
            <RxCross2 />
            </button > */}
        </div>
            
	</div>

</div>
    );
};

export default RequestCard;