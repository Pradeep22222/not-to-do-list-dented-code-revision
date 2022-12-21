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
  console.log(taskList)
  return (
    <div className="wrapper">
      <Container>
        <div className="text-center">
          <h1 className="mb-3 pt-3">My Not to do list</h1>
          <AddForm addTask={addTask}></AddForm>
        </div>
        <hr className="formHr" />

        <ListArea taskList={taskList}></ListArea>
      </Container>
    </div>
  );
}

export default App;
