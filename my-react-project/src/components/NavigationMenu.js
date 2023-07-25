import React from "react";
import { Link } from "react-router-dom";
import '../css/NavigationMenu.css';


const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <ul>
        <li>
          <Link to="/formulario">Formulario</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;