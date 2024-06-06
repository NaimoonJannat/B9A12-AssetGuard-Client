
const RequestCardHome = ({request}) => {
    const { product, type, requestDate, status, notes} = request;

  
    return (
        <div className="text-left border-2 border-[#240750] p-6 rounded-lg">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<div className="mb-0 capitalize">Request Date: {requestDate}</div>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
				<h3 className="text-xl font-semibold">{product}</h3>
                <div className="flex gap-1">
                <div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240750]">
                {type}
            </div>
                <div className="btn btn-xs border-1 bg-[#240750] text-white border-[#57A6A1]">
                {status}
            </div>
                </div>
                <p>Note: {notes}</p>
			
        </div>
            
	</div>

</div>
    );
};

export default RequestCardHome;