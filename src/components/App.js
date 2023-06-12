
import React,{useState} from "react";
import './../styles/App.css';
import Tasks from './todo.js';

const App = () => {
  let [tasks,setTasks] = useState([]);

   return (<>
     <h1>Task Lists</h1>
     <Tasks tasks={tasks} setTasks={setTasks}/>
   </>)
}

export default App
