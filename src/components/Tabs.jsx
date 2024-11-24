import React from "react";

const Tabs = (props) => {
  const { todos, setTab, setSetTab } = props;
  const tabs = ["All", "Active", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, index) => {
        const numberOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Active"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;
        return (
          <button
            onClick={() => setSetTab(tab)}
            key={index}
            className={"tab-button" + (tab === setTab ? "tab-selected" : "")}
          >
            <h4>
              {tab}
              <span>({numberOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
};

export default Tabs;
