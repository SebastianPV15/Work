import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/NavigationMenu";
import FormView from "./views/FormView";
import DashboardView from "./views/DashboardView";
import "./css/styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container" style={{ backgroundColor: "#f0f0f0" }}>
        <NavigationMenu />

        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/formulario" element={<FormView />} />
          <Route path="/dashboard" element={<DashboardView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
