

function Formulario(props) {

    

    return(

        <>
        <form action={props.setCitas}>

        <label htmlFor="nombre"></label>
        <input id="nombre" type="text" name="nombre"/>
        
        <label htmlFor="dueño"></label>
        <input id="dueño" type="text" name="dueño"/>
        
        <label htmlFor="fecha"></label>
        <input id="fecha" type="date" name="fecha"/>
        
        <label htmlFor="hora"></label>
        <input id="hora" type="time" name="hora"/>
        
        <input type="submit" value="añadir"></input>
        
        </form>

        </>
    )
}

export default Formulario