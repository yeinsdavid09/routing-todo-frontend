import { createContext, useState } from "react";

//* Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LS_KEYS } from "../utils/constants";

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
  } = useLocalStorage(LS_KEYS.TASKS, []);
  const [searchValue, setSearchValue] = useState("");
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchValue.toLowerCase())
  );

  //#endregion

  //#region --------------------------------- Methods ---------------------------------

  function addTasks(newTask) {
    const tasksCopy = [...tasks];
    tasksCopy.push({
      id: tasksCopy.length + 2,
      description: newTask,
      completed: false,
    });
    setTasks(tasksCopy);
  }

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
        addTasks,
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
