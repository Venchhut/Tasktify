import { useState } from "react";

const TodoInput = (props) => {
  const { handleTodo } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add a task"
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            return;
          }
          handleTodo(inputValue);
          setInputValue("");
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoInput;
