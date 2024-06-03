import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useFetchUserData from "../hooks/useFetchUserData";
import Swal from "sweetalert2";


const TableRow = ({employee}) => {
    const {user} = useContext(AuthContext);
    const { userData, loading } = useFetchUserData(user?.email);
     
    if(loading){
        return(
            <div className="w-full">
                <span className="loading w-1/3 mx-auto text-[##57A6A1] loading-dots 
        "></span>
            </div>
        );
    }

    const handleAddButton = ()=>{
      const name = employee.name;
    const role = employee.role;
    const email = employee.email;
    const birthdate = employee.birthdate;
    const photo = employee.photo;
    const company = userData.company;
    const hremail = userData.email;
    const hrname = userData.name;
    const logo = userData.logo;

    const addedMember = {name, role, email, birthdate, photo, company, hremail, logo, hrname }
    console.log(addedMember);

       // send data to the server 
       fetch('http://localhost:3000/teams',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(addedMember)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        Swal.fire({
                title: "Success!",
                text: "Added to the team Successfully",
                icon: "success",
                confirmButtonText: 'Ok'
              });
              window.location.reload();
        
    })

                  // delete data from pending collection as it is marked 
const handleRemoveData = (id) =>{
  if (id) {
      console.log("Deleting card with ID:", id);
      fetch(`http://localhost:3000/employees/${id}`, {
          method: 'DELETE',
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          Swal.fire({
              title: "Success!",
              text: "Submitted Successfully",
              icon: "success",
              confirmButtonText: "Ok",
          });
      })
      .catch(error => console.log("Error deleting data:", error));
     
  }
}
      handleRemoveData(employee._id)



    }

    

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
                <img src={employee.photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{employee.name}</div>
            </div>
          </div>
        </td>
        <td>
          <br/>
          <span className="badge badge-ghost badge-sm">{employee.role}</span>
        </td>
        <th>
          <button onClick={handleAddButton} className="btn text-white bg-[#57A6A1] btn-xs">Add</button>
        </th>
      </tr>
    );
};

export default TableRow;