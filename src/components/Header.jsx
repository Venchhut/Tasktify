const Header = (props) => {
  const { todos } = props;
  const todosLength = todos.length;
  const isTasksPlural = todos.length !== 1;
  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} {isTasksPlural ? "tasks" : "task"}{" "}
      </h1>
    </header>
  );
};

export default Header;
