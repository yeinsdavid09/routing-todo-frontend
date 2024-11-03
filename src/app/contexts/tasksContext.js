import { createContext, useState } from "react";

//* Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LS_KEYS } from "../utils/constants";

const defaultTasks = [
  { id: 1, description: "Task 1", completed: true },
  { id: 2, description: "Task 2", completed: false },
  { id: 3, description: "Task 3", completed: false },
  { id: 4, description: "Task 4", completed: false },
  { id: 5, description: "Task 5", completed: false },
];

//#region --------------------------------- Context ---------------------------------

export const TasksContext = createContext();

//#endregion

//#region --------------------------------- Provider ---------------------------------

export function TasksProvider({ children }) {
  //#region --------------------------------- Variables ---------------------------------

  const {
    item: tasks,
    saveItem: setTasks,
    loading,
    error,
  } = useLocalStorage(LS_KEYS.TASKS, defaultTasks);
  const [searchValue, setSearchValue] = useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function checkTasks(taskIndex) {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].completed = !tasksCopy[taskIndex].completed;
    setTasks(tasksCopy);
  }

  function deleteTasks(taskIndex) {
    const tasksCopy = [...tasks];
    tasksCopy.splice(taskIndex, 1);
    setTasks(tasksCopy);
  }

  //#endregion

  //#region --------------------------------- Return ---------------------------------

  return (
    <TasksContext.Provider
      value={{
        completedTasks,
        totalTasks,
        searchValue,
        setSearchValue,
        searchedTasks,
        checkTasks,
        deleteTasks,
        loading,
        error,
      }}
    >
      {children}
    </TasksContext.Provider>
  );

  //#endregion
}

//#endregion
