import React from "react";
import { useState } from "react";
import "./App.css";
import Formulario from "./Componentes/Formulario/Formulario";
import Listado from "./Componentes/Listado/listado";
import Columna from "./Componentes/Columna/Columna"

function App() {
  const [citas, setCitas] = useState([]);
  return (
    
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          {/*
          <div className="one-half column">
            <h2>CREAR MI CITA</h2>
            <Formulario setCitas={setCitas}></Formulario>
          </div>

          <div className="one-half column">
            <h2>ADMINISTRA TUS CITAS</h2>

            <Listado citas={citas} setCitas={setCitas}></Listado>
          </div>
  */}
          <Columna heading="CREAR MI CITA" componente={<Formulario setCitas={setCitas}></Formulario>}></Columna>
          <Columna heading ="ADMINISTRA TUS CITAS" componente = {<Listado citas={citas} setCitas={setCitas}></Listado>}></Columna>
        </div>
      </div>
    </div>
  );
}

export default App;
