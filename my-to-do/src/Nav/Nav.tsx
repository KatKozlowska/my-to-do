import "./Nav.scss";
import { FormEventHandler } from "react";
import plus from "../assets/plus.png";

type NavProps = {
  input: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  reset: () => void;
};

const Nav = ({ input, handleInput, handleSubmit, reset }: NavProps) => {
  
  return (
    <>
      <div className="nav">
        <h1 className="nav__heading">My Todos</h1>
        <button className="nav__button" onClick={reset}>
          Reset
        </button>
      </div>
      <section className="new-todo">
        <form onSubmit={handleSubmit} className="new-todo__form">
          <input
            type="text"
            value={input}
            onInput={handleInput}
            placeholder="Add your task here..."
          />
          <button className="new-todo__button">
            <img className="plus" src={plus} />
          </button>
        </form>
    
      </section>
    </>
  );
};
export default Nav;
