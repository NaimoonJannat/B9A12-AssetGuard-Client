
import { useState, useEffect } from 'react';

const RequestModal = ({ isOpen, onClose, onSubmit, asset, user }) => {
    const [notes, setNotes] = useState('');
    const [requestDate, setRequestDate] = useState('');

    useEffect(() => {
        setRequestDate(new Date().toISOString().split('T')[0]); // Get current date in YYYY-MM-DD format
    }, []);

    const handleSubmit = () => {
        const requestData = {
            product: asset.product,
            quantity: asset.quantity,
            status: 'pending',
            type: asset.type,
            availability: asset.availability,
            username: user.displayName,
            useremail: user.email,
            notes,
            requestDate,
        };
        onSubmit(requestData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/2">
                <h2 className="text-xl mb-4">Request <span className='text-[#57A6A1] font-bold'>{asset.product}</span> </h2>
                <div className="mb-4">
                    <label className="block mb-2">Additional Notes</label>
                    <input
                        type="text"
                        className="border p-2 w-full"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>
                <div className="flex justify-end">
                    <button className="btn bg-gray-500 text-white mr-2" onClick={onClose}>Cancel</button>
                    <button className="btn bg-[#240570] text-white" onClick={handleSubmit}>Request</button>
                </div>
            </div>
        </div>
    );
};

export default RequestModal;
