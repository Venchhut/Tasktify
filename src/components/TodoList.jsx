import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos, setTab, handleDelete, handleDone } = props;

  const filterTodo =
    setTab === "All"
      ? todos
      : setTab === "Active"
      ? todos.filter((item) => !item.complete)
      : todos.filter((item) => item.complete);

  return (
    <>
      {filterTodo.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
};

export default TodoList;
