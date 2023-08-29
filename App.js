
import './App.css';
import Login from './Site/Login/login';
import I from './Site/boshi/I';
import Card from './Site/card/Card';
import Dars from './Site/dars/Dars';
import Home from './Site/home/Home';
import { Routes , Route ,BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/> 
      <Route path='/dars' element={<Dars/>}/>
      <Route path="/:id" element={<Card/>}/>
      <Route path='*' element={404} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;