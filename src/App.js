import './App.css'; 
import Navbar from './components/nav/Navbar'; 
import ContainerList from './components/ItemListContainer' 
import ContainerDetail from './components/itemDetailContainer' 
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return ( 
    <div className="App"> 
    <BrowserRouter>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<ContainerList/>}/>
    <Route path='/category/:idCategory' element={<ContainerList/>}/>
    <Route path='/item/:idItem' element={<ContainerDetail/>}/> 
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
