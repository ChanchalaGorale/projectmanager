import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Board from "./page/Board/index";
import SprintMode from "./page/SprintMode/index";

function App() {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/sprint" element={<SprintMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
