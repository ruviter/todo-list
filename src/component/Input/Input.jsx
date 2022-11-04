import React from "react";
import st from './Input.module.css'

const Input = ({addTodo}) => {
  return (
    <>
      <form className={st.form} action="submit" onSubmit={addTodo}>
        <input className={st.input} type="text" placeholder="Add to do 이슈2드가자~" />
        <button className={st.submit} >Add</button>
      </form>
    </>
  );
};

export default Input;
