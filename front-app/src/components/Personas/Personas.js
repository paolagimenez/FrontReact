import{useEffect,useState} from 'react';

import Persona from "../Persona/Persona";

export default function Personas() {
    let [datos,setDatos]=useState([]);



    return(
        <section className= 'row card text-white bg-secondary m-3 align-items-center w-50'>

            {datos.map((dato)=>{
               return <Persona key={datos.indexOf(dato)} info={dato} />
            })}
        </section>
    )
}