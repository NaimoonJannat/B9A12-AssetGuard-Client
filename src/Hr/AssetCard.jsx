import { MdDelete, MdOutlineModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AssetCard = ({asset}) => {
    const {_id, product, quantity, type, addedDate} = asset;

    // handle delete button 
    const handleDelete = (_id) => {
        
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:3000/assets/${_id}`, {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment  has been deleted.",
                                icon: "success"
                            });
                            window.location.reload();
            
                        }
                    })
                    .catch(error => console.log("Error deleting assignment:", error));
                }
            });
        }
    return (
        <div className="text-left border-2 border-[#240750] p-6 rounded-lg">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<div className="mb-0 capitalize">Date Added: {addedDate}</div>
		</div>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
				<h3 className="text-xl font-semibold">{product}</h3>
                <h2>Quantity: {quantity}</h2>
			<div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240750]">
                {type}
            </div>
        </div>
            <div className="flex gap-2 justify-center items-center">
            <Link to={`/update-asset/${_id}`} className="btn btn-circle text-[#57A6A1] border-1 border-[#240750]">
            <MdOutlineModeEdit />
            </Link >
            <button onClick={() => handleDelete(_id)} className="btn btn-circle text-[#F50000] border-1 border-[#240750]">
            <MdDelete />
            </button >
        </div>
            
	</div>

</div>
    );
};

export default AssetCard;