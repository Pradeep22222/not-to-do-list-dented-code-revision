import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { AddForm } from "./components/AddForm";
import { ListArea } from "./components/ListArea";
import { useState } from "react";
const wklyHr = 7 * 24;
function App() {
  const [taskList, setTaskList] = useState([]);
  const total=taskList.reduce((acc, item)=>acc + +item.hr, 0)
  const addTask = (task) => {
    if (total + +task.hr > wklyHr) {
  return alert("Sorry mate, you don't have enough time to fit this task")
}
    setTaskList([...taskList, task]);
  };
  const switchTask = (id, type) => {
    const switchedArg = taskList.map((item, index) => {
      if (item.id === id) {
        item.type = type;
      }
      return item;
    });
    setTaskList(switchedArg);
  };
  return (
    <div className="wrapper">
      <Container>
        <div className="text-center">
          <h1 className="mb-3 pt-3">My Not to do list</h1>
          <AddForm addTask={addTask}></AddForm>
        </div>
        <hr className="formHr" />

        <ListArea taskList={taskList} switchTask={switchTask}></ListArea>
      </Container>
    </div>
  );
}

export default App;
