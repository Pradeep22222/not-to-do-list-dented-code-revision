import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Container} from 'react-bootstrap'
import { AddForm } from './components/AddForm';
import { ListArea } from './components/ListArea';
import { useState } from 'react';
function App() {
    const [taskList, setTaskList] = useState([]);
    const addTask = (task) => {
      setTaskList([...taskList, task]);
    };
  const switchTask = (i,type) => {
    const switchedArg = taskList.map((item, index) => {
      if (index === i) {
        const dt =( item.type=type);
        return dt;
      }
      return item;
    })
    setTaskList(switchedArg)
  }
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
