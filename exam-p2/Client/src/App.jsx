import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Wishlist from "./pages/Wihslist";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
          <Route />
        </Route>
      </Routes>
    </>
  );
}

export default App;
