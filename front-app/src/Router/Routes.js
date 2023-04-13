import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../components/Home/Home';
import AddPersona from '../components/AddPersona/AddPersona';
import Personas from '../components/Personas/Personas';
import Persona from '../components/Persona/Persona';

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/addPersona' element={<AddPersona/>}/>
                <Route path='/persona' element={<Persona/>}/>
                <Route path='/personas' element={<Personas/>}/>
            </Routes>
        </BrowserRouter>
    )
}