import Nav from "./containers/Nav/Nav";

import { FormEvent, useState } from "react";
import { ToDo } from "./types";
import ToDoTask from "./components/ToDoTask";

const App = () => {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<ToDo[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };
  const addTask = (): void => {
    const newTask = { taskName: input };
    setTodo([...todo, newTask]);
    console.log(todo);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask();
    setInput("");
  };

  const toDelete = (taskNametoDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNametoDelete;
      })
    );
  };

  const onCheck = () => {
    
  }

  return (
    <div>
      <Nav
        handleSubmit={handleSubmit}
        input={input}
        handleInput={handleInput}
      />
      {todo.map((task: ToDo, key: number) => {
        return <ToDoTask toDelete={toDelete} key={key} task={task} />;
      })}
    </div>
  );
};

export default App;
