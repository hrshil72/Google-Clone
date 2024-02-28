import React from "react";
import Home from "./pages/homePage/Home";
import { Routes, Route } from "react-router-dom";
import Result from "./pages/resultPage/Result";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
};

export default App;
