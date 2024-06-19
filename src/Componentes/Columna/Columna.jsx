import React from "react";

function Columna(props) {


<div className="one-half column">
    <h2>{props.heading}</h2>
    {props.componente}
</div>


}

export default Columna