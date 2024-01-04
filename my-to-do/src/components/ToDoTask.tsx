import { ToDo } from "../types";
import delBtn from "../assets/delete.png";
import "./ToDoTask.scss";

type ToDoTaskProps = {
    task:ToDo;
    toDelete(taskNameCompeted: string):  void;
    onCheck(): void;
    
}

const ToDoTask = ({task,toDelete, onCheck}:ToDoTaskProps) => {

    return(
        <div className="todo-item">
        <span className="checkbox">
        <input  type="checkbox" onChange={onCheck}/>
        </span> 
        <div className="task">
        {task.taskName}
        </div>
       
         <div>
        <button onClick={() =>{toDelete(task.taskName)}}>
        <img src={delBtn} className="delete"/>
        </button>
        </div>
        </div>
    )
}
export default ToDoTask;