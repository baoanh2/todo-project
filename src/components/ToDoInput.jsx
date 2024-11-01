import React from "react";

export default function ToDoInput(props) {
  const { setNewTask, newTask, addTask } = props;
  function handleInputChange(e) {
    setNewTask(e.target.value);
  }
  return (
    <div>
      <h1>To Do List</h1>
      <div id="input-row">
        <input
          id="input-tasks"
          onChange={handleInputChange}
          value={newTask}
          type="text"
          placeholder="Enter a task..."
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              addTask();
            }
          }}
        />
        <button onClick={() => addTask()} id="add-button">
          Add
        </button>
      </div>
    </div>
  );
}
