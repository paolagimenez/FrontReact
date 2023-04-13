import {Link} from "react-router-dom";
import './Navegation.css';

export default function Navegation() {
    return (  
        <header className="d-flex flex-row align-items-center justify-content-between bg-blue"> 
            <h1 className="titulo-nav w-50">Proyecto React</h1>   
            <nav className="navbar navbar-expand-lg w-50 ">          
                <ul className="navbar-nav ms-auto">
                    <li>
                        <Link className="btn botones" to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link className="btn botones btn-active" to="/addPersona"> Agregar Personas</Link>
                    </li> 
                    <li>
                        <Link className="btn botones btn-active" to="/personas">Listado de Personas</Link>
                    </li>   
                                       
                </ul>
            </nav>
        </header>
    );
  }