import React, { useState } from "react";
import Todo from "../Todo/Todo";
import st from './TodoList.module.css'

const TodoList = ({ todoList, onDelete, onCheck, state }) => {
  return (
    <ul className={st.list}>
      {state.list === "completed"
        ? Object.keys(todoList).map((id) =>
            todoList[id].check ? (
              <Todo
                key={id}
                id={id}
                todo={todoList[id]}
                onDelete={onDelete}
                onCheck={onCheck}
                dark={state.dark}
              />
            ) : null
          )
        : state.list === "active"
        ? Object.keys(todoList).map((id) =>
            !todoList[id].check ? (
              <Todo
                key={id}
                id={id}
                todo={todoList[id]}
                onDelete={onDelete}
                onCheck={onCheck}
                dark={state.dark}
              />
            ) : null
          )
        : Object.keys(todoList).map((id) => (
            <Todo
              key={id}
              id={id}
              todo={todoList[id]}
              onDelete={onDelete}
              onCheck={onCheck}
              dark={state.dark}
            />
          ))}
    </ul>
  );
};

export default TodoList;
