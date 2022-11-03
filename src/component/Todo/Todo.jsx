import React, { useEffect, useState } from "react";
import st from "./Todo.module.css";
import { FaTrashAlt, FaRegCheckSquare, FaRegSquare } from "react-icons/fa";
import { TfiTrash } from "react-icons/tfi";
const Todo = ({ id, todo, onDelete, onCheck, dark }) => {
  const { content, check } = todo;
  const styleTag = dark
    ? check
      ? { textDecorationLine: "line-through", opacity: "0.5", color: "white" }
      : { color: "white" }
    : check
    ? { textDecorationLine: "line-through", opacity: "0.5" }
    : {};
  return (
    <li className={st.list} id={id} style={styleTag}>
      <label htmlFor={`name${id}`}>
        {check ? <FaRegCheckSquare /> : <FaRegSquare />}
        <span className={st.content}>{content}</span>
      </label>
      <input
        className={st.check}
        checked={check}
        type="checkbox"
        onChange={onCheck}
        id={`name${id}`}
      />
      <button className={st.button} onClick={onDelete} id={`delete${id}`} />
      <label className={st.delete} htmlFor={`delete${id}`}>
        <TfiTrash />
      </label>
    </li>
  );
};

export default Todo;
