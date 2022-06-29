import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import history from "./utils/history";
import Board from "./page/Board";
import SprintMode from "./page/SprintMode";

function App() {
  return (
    <BrowserRouter history={history}>
      <Route path="/" element={<Board />} />
      <Route path="sprint" element={<SprintMode />} />
    </BrowserRouter>
  );
}

export default App;
