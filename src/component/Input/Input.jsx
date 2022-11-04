import React from "react";
import st from './Input.module.css'

const Input = ({addTodo}) => {
  return (
    <>
      <form className={st.form} action="submit" onSubmit={addTodo}>
<<<<<<< HEAD
        <input className={st.input} type="text" placeholder="2222222222" />
=======
        <input className={st.input} type="text" placeholder="33333333" />
>>>>>>> 3c8750d (33333)
        <button className={st.submit} >Add</button>
      </form>
    </>
  );
};

export default Input;
