import React from "react";
import RegistrationForm from "../components/RegistrationForm";
import '../css/FormView.css';

const FormView = () => {
  return (
    <div className="form-card">
      <h1>Formulario de Registro de Personas</h1>
      <RegistrationForm />
    </div>
  );
};

export default FormView;
