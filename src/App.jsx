import "./App.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import { HomePage, Backe } from "./components/HomePage";
import Portfolio from "./components/filter/Portfolio";
import Store from "./components/layouts/Store";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/Task1"
          element={
            <>
              <Backe />
              <Portfolio />
            </>
          }
        />
        <Route
          path="/Task2"
          element={
            <>
              <Backe />
              <Store />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
