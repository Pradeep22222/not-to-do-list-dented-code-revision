import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const TaskList = ({ title, arrow, list = [], switchTask }) => {
  return (
    <div className="mt-3">
      <h2 className="text-center">{title}</h2>
      <div className="table mt-4">
        <Table striped>
          <thead>
            <tr>
              <th>
                <Form.Check type="checkbox" />
              </th>
              <th>Task</th>
              <th>Hrs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={i}>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <td>{item.task}</td>
                <td>{item.hr}hr</td>
                <td>
                  {arrow === "right" ? (
                    <Button
                      variant="success"
                      onClick={() => {
                        switchTask(item.id, "bad");
                      }}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => {
                        switchTask(item.id, "entry");
                      }}
                    >
                      <i className="fa-solid fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
