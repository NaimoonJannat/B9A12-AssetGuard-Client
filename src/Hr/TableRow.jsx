

const TableRow = ({employee}) => {
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
          <button className="btn text-white bg-[#57A6A1] btn-xs">Add</button>
        </th>
      </tr>
    );
};

export default TableRow;