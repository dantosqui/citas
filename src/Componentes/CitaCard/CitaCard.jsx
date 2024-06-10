

function CitaCard(props) {


    return(
        <>
        
        <div>
            Mascota: {props.mascota}
            Dueño: {props.dueño}
            Fecha: {props.fecha}
            Hora: {props.hora}
            Sintomas: {props.sintomas}
            <button onClick={() => props.eliminar(props.i)}>borrar</button>
        </div>

        </>
    )


}

export default CitaCard