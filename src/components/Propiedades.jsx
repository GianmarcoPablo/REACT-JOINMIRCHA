import React from 'react'

const Propiedades = (props) => {
  return (
    <div>
        <h2>{props.porDefecto}</h2>
        <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano ? "Verdade  ro" : "Falso"}</li>
            <li>{props.arreglo.join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo} </li>
            <li>{props.elementoReact}</li>
            <li>{props.arreglo.map(props.funcion).join(", ") } </li>
            <li>{props.componenteReact}</li>
        </ul>
    </div>
  )
}

//propiedades por defecto
Propiedades.defaultProps = {
    porDefecto: "Las props"
}

export default Propiedades
