import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SearchForm = ({ handleSearch }) => {
  const [searchResults] = useState(null);

  const municipios = [
    "Canatlan",
    "Cuencame",
    "Guadalupe Victoria",
    "Nombre de Dios",
  ];

  const secciones = [21311, 43243, 43545];

  return (
    <div className="search-form">
      <h3>Buscar Responsable</h3>
      <Formik
        initialValues={{
          responsable: "",
          municipio: "",
          seccion: "",
        }}
        onSubmit={(values) => {
          handleSearch(values); // Llamado a la función para manejar la búsqueda
        }}
      >
        {/* Agregamos una condición para mostrar u ocultar el formulario de búsqueda */}
        {({ handleSubmit }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="responsable">Responsable:</label>
              <Field type="text" id="responsable" name="responsable" />
              <ErrorMessage
                name="responsable"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="municipio">Municipio:</label>
              <select id="municipio" name="municipio">
                <option value="">Seleccionar Municipio</option>
                {municipios.map((municipio) => (
                  <option key={municipio} value={municipio}>
                    {municipio}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="seccion">Seccion:</label>
              <select id="municipio" name="seccion">
                <option value="">Seleccionar Seccion</option>
                {secciones.map((seccion) => (
                  <option key={seccion} value={seccion}>
                    {seccion}
                  </option>
                ))}
              </select>
            </div>

            <button className="button-search" type="submit">
              Buscar
            </button>
          </Form>
        )}
      </Formik>

      {/* Mostrar resultados de búsqueda */}
      {searchResults && (
        <div className="search-results">
          <h2>Resultados de Búsqueda</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {result.nombre},{" "}
                <strong>Municipio:</strong> {result.municipio},{" "}
                <strong>Sección:</strong> {result.seccion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
