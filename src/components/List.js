import React from "react";

function List({task,updateTasks}){

    console.log('array',typeof updateTasks);

    function editing(idx){
        
    }

    function deleting(idx){
        task.splice(idx,1);
        console.log(task);
    }


    return (
        <>
        {
            task.map((element,idx)=>{
               return(
                <>
                 <li key={`n${idx}`}>
                    {element}
                    <button onClick={editing(idx)}>Edit</button>
                    <button onClick={deleting(idx)}>Delete</button>
                </li> 
                </>
               )
        })
        }
        </>
    )
}
export default List;