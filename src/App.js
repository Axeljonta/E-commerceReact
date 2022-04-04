import './App.css'; 
import Navbar from './components/nav/Navbar'; 
import Container from './components/ItemListContainer' 
import ItemCount from './components/ItemCount';



function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Container/>
    <ItemCount stock='5' initial='1'/>
    <ItemCount stock='10' initial='1'/>
    <ItemCount stock='2' initial='1'/>
    </div>
  );
}

export default App;
