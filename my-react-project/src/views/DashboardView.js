import React from "react";
import ChartComponent from "../components/ChartComponent";
import '../css/DashboardView.css';

const DashboardView = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr", gridTemplateRows: "auto 1fr", height: "auto" }}>
      <div style={{ padding: "20px", textAlign: "center"}}>
        <ChartComponent />
      </div>
    </div>
  );
};

export default DashboardView;
