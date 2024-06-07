import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../providers/AuthProvider";
import Title from "../Title";
import useFetchUserData from "../../hooks/useFetchUserData";
import Swal from "sweetalert2";
import LoadingSpinner from "./LoadingSpinner";

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const { userData, loading } = useFetchUserData(user?.email);

    const [displayName, setDisplayName] = useState(user?.displayName || "");
    const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
    const [showModal, setShowModal] = useState(false);

    const handleUpdateButton = () => {
        setShowModal(true);
    };

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        updateProfile(user, {
            displayName,
            photoURL
        }).then(() => {
            updateUserProfile(displayName, photoURL);
            Swal.fire("Success", "Profile updated successfully!", "success");
        }).catch(error => {
            console.error("Error updating profile: ", error);
            Swal.fire("Error", "Error updating profile. Please try again.", "error");
        }).finally(() => {
            setShowModal(false);
        });
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        if (!isNaN(date)) {
            return date.toISOString().split('T')[0];
        }
        return dateString;
    };

    return (
        <div className="py-20">
            {loading ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (
                <>
                    <Title title="My Profile" subtitle="Profile Information"></Title>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img
                            alt=""
                            className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                            src={user?.photoURL}
                        />
                        <p className="text-xl font-semibold leading-tight">{user?.displayName}</p>
                        <p className="text-gray-400">Role: {userData?.role}</p>
                        <p className="text-gray-400">Date of Birth: {formatDate(userData?.birthdate)}</p>
                        <p className="text-gray-400">Email: {userData?.email}</p>
                        <button
                            onClick={handleUpdateButton}
                            className="btn w-20 mx-auto bg-[#57A6A1] text-white"
                        >
                            Update
                        </button>
                    </div>
                    {showModal && (
                        <div className="fixed inset-0 z-10 flex items-center justify-center">
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative bg-white rounded-lg p-8 max-w-md">
                                <span className="absolute top-0 right-0 p-2 cursor-pointer" onClick={() => setShowModal(false)}>
                                    &times;
                                </span>
                                <form className="space-y-4" onSubmit={handleUpdateProfile}>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="text"
                                            name="name"
                                            defaultValue={user?.displayName}
                                            onChange={(e) => setDisplayName(e.target.value)}
                                            className="grow text-gray-500"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </label>
                                    <label className="input input-bordered flex items-center gap-2">
                                        <input
                                            type="text"
                                            name="url"
                                            defaultValue={user?.photoURL}
                                            onChange={(e) => setPhotoURL(e.target.value)}
                                            className="grow text-gray-500"
                                            placeholder="Photo URL"
                                            required
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="btn w-full bg-[#57A6A1] text-white"
                                    >
                                        Update Profile
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Profile;
