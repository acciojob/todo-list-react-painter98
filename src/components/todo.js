import React, { useState } from "react";


function Todo(){
    let [tasks,setTasks] = useState([]);
    let [task,setTask] = useState('');

    let addTask = ()=>{
        console.log('hii');
        setTasks([...tasks,task]);
        setTask('');
    }

    function editing(idx){
        setTask(tasks[idx]);
    }

    function deleting(idx){
        let newTask = tasks.filter((_,index)=>index!==idx)
        setTasks(newTask);
    }

    return (
        <div className="add_tasks_section">
            <input type='text' className="task" placeholder='enter the tasks' onChange={e=>setTask(e.target.value)} value={task}/>
            <button onClick={addTask}>Add</button>
            <ul className="tasks_section">
               
               { tasks.map((element,idx)=>{
               return(
                <>
                 <li key={`n${idx}`}>
                    {element}
                    <button className="edit" onClick={()=>editing(idx)}>Edit</button>
                    <button className="delete" onClick={()=>deleting(idx)}>Delete</button>{/*need to pass as arrow function reference to avoid calling function on rendering */}
                </li> 
                </>
                )}
                )}
            </ul>
        </div>
    )
}

export default Todo;