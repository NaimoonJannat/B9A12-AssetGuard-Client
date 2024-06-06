// AssetCardNormal.js
import { useState } from 'react';
import RequestModal from './RequestModal';
import Swal from 'sweetalert2';

const AssetCardNormal = ({ asset, user }) => {
    const { product, type, availability } = asset;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleRequestClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitRequest = (requestData) => {
        console.log(requestData); 
        // Send requestData to the backend
        fetch('https://b9a12-assetguard-server.vercel.app/requests',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(requestData)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            Swal.fire({
                    title: "Success!",
                    text: "Requested Successfully",
                    icon: "success",
                    confirmButtonText: 'Ok'
                  });
            
        })
       
    };

    return (
        <div className="text-left border-2 border-[#240750] p-6 rounded-lg">
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{product}</h3>
                <h2>Type: {type}</h2>
                <div className="btn btn-xs border-1 bg-[#57A6A1] text-white border-[#240750]">
                    {availability}
                </div>
            </div>
            <div className="text-right">
                {
                    (availability === 'out of stock') ? <button disabled className="btn bg-[#240750] text-white">Request</button> : <button onClick={handleRequestClick} className="btn bg-[#240750] text-white">Request</button>
                }
            </div>

            <RequestModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={handleSubmitRequest}
                asset={asset}
                user={user}
            />
        </div>
    );
};

export default AssetCardNormal;
