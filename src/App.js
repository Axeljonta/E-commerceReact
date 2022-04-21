import './App.css'; 
import Navbar from './components/Navbar'; 
import ContainerList from './components/ItemListContainer' 
import ContainerDetail from './components/itemDetailContainer'
import Cart from './components/Cart';
import CartContextProvider from './components/CartContex'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return ( 
    <div className="App"> 
    <CartContextProvider>
    <BrowserRouter>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<ContainerList/>}/>
    <Route path='/category/:idCategory' element={<ContainerList/>}/>
    <Route path='/item/:idItem' element={<ContainerDetail/>}/>
    <Route path='/cart' element={<Cart/>}/> 
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
