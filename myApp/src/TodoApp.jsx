import { useState } from "react";


const TodoApp = () => {
    const listOfTasks =  JSON.parse(localStorage.getItem("tasks")) || [];
    const [tasks, setTasks] = useState(listOfTasks);

    const [newTask, setNewTask] = useState("New Task");

    const addtask = () =>{
        setTasks(t=>[...t,newTask])
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    }

    const removeTask = (index) => () =>{
        const updatedTasks = (t => t.filter((_, i) => i !== index));
        console.log(index);
        localStorage.setItem("tasks",JSON.stringify(updatedTasks(tasks)));
        setTasks(updatedTasks);
        
    }


    return (
        <div className="Todo-Main">
            <h1>Todo App</h1>
            <div className="Todo-App">
               
                {tasks.map((task, index) => (
                    <div key={index} className="task">
                        {task}
                        <button className="removeButton" onClick={removeTask(index)}>Remove</button>
                    </div>
                ))}
            </div>  
            <div>
                <input type="text" placeholder="Write your task" value={newTask} onChange={(event)=>{
                    setNewTask(event.target.value);
                }}  onKeyDown={(event)=>{
                    if(event.key === "Enter"){
                        addtask();
                    }
                }}/>
                <button className="AddTask" onClick={addtask}>Add task</button>
            </div>
        </div>
    );
}

export default TodoApp;