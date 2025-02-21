import { Navigate, Route, Routes } from "react-router-dom";

//* Components
import { Create } from "./pages/Create/Create";
import { Home } from "./pages/Home/Home";
import { Update } from "./pages/Update/Update";
import { Layout } from "./Layout";

export function LayoutRoutes() {
  //#region --------------------------------- Return ---------------------------------

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Route>
    </Routes>
  );

  //#endregion
}
