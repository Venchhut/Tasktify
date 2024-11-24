import Header from "./components/Header";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useState } from "react";

const App = () => {
  // const todos = [
  //   {
  //     input: "Hello! Add your first task",
  //     complete: true,
  //   },
  //   {
  //     input: "Learn React Hooks",
  //     complete: false,
  //   },
  //   {
  //     input: "Learn React Context API",
  //     complete: true,
  //   },
  //   {
  //     input: "Learn React Router",
  //     complete: false,
  //   },
  // ];

  const [todos, setTodos] = useState([
    { input: "Learn React Router", complete: true },
  ]);
  const [setTab, setSetTab] = useState("All");
  function handleTodo(Todo) {
    const newTodo = [...todos, { input: Todo, complete: false }];
    setTodos(newTodo);
  }
  function handleDelete(index) {
    const newTodolist = todos.filter(
      (value, valueIndex) => valueIndex !== index
    );
    setTodos(newTodolist);
  }
  function handleDone(index) {
    let newTodoList = [...todos];
    let completeTodo = todos[index];
    completeTodo["complete"] = true;
    newTodoList[index] = completeTodo;
    setTodos(newTodoList);
  }
  return (
    <>
      <Header todos={todos} />
      <Tabs todos={todos} setTab={setTab} setSetTab={setSetTab} />
      <TodoList
        handleDelete={handleDelete}
        handleDone={handleDone}
        todos={todos}
        setTab={setTab}
      />
      <TodoInput handleTodo={handleTodo} />
    </>
  );
};

export default App;
