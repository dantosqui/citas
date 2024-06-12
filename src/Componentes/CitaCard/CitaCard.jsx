import "./citacard.css"

function CitaCard(props) {


    return(
        
        
        <div className="cita">
            <p>Mascota: <span>{props.mascota}</span></p>
            <p>Dueño: <span>{props.dueño}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <button class="button eliminar u-full-width" onClick={() => props.eliminar(props.i)}>Eliminar</button>
        </div>

        
    )


}

export default CitaCard