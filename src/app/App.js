//* Base
import "./App.css";

//* Contexts
import { TasksProvider } from "./contexts/tasksContext";

//* Components
import { Layout } from "./layout/Layout";

export function App() {
  return (
    <TasksProvider>
      <Layout></Layout>;
    </TasksProvider>
  );
}
