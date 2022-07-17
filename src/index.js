import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Expenses from "./routes/expenses/expenses";
import Manage from "./routes/manage/manage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/react" />
      <Route path="/react/expenses" element={<Expenses />} />
      <Route path="/react/manage" element={<Manage />} />
    </Routes>
  </BrowserRouter>
);
