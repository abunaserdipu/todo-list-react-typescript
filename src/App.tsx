import React, {FC,useState,ChangeEvent} from 'react';
import './App.css';

const App : FC = () => {
  const [task,setTask] = useState("");
  const [deadline,setDeadline] = useState(0);
  const [todo,setTodo] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setTask(event.target.value)
    }else {
      setDeadline(Number(event.target.value))
    }
    
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
        <input type="text" name="task" onClick={handleChange} placeholder="Task..." />
        <input type="number" name="deadline" onClick={handleChange} placeholder="Deadline (in Days)..." />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
