import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Aplicación de Gestión de Personas</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Lista de Personas
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Agregar Persona
        </NavLink>
      </div>
    </header>
  );
};

export default Header;