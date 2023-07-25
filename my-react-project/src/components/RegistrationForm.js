import React, { useState } from "react";
import SearchForm from "./SearchForm";
import AddressForm from "./AddressForm";
import { Formik, Form, Field, ErrorMessage } from "formik";

const RegistrationForm = () => {
  const [nacionalidad, setNacionalidad] = useState("");
  const [sameAddress, setSameAddress] = useState(false);

  const handleSubmit = (values) => {
    // Aquí puedes enviar los datos del formulario a tu backend o realizar cualquier acción que necesites
    console.log(values);
  };
  const handleSearch = (values) => {};

  const initialValues = {
    name: "",
    age: "",
    claveE: "",
    lastname: "",
    lastname2: "",
  };

  const estados = [
    "Aguascalientes",
    "Durango",
    "Baja California",
    "Baja California Sur",
    "Campeche",
  ];

  const localidades = [
    "Victoria de Durango",
    "Gomez Palacio",
    "Ciudad Lerdo",
    "Santiago Papasquiario",
  ];

  const municipios = [
    "Canatlan",
    "Cuencame",
    "Guadalupe Victoria",
    "Nombre de Dios",
  ];

  // Validaciones del formulario
  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "El nombre es obligatorio";
    }

    if (!values.age) {
      errors.age = "La edad es obligatoria";
    } else if (isNaN(values.age)) {
      errors.age = "La edad debe ser un número";
    } else if (parseInt(values.age) < 18) {
      errors.age = "Debes tener al menos 18 años";
    }

    if (!values.lastname) {
      errors.lastname = "El apellido paterno es obligatorio";
    }

    if (!values.lastname2) {
      errors.lastname2 = "El apellido materno es obligatorio";
    }

    if (!values.claveE) {
      errors.claveE = "La clave electoral es obligatoria";
    }

    return errors;
  };

  // Estado para controlar la visibilidad del formulario de búsqueda
  const [showSearchForm, setShowSearchForm] = useState(false);

  // Función para manejar el clic en el botón de búsqueda
  const handleSearchButtonClick = () => {
    setShowSearchForm(!showSearchForm);
  };

  return (
    <div>
      <button className="search-button" onClick={handleSearchButtonClick}>
        <span role="img" aria-label="search-icon">
          🔍
        </span>{" "}
        Buscar Responsable
      </button>

      {/* Mostrar el formulario de búsqueda si showSearchForm es verdadero */}
      {showSearchForm && <SearchForm handleSearch={handleSearch} />}

      <h3>Datos Personales</h3>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nombre(s):</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="lastname">Apellido Paterno:</label>
              <Field type="text" id="lastname" name="lastname" />
              <ErrorMessage name="lastname" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="lastname2">Apellido Materno:</label>
              <Field type="text" id="lastname2" name="lastname2" />
              <ErrorMessage
                name="lastname2"
                component="div"
                className="error"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Edad:</label>
              <Field type="text" id="age" name="age" />
              <ErrorMessage name="age" component="div" className="error" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="sexo">Sexo:</label>
              <Field as="select" id="sexo" name="sexo">
                <option value="">Seleccionar sexo</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </Field>
              <ErrorMessage name="sexo" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="claveE">Clave Electoral</label>
              <Field type="text" id="claveE" name="claveE" />
              <ErrorMessage name="claveE" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="estado">Estado de Nacimiento:</label>
              <Field as="select" id="estado" name="estado">
                <option value="">Seleccionar un estado</option>
                {estados.map((estado) => (
                  <option key={estado} value={estado}>
                    {estado}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="estado" component="div" className="error" />
            </div>

            <div className="form-group">
              <label htmlFor="dateOfBirth">Fecha de Nacimiento:</label>
              <Field type="date" id="dateOfBirth" name="dateOfBirth" />
              <ErrorMessage
                name="dateOfBirth"
                component="div"
                className="error"
              />
            </div>
          </div>

          <AddressForm />

          <div className="field-container">
            <div>
              <label htmlFor="voluntario">¿Desea ser voluntario?:</label>
              <input type="checkbox" id="voluntario" name="voluntario" />
            </div>
          </div>

          <div className="field-container">
            <div className="nacionalidad-container">
              <label>Nacionalidad</label>
              <button
                type="button"
                className={nacionalidad === "mexicana" ? "selected" : ""}
                onClick={() => setNacionalidad("mexicana")}
              >
                Nacionalidad Mexicana
              </button>
              <button
                type="button"
                className={nacionalidad === "extranjera" ? "selected" : ""}
                onClick={() => setNacionalidad("extranjera")}
              >
                Nacionalidad Extranjera
              </button>
            </div>
          </div>

          <div className="field-container">
            <div className="form-group">
              <label>
                ¿La dirección de la credencial de elector y donde vive es la
                misma?
              </label>
              <div>
                <input
                  type="checkbox"
                  id="sameAddressYes"
                  name="sameAddress"
                  checked={sameAddress}
                  onChange={() => setSameAddress(true)}
                />
                <label htmlFor="sameAddressYes">Sí</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="sameAddressNo"
                  name="sameAddress"
                  checked={!sameAddress}
                  onChange={() => setSameAddress(false)}
                />
                <label htmlFor="sameAddressNo">No</label>
              </div>
            </div>
          </div>

          {!sameAddress && (
            <div className="address-form">
              <h3>Dirección</h3>
              <div className="form-row">
                <div>
                  <label htmlFor="street">Calle:</label>
                  <input type="text" id="street" name="street" />
                </div>
                <div>
                  <label htmlFor="extNumber">Número Exterior:</label>
                  <input type="text" id="extNumber" name="extNumber" />
                </div>
                <div>
                  <label htmlFor="intNumber">Número Interior:</label>
                  <input type="text" id="intNumber" name="intNumber" />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label htmlFor="municipio">Municipio Vota:</label>
                  <select id="municipio" name="municipio">
                    <option value="">Seleccionar Municipio</option>
                    {municipios.map((municipio) => (
                      <option key={municipio} value={municipio}>
                        {municipio}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="localidad">Localidad:</label>
                  <select id="localidad" name="localidad">
                    <option value="">Seleccionar Localidad</option>
                    {localidades.map((localidad) => (
                      <option key={localidad} value={localidad}>
                        {localidad}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="colonia">Colonia:</label>
                  <input type="text" id="colonia" name="colonia" />
                </div>
                <div>
                  <label htmlFor="cp">Código Postal:</label>
                  <input type="text" id="cp" name="cp" />
                </div>
              </div>
            </div>
          )}

          <button type="button" className="red-button">
            Limpiar
          </button>
          <button type="submit" className="blue-button">
            Guardar
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
