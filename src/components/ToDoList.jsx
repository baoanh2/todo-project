import React from "react";

export default function ToDoList(props) {
  const { tasks, editTask, deleteTask } = props;
  return (
    <div className="to-do-list">
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>
            <div>
              <button id="edit-button">
                <i
                  onClick={() => editTask(index)}
                  className="fa-regular fa-pen-to-square"
                />
              </button>
              <button id="delete-button">
                <i
                  onClick={() => deleteTask(index)}
                  className="fa-solid fa-trash"
                />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
