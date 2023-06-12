import React,{useState} from 'react';

function Tasks({tasks,setTasks}){
    
  let [task,setTask] = useState('');

  let handleAdd = () => {
    task!==''?setTasks([...tasks,task]):setTasks([...tasks])
    setTask('');
    console.log('all to contact',tasks);
  }

  let handleDelete = (idx) => {
    let newTask = tasks.filter((_,id) => id !== idx);
    setTasks(newTask);
  }

  let handleSave = (update,idx) => {
    tasks[idx] = update;
    setTasks([...tasks]);
  }

  return (
    <div>
        <>
          <input placeholder='Enter the task' value={task} onChange={e=>setTask(e.target.value)} className='add_tasks_section'/>
          <button onClick={handleAdd}>Add Task</button>
        </>
      <h1>My Tasks</h1>
      {console.log('my tasks',tasks)}
      
      <ol className='tasks_section'>
        {tasks.length>0 && tasks.map((item,idx) => 
          <Task item={item} idx={idx} onchange={handleSave} ondelete={handleDelete} />
        )}
        </ol>
    </div>
  )
}

function Task({item,idx,onchange,ondelete}){
    let [isEditing,setIsEditing] = useState(false);
    let [newTask,setNewTask] = useState(item);

    return (
        <li key={idx} className='task'>
            {isEditing?
            <>
              <input placeholder='Enter the new task' value={newTask} onChange={e=>setNewTask(e.target.value)}/>
              <button onClick={()=>{
                onchange(newTask,idx)
                setIsEditing(false)
                }}
                className='save'>Save</button>
              <button onClick={()=>setIsEditing(false)}>Cancel</button>
            </>
            :
            <>
              <span>{item}</span>
              <button onClick={()=>setIsEditing(true)} className='edit'>Edit</button>
              <button onClick={()=>{
                    setIsEditing(false);
                    ondelete(idx)
                }}
                className='delete'>Delete</button>
            </>}
          </li>
    )
}
export default Tasks;