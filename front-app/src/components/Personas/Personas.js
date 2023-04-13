import{useEffect,useState} from 'react';
import { Fragment } from 'react';

import Navegation from '../Navegation/Navegation';
import Persona from "../Persona/Persona";

export default function Personas() {
    
    let [datos,setDatos]=useState([]);

    return(
        <Fragment>
        <Navegation />
        <section className= 'row card text-white bg-secondary m-3 align-items-center w-50'>

            {datos.map((dato)=>{
               return <Persona key={datos.indexOf(dato)} info={dato} />
            })}
        </section>
        </Fragment>
    )
 
}