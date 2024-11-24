const TodoCard = (props) => {
  const { todo, handleDelete, todoIndex, handleDone } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button onClick={() => handleDone(todoIndex)} disabled={todo.complete}>
          Done
        </button>
        <button onClick={() => handleDelete(todoIndex)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
