//* Base
import "./App.css";
import { ModalProvider } from "./contexts/modalContext";

//* Contexts
import { TasksProvider } from "./contexts/tasksContext";

//* Components
import { Layout } from "./layout/Layout";

export function App() {
  return (
    <TasksProvider>
      <ModalProvider>
        <Layout></Layout>;
      </ModalProvider>
    </TasksProvider>
  );
}
