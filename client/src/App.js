import Add from './components/Add';
import './App.css'
import {Route,Routes} from 'react-router-dom';
import Error from "./components/Error";
import List from './components/List';
import Update from './components/Update'
import About from './components/About';

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<List/>} />
    <Route path="/add" element={<Add/>}/>
    <Route path='/list' element={<List/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
  );
}

export default App;
