import { type } from "@testing-library/user-event/dist/type";

export default function todoReducer(todoList, action) {
  switch (action.type) {
    case "delete": {
      const { id } = action;
      const deletedTodoList = { ...todoList };
      delete deletedTodoList[id];
      localStorage.removeItem(parseInt(id));
      // 왜 여기서 저장이 안되는 걸까? 내가 뭔가 더 모르는게 있는 것 같다.
      return deletedTodoList;
    }
    case "add": {
      const { value } = action;
      if (value==='') return todoList
      return {
        ...todoList,
        [Date.now()]: { content: value, check: false },
      };
    }
    case "check": {
      const { id } = action;
      return {
        ...todoList,
        [id]: { ...todoList[id], check: !todoList[id].check },
      };
    }
    case "save": {
      Object.keys(todoList).map((todoId) => {
        localStorage.setItem(todoId, JSON.stringify(todoList[todoId]));
      });
      return todoList
    }
    case "getList": {
      const list = {};
      for (let i = 0; i < localStorage.length; i++) {
        const id = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(id));
        Object.assign(list, { [id]: item });
      }
      return list;
    }
    default:
      throw Error("Unknown action. :" + action.type);
  }
}
