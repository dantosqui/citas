import React from 'react';
import { useState } from 'react';
import './formulario.css'

function Formulario(props) {

    const [nombre, setNombre] = useState('');
    const [dueño, setDueño] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    function crearcita(event) {
        if (nombre !=="" && dueño !=="" && fecha !=="" && hora !=="" && sintomas !==""){
        // eslint-disable-next-line no-restricted-globals
        if (confirm("¿Seguro que quieres crear la cita?")){
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
        setSintomas('')}
        
    }
    else{
        alert("Verifique que haya ingresado todos los campos - perdon por la alert jiji")
    }
    }


    return(

        <form>
       
        
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" className='u-full-width' type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder='Nombre de la mascota' />
            
            <label htmlFor="dueño">Dueño:</label>
            <input id="dueño" className='u-full-width' type="text" value={dueño} onChange={(e) => setDueño(e.target.value)} placeholder='Nombre del dueño de la mascota'/>
            
            <label htmlFor="fecha">Fecha:</label>
            <input id="fecha" className='u-full-width' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
            
            <label htmlFor="hora">Hora:</label>
            <input id="hora" className='u-full-width' type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

            <label htmlFor="sintomas"></label>
            <textarea id="sintomas" maxLength={206} className='u-full-width' type="text" value={sintomas} onChange={(e) => setSintomas(e.target.value)} placeholder='Describe los sintomas...'/>
        
             <button type="button" className="u-full-width button-primary" onClick={crearcita}>Enviar</button>
        
        


        </form>
    )
}

export default Formulario