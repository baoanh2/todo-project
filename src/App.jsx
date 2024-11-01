import { useEffect, useState } from "react";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [tasks, setTasks] = useState(["Go to school", "Junior Baby"]);
  const [newTask, setNewTask] = useState("");
  function persistData(newList) {
    localStorage.setItem("tasks", JSON.stringify({ tasks: newList }));
  }

  function addTask() {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks, newTask];
      persistData(updatedTasks);
      setTasks(updatedTasks);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    persistData(updatedTasks);
    setTasks(updatedTasks);
  }
  function editTask(index) {
    const valuedToBeEdited = tasks[index];
    setNewTask(valuedToBeEdited);
    deleteTask(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTasksToDo = localStorage.getItem("tasks");
    if (!localTasksToDo) {
      return;
    }
    localTasksToDo = JSON.parse(localTasksToDo).tasks;
    setTasks(localTasksToDo);
  }, []);

  return (
    <>
      <div className="container">
        <ToDoInput
          addTask={addTask}
          setNewTask={setNewTask}
          newTask={newTask}
        />
        <ToDoList
          index={tasks}
          editTask={editTask}
          deleteTask={deleteTask}
          tasks={tasks}
        />
      </div>
    </>
  );
}

export default App;
