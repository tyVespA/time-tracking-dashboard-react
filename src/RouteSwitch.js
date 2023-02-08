import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import TestComponent from "./components/TestComponent";
import Card from "./components/Card";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test-component" element={<TestComponent />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
