import React from "react";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";

const App = () => {
    const meses = ["Enero", "Febrero", "Marzo", "Abril"];
    const auth = false;
    return (
        <div>
            <ul>
                {meses.map((mes, id) => (
                    <li key={id}>{mes}</li>
                ))}
            </ul>
            <p>
                {auth
                    ? "El usuario está autenticado"
                    : "El usuario no está autenticado"}
            </p>
            <Componente />
            <hr />
            <Propiedades 
                cadena="Esto es una cadena de texto" 
                numero={19}
                booleano={true}
                arreglo={[1, 2, 3]}
                objeto={{nombre:"gianmarco", correo:"gianamrcopablo58@gmail.com"}}
                elementoReact={<i>Esto es un elemento React</i>}
                funcion= {num=> num * num}
                componenteReact={<Componente msg="soy un componente pasado como prop"/>}
            />
            <hr />
            <Estado/>
            <hr />
            <RenderizadoCondicional/>
            <hr />
            <RenderizadoElementos/>
        </div>
    );
};

export default App;
