import Nav from "./Nav/Nav";

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
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //makes sure the page does not refresh every time you add new task
    if (input == "") {
      alert("Please enter a todo");
    } else addTask();
    setInput("");
  };

  const toDelete = (taskNametoDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName != taskNametoDelete;
      })
    );
  };

  const reset = () => {
    setInput("");
    setTodo([]);
  };

  return (
    <div>
      <Nav
        reset={reset}
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
