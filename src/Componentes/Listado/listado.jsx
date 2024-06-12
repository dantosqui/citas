import CitaCard from "../CitaCard/CitaCard.jsx"

function Listado(props) {

    function Eliminar(index) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("¿Seguro que quieres borrar la cita?"))
            props.setCitas(prevCitas => prevCitas.filter((_, i) => i !== index));
        
    
    }

    return(
        <>
        
        {props.citas.map((cita,index) =>(
            <CitaCard i={index} eliminar={Eliminar} mascota={cita.nombre} dueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}></CitaCard>
        ))}

        </>
    )


}

export default Listado