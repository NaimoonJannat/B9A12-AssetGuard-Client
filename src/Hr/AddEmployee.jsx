import { useLoaderData } from "react-router-dom";
import Title from "../Shared/Title";
import TableRow from "./TableRow";
import { Helmet } from "react-helmet";


const AddEmployee = () => {
    const employees = useLoaderData()
    return (
        <div className="w-full md:w-4/5 mx-auto py-20">
          <Helmet>
                <title>AssetGuard | Add Employee</title>
            </Helmet>
            <Title title="Add An Employee" subtitle="Increase Your Teamwork"></Title>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" disabled className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {employees.map(employee => (
                    <TableRow
                    key={employee._id}
                    employee={employee}
                    >

                    </TableRow>
      ))}
     
    </tbody>
  </table>
  <div className="text-center">
            <button className="btn btn-ghost btn-outline">Add Selected Employees</button>
        </div>
</div>
        </div>
    );
};

export default AddEmployee;