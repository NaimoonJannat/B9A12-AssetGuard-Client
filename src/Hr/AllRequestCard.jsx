import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";

const AllRequestCard = ({request}) => {
    const {_id, product, type, requestDate, status, username, useremail, notes} = request;
    const [approveDate, setApproveDate] = useState('');

    useEffect(() => {
        setApproveDate(new Date().toISOString().split('T')[0]); // Get current date in YYYY-MM-DD format
    }, []);

     const handleApproveButton = () => {
        const handleRemoveData = (id) => {
            if (id) {
                fetch(`http://localhost:3000/requests/${id}`, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                        Swal.fire({
                          title: "Approved!",
                          text: "The Request has been Approved.",
                          icon: "success",
                        }).then(() => {
                          // send data to the server
                          const { product, type, requestDate, username, useremail, notes} = request;
                          const approvedAsset = {
                            product,
                            status: 'approved',
                            type,
                            username,
                            useremail,
                            notes,
                            requestDate,
                            approveDate
                          };
                          console.log(approvedAsset);
                          fetch("http://localhost:3000/requests", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(approvedAsset),
                          })
                            .then((res) => res.json())
                            .then((data) => {
                              console.log(data);
                              window.location.reload();
                            });
                        });
                      }
                    })
                    .catch((error) =>
                      console.log("Error deleting:", error)
                    );

            }}
            handleRemoveData(_id);
  };
      // handle delete button 
      const handleDelete = () => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/requests/${_id}`, {
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        window.location.reload();
                    }
                })
                .catch(error => console.log("Error deleting :", error));
            }
        });
    }
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
                <h2>Requested by-</h2>
                <h2 className="text-[#240750] font-bold">{username}</h2>
                <p>Email: {useremail}</p>
                <p>Note: {notes}</p>
			
        </div>
            {
              (status === 'pending') ?
              <div className="flex gap-2 justify-center items-center">
            <button onClick={handleApproveButton} className="btn btn-circle text-[#3bbd3bb0] border-1 border-[#240750]"><FaCheck /></button>
            
            <button onClick={() => handleDelete(_id)} className="btn btn-circle text-[#F50000] border-1 border-[#240750]">
            <RxCross2 />
            </button >
        </div> : <div className="flex gap-2 justify-center items-center">
            <button onClick={handleApproveButton} disabled className="btn btn-circle text-[#3bbd3bb0] border-1 border-[#240750]"><FaCheck /></button>
            
            <button onClick={() => handleDelete(_id)} disabled className="btn btn-circle text-[#F50000] border-1 border-[#240750]">
            <RxCross2 />
            </button >
        </div>
            }
            
	</div>

</div>
    );
};

export default AllRequestCard;