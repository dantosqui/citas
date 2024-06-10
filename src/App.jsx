import React from 'react';
import { useState } from 'react';
import './App.css';
import Formulario from './Componentes/Formulario/Formulario';
import Listado from './Componentes/Listado/listado'

function App() {

  const [citas, setCitas] = useState([]);
  return (
    <div>
      
      <h1>ADMINISTRADOR DE PACIENTE</h1>
      <div class="crear">
      
        <h2>CREAR MI CITA</h2>
        <Formulario setCitas={setCitas}></Formulario>

      </div>

      <div className="citaslist">
      <h2>ADMINISTRA TUS CITAS</h2>
      
      <Listado citas={citas} setCitas={setCitas}></Listado>
      {console.log(citas)}
      </div>

    </div>
  );
}

export default App;
