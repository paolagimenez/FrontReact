import { Fragment } from 'react';
import Personas from './components/Personas/Personas';
import AddPersona from './components/AddPersona/AddPersona';
import './App.css';

function App() {
  
  return (
    <Fragment>
      <main className='container-fluid'>
        <h1 className='row'>Agregar Personas</h1>
        <AddPersona/>
        <Personas />
      </main>
      

    </Fragment>
  );
}

export default App;