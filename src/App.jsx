import st from "./App.module.css";
import { useEffect, useReducer, useState } from "react";
import Input from "./component/Input/Input";
import TodoList from "./component/TodoList/TodoList";
import Nav from "./component/Nav/Nav";
import todoReducer from "./reducer/todoReducer";

function App() {
  const [todoList, dispatch] = useReducer(todoReducer, {});
  const [state, setState] = useState({list:'all',dark:false});

  useEffect(() => {
    dispatch({ type: "getList" });
  }, []);

  useEffect(() => {
    dispatch({ type: "save" });
  }, [todoList]);

  const onDelete = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch({ type: "delete", id});
  };
  const onAdd = (e) => {
    e.preventDefault();
    const value = e.target[0].value;
    e.target[0].value = ''
    dispatch({ type: "add", value });
  };
  const onCheck = (e) => {
    const id = parseInt(e.target.parentNode.id);
    dispatch({ type: "check", id });
  };

  const onStateChange = (e)=>{
    const list = e.target.value;
    setState({ ...state,list})
  }
  const onDarkMode = ()=>{
    setState({ ...state,dark:!state.dark})
  }
  return (
    <div className={st.container} style={state.dark?{backgroundColor:'gray'}:null}>
      <div className={st.App} style={state.dark?{backgroundColor: 'gray'}:null}>
        <Nav onStateChange={onStateChange} onDarkMode={onDarkMode} state={state}/>
        <TodoList
          todoList={todoList}
          onDelete={onDelete}
          onCheck={onCheck}
          state={state}
        />
        <Input addTodo={onAdd} />
      </div>
    </div>
  );
}

export default App;
