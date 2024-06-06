import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useFetchUserData from "../hooks/useFetchUserData";
import Swal from "sweetalert2";

const TableRow = ({ employee }) => {
  const { user } = useContext(AuthContext);
  const { userData } = useFetchUserData(user?.email);

  const handleAddButton = () => {
    const name = employee.name;
    const role = employee.role;
    const email = employee.email;
    const birthdate = employee.birthdate;
    const photo = employee.photo;
    const company = userData.company;
    const hremail = userData.email;
    const hrname = userData.name;
    const logo = userData.logo;

    const addedMember = {
      name,
      role,
      email,
      birthdate,
      photo,
      company,
      hremail,
      logo,
      hrname,
    };
    console.log(addedMember);

    // send data to the server
    fetch("https://b9a12-assetguard-server.vercel.app/teams", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedMember),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Added to the team successfully",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      });

    // delete data from pending collection as it is marked
    const handleRemoveData = (id) => {
      if (id) {
        console.log("Deleting card with ID:", id);
        fetch(`https://b9a12-assetguard-server.vercel.app/employees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log("Error deleting data:", error));
      }
    };
    handleRemoveData(employee._id);
  };

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={employee.photo} alt={employee.name} />
            </div>
          </div>
          <div>
            <div className="font-bold">{employee.name}</div>
          </div>
        </div>
      </td>
      <th>
        <button
          onClick={handleAddButton}
          className="btn text-white bg-[#57A6A1] btn-xs"
        >
          Add
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
