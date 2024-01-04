
import "./Nav.scss";
import { FormEventHandler } from "react";

type NavProps = {
  input: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
}


const Nav = ({input,handleInput, handleSubmit}:NavProps) => {

  return (
    <>
      <div className="nav">
        <h1 className="nav__heading">My Todos</h1>
        <button className="nav__button">Reset</button>
      </div>
      <section className="new-todo">
      <form onSubmit={handleSubmit} className="new-todo__form" >
          <input type="text" value={input} onInput={handleInput} placeholder="Add your task here..."  />
        <button className="new-todo__button" >+</button>
        </form>
      </section>
    </>
  );
};
export default Nav;
