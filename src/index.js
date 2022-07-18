import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Expenses from "./pages/expenses";
import Manage from "./pages/manage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/react">
    <Routes>
      <Route path="/" />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/manage" element={<Manage />} />
    </Routes>
  </BrowserRouter>
);
