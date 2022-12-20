import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Container} from 'react-bootstrap'
import { AddForm } from './components/AddForm';
import { ListArea } from './components/ListArea';
function App() {
  return (
    <div className="wrapper">
      <Container>
        <div className="text-center">
          <h1 className="mb-3 pt-3">My Not to do list</h1>
          <AddForm></AddForm>
        </div>
        <hr className="formHr" />

        <ListArea></ListArea>
      </Container>
    </div>
  );
}

export default App;
