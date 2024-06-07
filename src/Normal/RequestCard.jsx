
import Swal from 'sweetalert2';
import { PDFDownloadLink } from '@react-pdf/renderer';
import AssetPdf from './AssetPdf';
import { useEffect, useState } from 'react';
import LoadingSpinner from '../Shared/Pages/LoadingSpinner';


const RequestCard = ({ request, user }) => {
  const { _id, product, type, requestDate, approveDate, status } = request; 

//   fetch userData from team 
const [userData, setUserData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
console.log(error);

if(loading){
    <LoadingSpinner></LoadingSpinner>
}

useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
        try {
            const response = await fetch('https://b9a12-assetguard-server.vercel.app/teams');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Find the user data based on the email
            const teamUser = data.find(team => team?.email === user?.email);
            setUserData(teamUser);
            
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (user && user.email) {
        fetchData();
    }
}, [user]);

  // handle delete button 
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9a12-assetguard-server.vercel.app/requests/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Your Request has been canceled.",
                icon: "success"
              });
              window.location.reload();
            }
          })
          .catch(error => console.log("Error deleting:", error));
      }
    });
  }

  return (
    <div className="text-left border-2 border-[#240750] p-6 rounded-lg">
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
            <div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240750]">
              {type}
            </div>
            <div className="btn btn-xs border-1 bg-[#240750] text-white border-[#57A6A1]">
              {status}
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center items-center">
          {
            (status === 'pending') ? <button onClick={() => handleDelete(_id)} className="btn btn-error bg-red-600 text-white">
              Cancel
            </button> : <></>
          }
          {
            (status === 'approved') ? <PDFDownloadLink
              document={<AssetPdf request={request} userData={userData} />}
              fileName={`${product}_details.pdf`}
              className="btn btn-error bg-[#57A6A1] text-white"
            >
              {({ loading }) => (loading ? 'Loading document...' : 'Print')}
            </PDFDownloadLink> : <></>
          }
          {
            (status === 'approved') && (type === 'returnable') ? <button onClick={() => handleDelete(_id)} className="btn btn-error bg-[#240750] text-white">
              Return
            </button> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default RequestCard;
