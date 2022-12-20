import React from 'react'
import Table from "react-bootstrap/Table";
export const TaskList = ({title}) => {
  return (
    <div className="mt-3">
      <h2 className="text-center">{title}</h2>
      <div className="table">
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
           
          </tbody>
        </Table>
      </div>
    </div>
  );
}
