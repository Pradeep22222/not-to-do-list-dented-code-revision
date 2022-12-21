import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ taskList, switchTask }) => {
  const entryList = taskList.filter(({ type }) => type === "entry");
  const badList = taskList.filter(({ type }) => type === "bad");
  const badHrs = badList.reduce((acc, item) => acc + +item.hr, 0)
const totalHrs = taskList.reduce((acc, item) => acc + +item.hr, 0);
  
  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            title="Entry List"
            arrow="right"
            list={entryList}
            switchTask={switchTask}
          ></TaskList>
        </Col>
        <Col>
          <TaskList
            title="Bad List"
            list={badList}
            switchTask={switchTask}
          ></TaskList>
          <div className="text-end text-danger fw-bold">
            You could have saved {badHrs} hours
          </div>
        </Col>
      </Row>
      <div className="fw-bold">Total time allocated is { totalHrs}hr/wk</div>
    </div>
  );
};
