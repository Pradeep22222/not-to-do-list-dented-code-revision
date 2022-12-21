import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ taskList }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            title="Entry List"
            arrow="right"
            list={entryList}
          ></TaskList>
        </Col>
        <Col>
          <TaskList title="Bad List"></TaskList>
          <div className="text-end text-danger fw-bold">
            You could have saved 40 hours
          </div>
        </Col>
      </Row>
      <div className="fw-bold">Total time allocated is 55hr/wk</div>
    </div>
  );
};
