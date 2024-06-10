import React from 'react';
import { useState } from 'react';

function Formulario(props) {

    const [nombre, setNombre] = useState('');
    const [dueño, setDueño] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    function crearcita(event) {
        event.preventDefault(); 

        const nuevaCita = {
            nombre: nombre,
            dueño: dueño,
            fecha: fecha,
            hora: hora,
            sintomas: sintomas
        };

        props.setCitas(prevCitas => [...prevCitas, nuevaCita]);

        setNombre('');
        setDueño('');
        setFecha('');
        setHora('');
        setSintomas('')
    }


    return(

        <>
       

       <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            
            <label htmlFor="dueño">Dueño:</label>
            <input id="dueño" type="text" value={dueño} onChange={(e) => setDueño(e.target.value)} />
            
            <label htmlFor="fecha">Fecha:</label>
            <input id="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            
            <label htmlFor="hora">Hora:</label>
            <input id="hora" type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

            <label htmlFor="sintomas"></label>
            <input id="sintomas" type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
        
        <button onClick={crearcita}>Enviar</button>
        
        


        </>
    )
}

export default Formulario