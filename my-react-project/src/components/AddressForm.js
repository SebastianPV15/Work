import React from "react";

const AddressForm = () => {
  
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

  return (
    <div className="address-form">
      <h3>Formulario de Dirección</h3>
      <div className="row">
        <div className="form-group">
          <label htmlFor="calle">Calle:</label>
          <input type="text" id="calle" name="calle" />
        </div>

        <div className="form-group">
          <label htmlFor="numInterior">Número Interior:</label>
          <input type="text" id="numInterior" name="numInterior" />
        </div>

        <div className="form-group">
          <label htmlFor="numExterior">Número Exterior:</label>
          <input type="text" id="numExterior" name="numExterior" />
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
      </div>

      <div className="row">
        <div className="form-group">
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

        <div className="form-group">
          <label htmlFor="colonia">Colonia:</label>
          <input type="text" id="colonia" name="colonia" />
        </div>

        <div className="form-group">
          <label htmlFor="codigoPostal">Código Postal:</label>
          <input type="text" id="codigoPostal" name="codigoPostal" />
        </div>

        <div className="form-group">
          <label htmlFor="seccionVota">Sección Vota:</label>
          <input type="text" id="seccionVota" name="seccionVota" />
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="telCelular">Teléfono Celular:</label>
          <input type="text" id="telCelular" name="telCelular" />
        </div>

        <div className="form-group">
          <label htmlFor="telFijo">Teléfono Fijo:</label>
          <input type="text" id="telFijo" name="telFijo" />
        </div>

        <div className="form-group">
          <label htmlFor="telMensajes">Teléfono Mensajes:</label>
          <input type="text" id="telMensajes" name="telMensajes" />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;