import Swal from "sweetalert2";

const HrTeamCard = ({ team }) => {
  const handleRemoveButton = () => {
    const handleRemoveData = (id) => {
      if (id) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://b9a12-assetguard-server.vercel.app/teams/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if (data.deletedCount > 0) {
                  Swal.fire({
                    title: "Removed!",
                    text: "Employee has been removed.",
                    icon: "success",
                  }).then(() => {
                    // send data to the server
                    const { name, role, email, birthdate, photo } = team;
                    const removedMember = {
                      name,
                      role,
                      email,
                      birthdate,
                      photo,
                    };
                    fetch("https://b9a12-assetguard-server.vercel.app/employees", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(removedMember),
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
          }
        });
      }
    };

    handleRemoveData(team._id);
  };

  return (
    <div className="flex flex-col justify-center m-8 text-center">
      <img
        alt=""
        className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
        src={team?.photo}
      />
      <p className="text-xl font-semibold leading-tight">{team?.name}</p>
      <p className="text-gray-400">{team?.role}</p>
      <button
        onClick={handleRemoveButton}
        className="btn btn-xs bg-[#57A6A1] text-white"
      >
        Remove
      </button>
    </div>
  );
};

export default HrTeamCard;
