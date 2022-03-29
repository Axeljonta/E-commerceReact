import './App.css'; 
import './components/nav/Navbar'
import Navbar from './components/nav/Navbar'; 
import Container from './components/ItemListContainer'


function App() {
  return (
    <div className="App"> 
    <Navbar></Navbar> 
    <Container></Container>
    </div>
  );
}

export default App;
