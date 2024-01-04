import { ToDo } from "../types";
import delBtn from "../assets/delete.png";
import "./ToDoTask.scss";

type ToDoTaskProps = {
  task: ToDo;
  toDelete(taskNameCompeted: string): void;
};

const ToDoTask = ({ task, toDelete }: ToDoTaskProps) => {
  return (
    <div className="todo-item">
      <div className="checkbox">
        <input className="input" type="checkbox" />
        <label className="label" key={task.taskName} >{task.taskName}</label>
      </div>
    

      <div>
        <button
          onClick={() => {
            toDelete(task.taskName);
          }}
        >
          <img src={delBtn} className="delete" />
        </button>
      </div>
    </div>
  );
};
export default ToDoTask;
