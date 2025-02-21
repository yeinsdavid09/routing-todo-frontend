//* Base
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import { ModalProvider } from "./contexts/modalContext";

//* Contexts
import { TasksProvider } from "./contexts/tasksContext";

//* Components
import { NotFound } from "./components/NotFound/NotFound";

//* Routes
import { LayoutRoutes } from "./layout/Layout.routes";

export function App() {
  return (
    <TasksProvider>
      <ModalProvider>
        <HashRouter>
          <Routes>
            <Route path="/*" element={<LayoutRoutes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </ModalProvider>
    </TasksProvider>
  );
}
